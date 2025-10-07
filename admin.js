document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo admin.js se está ejecutando!");
    // --- VARIABLES Y CONFIGURACIÓN ---
    let rutaEnEdicion = null;
    let rutaGeoJSON = null;
    let paradasGeoJSON = [];

    // --- ELEMENTOS DEL DOM ---
    const routeForm = document.getElementById('route-form');
    const messageDiv = document.getElementById('admin-message');
    const guardarBtn = document.getElementById('guardar-btn');
    const actualizarBtn = document.getElementById('actualizar-btn');
    const cancelarBtn = document.getElementById('cancelar-btn');
    const listaRutasContainer = document.getElementById('lista-rutas-container');
    const formTitle = document.getElementById('form-title');
    const crearTabBtn = document.getElementById('crear-tab');
    const bootstrapTab = new bootstrap.Tab(crearTabBtn);

    // --- CAMPOS DEL FORMULARIO ---
    const inputs = {
        nombre: document.getElementById('routeName'),
        id: document.getElementById('routeId'),
        stop: document.getElementById('routeStop'),
        horaInicio: document.getElementById('horaInicio'),
        horaFinal: document.getElementById('horaFinal'),
        distanciaKm: document.getElementById('distanciaKm'),
        duracionMin: document.getElementById('duracionMin'),
        mujerSegura: document.getElementById('mujerSegura'),
    };

    // --- CONFIGURACIÓN DEL MAPA ---
    const adminMap = L.map("admin-map").setView([19.5438, -96.9103], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(adminMap);
    const drawnItems = new L.FeatureGroup();
    adminMap.addLayer(drawnItems);
    new L.Control.Draw({
        edit: { featureGroup: drawnItems },
        draw: {
            polygon: false, rectangle: false, circle: false, circlemarker: false,
            polyline: { shapeOptions: { color: '#2b6cb0', weight: 5 } },
            marker: { icon: L.icon({ iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%230d6efd", iconSize: [30, 30], iconAnchor: [15, 30] }) }
        }
    }).addTo(adminMap);
    
    // --- FUNCIONES PRINCIPALES ---
    const resetEditorState = () => {
        routeForm.reset();
        drawnItems.clearLayers();
        rutaGeoJSON = null;
        paradasGeoJSON = [];
        rutaEnEdicion = null;
        inputs.id.disabled = false;
        formTitle.textContent = "Crear Nueva Ruta";
        guardarBtn.style.display = 'block';
        actualizarBtn.style.display = 'none';
        cancelarBtn.style.display = 'none';
    };
    
    const updateGeoJSONFromLayers = () => {
        rutaGeoJSON = null;
        paradasGeoJSON = [];
        drawnItems.eachLayer(layer => {
            if (layer instanceof L.Polyline) rutaGeoJSON = layer.toGeoJSON();
            else if (layer instanceof L.Marker) paradasGeoJSON.push(layer.toGeoJSON());
        });
    };

    const showMessage = (type, text) => {
        messageDiv.innerHTML = `<div class="alert ${type === 'success' ? 'alert-success' : 'alert-danger'}">${text}</div>`;
        setTimeout(() => { messageDiv.innerHTML = ''; }, 4000);
    };

    const cargarRutas = async () => {
        try {
            const response = await fetch('/api/rutas');
            const data = await response.json();
            listaRutasContainer.innerHTML = '';
            
            if (!data.success || data.rutas.length === 0) {
                listaRutasContainer.innerHTML = '<p class="text-muted">No hay rutas guardadas.</p>';
                return;
            }

            const table = document.createElement('table');
            table.className = 'table table-striped table-hover';
            table.innerHTML = `<thead><tr><th>Nombre</th><th>ID</th><th class="text-end">Acciones</th></tr></thead><tbody></tbody>`;
            const tbody = table.querySelector('tbody');
            data.rutas.sort((a,b) => a.id.localeCompare(b.id)).forEach(ruta => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${ruta.nombre}</td><td>${ruta.id}</td><td class="text-end"><button class="btn btn-sm btn-warning editar-ruta" data-id="${ruta.id}">Editar</button> <button class="btn btn-sm btn-danger eliminar-ruta" data-id="${ruta.id}">Eliminar</button></td>`;
                tbody.appendChild(tr);
            });
            listaRutasContainer.appendChild(table);
        } catch (error) { showMessage('error', 'No se pudieron cargar las rutas.'); }
    };

    const iniciarEdicion = async (rutaId) => {
        try {
            const response = await fetch('/api/rutas');
            const data = await response.json();
            if (!data.success) throw new Error('No se pudo obtener la ruta');
            const ruta = data.rutas.find(r => r.id === rutaId);
            if (!ruta) throw new Error('Ruta no encontrada');
            resetEditorState();
            rutaEnEdicion = ruta;
            for (const key in inputs) {
                if (key in ruta) {
                    inputs[key].type === 'checkbox' ? inputs[key].checked = ruta[key] : inputs[key].value = ruta[key];
                }
            }
            if (ruta.ruta) L.geoJSON(ruta.ruta).getLayers().forEach(l => drawnItems.addLayer(l));
            if (ruta.paradas) ruta.paradas.forEach(p => L.geoJSON(p).getLayers().forEach(l => drawnItems.addLayer(l)));
            updateGeoJSONFromLayers();
            inputs.id.disabled = true;
            formTitle.textContent = `Editando Ruta: ${ruta.nombre}`;
            guardarBtn.style.display = 'none';
            actualizarBtn.style.display = 'block';
            cancelarBtn.style.display = 'block';
            bootstrapTab.show();
            if (drawnItems.getLayers().length > 0) adminMap.fitBounds(drawnItems.getBounds().pad(0.1));
        } catch (error) { showMessage('error', `Error al cargar ruta para editar: ${error.message}`); }
    };
    
    const eliminarRuta = async (rutaId) => {
        if (!confirm(`¿Seguro que quieres eliminar la ruta con ID: ${rutaId}?`)) return;
        try {
            const response = await fetch(`/api/rutas/${rutaId}`, { method: 'DELETE' });
            const result = await response.json();
            if (result.success) {
                showMessage('success', 'Ruta eliminada.');
                cargarRutas();
            } else { throw new Error(result.message); }
        } catch (error) { showMessage('error', `Error al eliminar: ${error.message}`); }
    };

    const recolectarDatosFormulario = () => {
        const formData = {};
        for (const key in inputs) {
            formData[key] = inputs[key].type === 'checkbox' ? inputs[key].checked : inputs[key].value;
        }
        formData.rutaGeoJSON = rutaGeoJSON;
        formData.paradasGeoJSON = paradasGeoJSON;
        return formData;
    };
    
    // --- MANEJADORES DE EVENTOS ---
    adminMap.on(L.Draw.Event.CREATED, (e) => {
        if (e.layerType === 'polyline') {
            drawnItems.eachLayer(l => { if (l instanceof L.Polyline) drawnItems.removeLayer(l); });
        }
        drawnItems.addLayer(e.layer);
        updateGeoJSONFromLayers();
    });
    adminMap.on('draw:edited draw:deleted', updateGeoJSONFromLayers);
    
    routeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!rutaGeoJSON || paradasGeoJSON.length === 0) {
            showMessage('error', 'Debes dibujar la ruta y marcar al menos una parada.');
            return;
        }
        try {
            const response = await fetch('/api/rutas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recolectarDatosFormulario())
            });
            const result = await response.json();
            if (result.success) {
                showMessage('success', 'Ruta guardada exitosamente.');
                resetEditorState();
                cargarRutas();
            } else { throw new Error(result.message); }
        } catch (error) { showMessage('error', `Error al guardar: ${error.message}`); }
    });

    actualizarBtn.addEventListener('click', async () => {
         if (!rutaGeoJSON || paradasGeoJSON.length === 0) {
            showMessage('error', 'La ruta debe tener un trazo y al menos una parada.');
            return;
        }
        try {
            const response = await fetch(`/api/rutas/${rutaEnEdicion.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recolectarDatosFormulario())
            });
            const result = await response.json();
            if (result.success) {
                showMessage('success', 'Ruta actualizada exitosamente.');
                resetEditorState();
                cargarRutas();
            } else { throw new Error(result.message); }
        } catch (error) { showMessage('error', `Error al actualizar: ${error.message}`); }
    });
    
    cancelarBtn.addEventListener('click', resetEditorState);
    
    listaRutasContainer.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        if (target.classList.contains('editar-ruta')) iniciarEdicion(target.dataset.id);
        else if (target.classList.contains('eliminar-ruta')) eliminarRuta(target.dataset.id);
    });

    // --- INICIALIZACIÓN ---
    cargarRutas();
});