/**
 * Panel de Administración de Rutabus
 * Permite crear, editar y eliminar rutas con interfaz de mapa interactivo
 */

class RouteAdmin {
    constructor() {
        this.map = null;
        this.drawnItems = null;
        this.routeLayer = null;
        this.stopsLayer = null;
        
        // Referencias a elementos del DOM
        this.elements = {
            form: document.getElementById('route-form'),
            routeName: document.getElementById('routeName'),
            routeId: document.getElementById('routeId'),
            routeStop: document.getElementById('routeStop'),
            horaInicio: document.getElementById('horaInicio'),
            horaFinal: document.getElementById('horaFinal'),
            mujerSegura: document.getElementById('mujerSegura'),
            descripcion: document.getElementById('descripcion'),
            messageContainer: document.getElementById('admin-message'),
            loadRoutesBtn: document.getElementById('loadRoutes'),
            clearFormBtn: document.getElementById('clearForm'),
            existingRoutesContainer: document.getElementById('existingRoutes')
        };
        
        // Estado para edición
        this.editingRouteId = null;
        this.existingRoutes = [];
        this.selectedRoute = null;
        
        this.init();
    }
    
    /**
     * Inicializa el mapa y los event listeners
     */
    init() {
        this.checkAuthentication();
        this.initMap();
        this.setupEventListeners();
        this.showMessage('Panel de administración listo. Dibuja la ruta y paradas en el mapa.', 'info');
    }
    
    /**
     * Verifica que el usuario esté autenticado y sea administrador
     */
    checkAuthentication() {
        const userString = localStorage.getItem('rutabus_user');
        if (!userString) {
            alert('Debes iniciar sesión para acceder al panel de administración.');
            window.location.href = '/login.html';
            return;
        }
        
        const user = JSON.parse(userString);
        if (user.rol !== 'administrador') {
            alert('No tienes permisos de administrador para acceder a esta página.');
            window.location.href = '/index.html';
            return;
        }
    }
    
    /**
     * Inicializa el mapa con controles de dibujo
     */
    initMap() {
        // Crear mapa centrado en Xalapa
        this.map = L.map('admin-map').setView([19.5438, -96.9103], 13);
        
        // Agregar capa de mapa base
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
        
        // Inicializar capa para elementos dibujados
        this.drawnItems = new L.FeatureGroup();
        this.map.addLayer(this.drawnItems);
        
        // Configurar controles de dibujo
        const drawControl = new L.Control.Draw({
            position: 'topright',
            draw: {
                polyline: {
                    shapeOptions: {
                        color: '#2563eb',
                        weight: 4,
                        opacity: 0.8
                    },
                    metric: true,
                    showLength: true,
                    allowIntersection: false
                },
                marker: {
                    icon: L.icon({
                        iconUrl: 'https://api.iconify.design/mdi/bus-stop.svg?color=%230d6efd',
                        iconSize: [25, 25],
                        iconAnchor: [12, 12],
                        popupAnchor: [0, -12]
                    })
                },
                polygon: false,
                circle: false,
                rectangle: false,
                circlemarker: false
            },
            edit: {
                featureGroup: this.drawnItems,
                remove: true
            }
        });
        
        this.map.addControl(drawControl);
        
        // Event listeners para dibujo
        this.map.on('draw:created', (e) => this.onDrawCreated(e));
        this.map.on('draw:edited', (e) => this.onDrawEdited(e));
        this.map.on('draw:deleted', (e) => this.onDrawDeleted(e));
    }
    
    /**
     * Configura los event listeners del formulario
     */
    setupEventListeners() {
        this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Auto-formatear ID de ruta
        this.elements.routeId.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Solo números
            if (value.length > 3) value = value.substr(0, 3);
            e.target.value = value.padStart(3, '0');
        });
        
        // Sincronizar stop con route ID por defecto
        this.elements.routeId.addEventListener('change', (e) => {
            if (!this.elements.routeStop.value) {
                this.elements.routeStop.value = e.target.value;
            }
        });
        
        // Botones de gestión
        this.elements.loadRoutesBtn.addEventListener('click', () => this.loadExistingRoutes());
        this.elements.clearFormBtn.addEventListener('click', () => this.clearForm());
    }
    
    /**
     * Maneja la creación de nuevos elementos en el mapa
     */
    onDrawCreated(e) {
        const layer = e.layer;
        const type = e.layerType;
        
        if (type === 'polyline') {
            // Eliminar ruta anterior si existe
            if (this.routeLayer) {
                this.drawnItems.removeLayer(this.routeLayer);
            }
            this.routeLayer = layer;
            this.showMessage('Ruta dibujada. Ahora marca las paradas con puntos.', 'success');
        } else if (type === 'marker') {
            // Agregar número secuencial a las paradas
            const stopNumber = this.getStopsCount() + 1;
            layer.bindPopup(`Parada ${stopNumber}`);
        }
        
        this.drawnItems.addLayer(layer);
    }
    
    /**
     * Maneja la edición de elementos
     */
    onDrawEdited(e) {
        this.showMessage('Elementos editados correctamente.', 'info');
    }
    
    /**
     * Maneja la eliminación de elementos
     */
    onDrawDeleted(e) {
        // Verificar si se eliminó la ruta principal
        e.layers.eachLayer((layer) => {
            if (layer === this.routeLayer) {
                this.routeLayer = null;
                this.showMessage('Ruta principal eliminada.', 'warning');
            }
        });
        
        this.updateStopNumbers();
    }
    
    /**
     * Cuenta las paradas marcadas
     */
    getStopsCount() {
        let count = 0;
        this.drawnItems.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                count++;
            }
        });
        return count;
    }
    
    /**
     * Actualiza la numeración de las paradas
     */
    updateStopNumbers() {
        let stopNumber = 1;
        this.drawnItems.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                layer.setPopupContent(`Parada ${stopNumber}`);
                stopNumber++;
            }
        });
    }
    
    /**
     * Convierte las capas dibujadas a GeoJSON
     */
    layersToGeoJSON() {
        const routeGeoJSON = {
            type: "FeatureCollection",
            features: []
        };
        
        const stopsGeoJSON = {
            type: "FeatureCollection",
            crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            features: []
        };
        
        let stopSequence = 0;
        
        this.drawnItems.eachLayer((layer) => {
            if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
                // Es una ruta (línea)
                const feature = layer.toGeoJSON();
                feature.properties = {
                    ID_RED: Date.now(), // ID temporal
                    ID_RV: `RD${Date.now()}`,
                    PRINFIN: null
                };
                routeGeoJSON.features.push(feature);
            } else if (layer instanceof L.Marker) {
                // Es una parada (punto)
                const feature = layer.toGeoJSON();
                feature.properties = {
                    id: Date.now().toString() + stopSequence,
                    routeId: this.elements.routeId.value,
                    sequence: stopSequence,
                    name: `Parada ${stopSequence + 1}`,
                    travelTime: 0,
                    dwellTime: 0,
                    arrivalTim: 0,
                    departureT: 0,
                    passengerA: 0,
                    passengerB: 0
                };
                stopsGeoJSON.features.push(feature);
                stopSequence++;
            }
        });
        
        return { routeGeoJSON, stopsGeoJSON };
    }
    
    /**
     * Maneja el envío del formulario
     */
    async handleSubmit(e) {
        e.preventDefault();
        
        // Validar que haya una ruta dibujada
        if (!this.routeLayer) {
            this.showMessage('Error: Debes dibujar al menos una línea para la ruta.', 'error');
            return;
        }
        
        // Validar que haya al menos una parada
        if (this.getStopsCount() < 1) {
            this.showMessage('Error: Debes marcar al menos una parada.', 'error');
            return;
        }
        
        // Obtener datos del formulario
        const formData = {
            id: this.elements.routeId.value,
            stop: this.elements.routeStop.value,
            name: this.elements.routeName.value
        };
        
        // Convertir capas a GeoJSON
        const { routeGeoJSON, stopsGeoJSON } = this.layersToGeoJSON();
        
        // Agregar información básica de la ruta
        const routeInfo = {
            horaInicio: this.elements.horaInicio.value || "5:30",
            horaFinal: this.elements.horaFinal.value || "21:45",
            distanciaKm: this.calculateRouteDistance(),
            duracionMin: Math.round(this.calculateRouteDistance() * 4), // Estimación: 4 min por km
            mujerSegura: this.elements.mujerSegura.checked,
            descripcion: this.elements.descripcion.value || '',
            foto: `./data/${formData.id}/${formData.id}.png`
        };
        
        // Preparar datos para enviar al servidor
        const routeData = {
            ...formData,
            routeData: routeGeoJSON,
            stopsData: stopsGeoJSON,
            routeInfo: routeInfo
        };
        
        try {
            const isEditing = this.editingRouteId !== null;
            this.showMessage(isEditing ? 'Actualizando ruta...' : 'Guardando ruta...', 'info');
            
            const url = isEditing ? `/api/routes/${this.editingRouteId}` : '/api/routes';
            const method = isEditing ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(routeData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                const action = isEditing ? 'actualizada' : 'creada';
                this.showMessage(`¡Ruta ${formData.id} ${action} exitosamente!`, 'success');
                
                if (isEditing) {
                    // Recargar la lista de rutas existentes
                    await this.loadExistingRoutes();
                    this.clearForm();
                } else {
                    this.resetForm();
                }
            } else {
                this.showMessage(`Error: ${result.message}`, 'error');
            }
            
        } catch (error) {
            console.error('Error guardando ruta:', error);
            this.showMessage('Error de conexión. Verifica que el servidor esté funcionando.', 'error');
        }
    }
    
    /**
     * Calcula la distancia aproximada de la ruta
     */
    calculateRouteDistance() {
        if (!this.routeLayer) return 0;
        
        let totalDistance = 0;
        const latlngs = this.routeLayer.getLatLngs();
        
        for (let i = 0; i < latlngs.length - 1; i++) {
            totalDistance += latlngs[i].distanceTo(latlngs[i + 1]);
        }
        
        // Convertir de metros a kilómetros
        return Math.round(totalDistance / 100) / 10;
    }
    
    /**
     * Resetea el formulario y el mapa
     */
    resetForm() {
        this.elements.form.reset();
        this.drawnItems.clearLayers();
        this.routeLayer = null;
        this.stopsLayer = null;
    }
    
    /**
     * Limpia solo el formulario sin resetear el mapa
     */
    clearForm() {
        this.elements.form.reset();
        this.editingRouteId = null;
        this.selectedRoute = null;
        
        // Rehabilitar todos los elementos del formulario
        const formElements = [
            this.elements.routeName,
            this.elements.routeId,
            this.elements.routeStop,
            this.elements.horaInicio,
            this.elements.horaFinal,
            this.elements.mujerSegura,
            this.elements.descripcion
        ];
        
        formElements.forEach(element => {
            if (element) {
                element.disabled = false;
                element.style.backgroundColor = '';
            }
        });
        
        // Actualizar el botón del formulario
        const submitBtn = this.elements.form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Guardar Ruta';
        submitBtn.className = 'btn btn-primary w-100';
        submitBtn.disabled = false;
        
        // Limpiar selección visual
        const selectedItems = this.elements.existingRoutesContainer.querySelectorAll('.route-item.selected');
        selectedItems.forEach(item => item.classList.remove('selected'));
        
        this.showMessage('Formulario limpiado. Listo para crear nueva ruta.', 'info');
    }
    
    /**
     * Carga las rutas existentes desde la base de datos y archivos locales
     */
    async loadExistingRoutes() {
        try {
            this.showMessage('Cargando rutas existentes...', 'info');
            
            // Cargar rutas de la base de datos
            const dbPromise = fetch('/api/routes');
            
            // Cargar rutas locales
            const localPromise = fetch('/api/routes/local');
            
            // Ejecutar ambas peticiones en paralelo
            const [dbResponse, localResponse] = await Promise.all([dbPromise, localPromise]);
            
            const dbResult = await dbResponse.json();
            const localResult = await localResponse.json();
            
            // Combinar las rutas
            let allRoutes = [];
            
            if (dbResult.success) {
                // Marcar rutas de DB como 'database'
                const dbRoutes = dbResult.routes.map(route => ({
                    ...route,
                    source: 'database'
                }));
                allRoutes = allRoutes.concat(dbRoutes);
            }
            
            if (localResult.success) {
                // Las rutas locales ya tienen la marca 'local'
                allRoutes = allRoutes.concat(localResult.routes);
            }
            
            // Ordenar por ID para mejor visualización
            allRoutes.sort((a, b) => a.id.localeCompare(b.id));
            
            this.existingRoutes = allRoutes;
            this.renderExistingRoutes();
            
            const dbCount = dbResult.success ? dbResult.routes.length : 0;
            const localCount = localResult.success ? localResult.routes.length : 0;
            const totalCount = allRoutes.length;
            
            this.showMessage(
                `Cargadas ${totalCount} rutas: ${dbCount} de base de datos, ${localCount} locales.`, 
                'success'
            );
            
        } catch (error) {
            console.error('Error cargando rutas existentes:', error);
            this.showMessage('Error de conexión al cargar rutas existentes.', 'error');
        }
    }
    
    /**
     * Renderiza la lista de rutas existentes
     */
    renderExistingRoutes() {
        const container = this.elements.existingRoutesContainer;
        
        if (this.existingRoutes.length === 0) {
            container.innerHTML = '<p class="text-muted small">No hay rutas en la base de datos</p>';
            return;
        }
        
        const routeItems = this.existingRoutes.map(route => {
            const isLocal = route.source === 'local';
            const sourceLabel = isLocal ? 'Local' : 'BD';
            const sourceClass = isLocal ? 'route-local' : 'route-database';
            const editButtonClass = isLocal ? 'btn-info' : 'btn-warning';
            
            return `
                <div class="route-item ${sourceClass}" data-route-id="${route.id}">
                    <div class="route-item-info">
                        <div class="route-item-name">
                            ${route.name}
                            <span class="badge badge-sm ${isLocal ? 'badge-info' : 'badge-secondary'}">${sourceLabel}</span>
                        </div>
                        <div class="route-item-id">ID: ${route.id} | Stop: ${route.stop}</div>
                    </div>
                    <div class="route-item-actions">
                        <button class="btn ${editButtonClass} btn-xs" onclick="routeAdmin.editRoute('${route.id}')" title="${isLocal ? 'Editar ruta local' : 'Editar ruta de base de datos'}">
                            Editar
                        </button>
                        ${!isLocal ? `<button class="btn btn-danger btn-xs" onclick="routeAdmin.deleteRoute('${route.id}')">
                            Eliminar
                        </button>` : '<span class="text-muted small">Solo lectura</span>'}
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = routeItems;
        
        // Agregar event listeners para selección
        const items = container.querySelectorAll('.route-item');
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                // Evitar que se active al hacer clic en botones
                if (e.target.tagName === 'BUTTON') return;
                
                const routeId = item.dataset.routeId;
                this.selectRoute(routeId, item);
            });
        });
    }
    
    /**
     * Selecciona una ruta para mostrar información
     */
    selectRoute(routeId, itemElement) {
        // Limpiar selección anterior
        const selectedItems = this.elements.existingRoutesContainer.querySelectorAll('.route-item.selected');
        selectedItems.forEach(item => item.classList.remove('selected'));
        
        // Seleccionar nuevo elemento
        itemElement.classList.add('selected');
        
        // Encontrar y guardar ruta seleccionada
        this.selectedRoute = this.existingRoutes.find(route => route.id === routeId);
        
        if (this.selectedRoute) {
            this.showMessage(`Ruta seleccionada: ${this.selectedRoute.name}`, 'info');
        }
    }
    
    /**
     * Edita una ruta existente
     */
    async editRoute(routeId) {
        const route = this.existingRoutes.find(r => r.id === routeId);
        if (!route) {
            this.showMessage('Ruta no encontrada.', 'error');
            return;
        }
        
        // Verificar si es una ruta local (solo lectura)
        if (route.source === 'local') {
            this.showMessage('Las rutas locales son de solo lectura. Puedes visualizarlas pero no editarlas.', 'warning');
            // Solo cargar para visualización, no para edición
            this.loadRouteForVisualization(route);
            return;
        }
        
        this.editingRouteId = routeId;
        
        // Llenar el formulario con los datos existentes
        this.elements.routeName.value = route.name || '';
        this.elements.routeId.value = route.id || '';
        this.elements.routeStop.value = route.stop || '';
        
        if (route.routeInfo) {
            this.elements.horaInicio.value = route.routeInfo.horaInicio || '05:30';
            this.elements.horaFinal.value = route.routeInfo.horaFinal || '21:45';
            this.elements.mujerSegura.checked = route.routeInfo.mujerSegura || false;
            this.elements.descripcion.value = route.routeInfo.descripcion || '';
        }
        
        // Cargar geometrías en el mapa
        this.drawnItems.clearLayers();
        this.routeLayer = null;
        
        // Cargar ruta
        if (route.routeData && route.routeData.features) {
            route.routeData.features.forEach(feature => {
                if (feature.geometry.type === 'LineString') {
                    const layer = L.geoJSON(feature, {
                        style: {
                            color: '#2563eb',
                            weight: 4,
                            opacity: 0.8
                        }
                    });
                    
                    layer.eachLayer(subLayer => {
                        this.drawnItems.addLayer(subLayer);
                        this.routeLayer = subLayer;
                    });
                }
            });
        }
        
        // Cargar paradas
        if (route.stopsData && route.stopsData.features) {
            route.stopsData.features.forEach(feature => {
                if (feature.geometry.type === 'Point') {
                    const coords = feature.geometry.coordinates;
                    const marker = L.marker([coords[1], coords[0]], {
                        icon: L.icon({
                            iconUrl: 'https://api.iconify.design/mdi/bus-stop.svg?color=%230d6efd',
                            iconSize: [25, 25],
                            iconAnchor: [12, 12],
                            popupAnchor: [0, -12]
                        })
                    });
                    
                    const stopName = feature.properties.name || `Parada ${feature.properties.sequence + 1}`;
                    marker.bindPopup(stopName);
                    this.drawnItems.addLayer(marker);
                }
            });
        }
        
        // Cambiar el botón del formulario
        const submitBtn = this.elements.form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Actualizar Ruta';
        submitBtn.className = 'btn btn-warning w-100';
        
        // Hacer zoom a la ruta cargada
        if (this.drawnItems.getLayers().length > 0) {
            this.map.fitBounds(this.drawnItems.getBounds());
        }
        
        this.showMessage(`Editando ruta: ${route.name}`, 'info');
    }
    
    /**
     * Carga una ruta solo para visualización (rutas locales)
     */
    loadRouteForVisualization(route) {
        // Llenar el formulario con los datos existentes (solo lectura)
        this.elements.routeName.value = route.name || '';
        this.elements.routeId.value = route.id || '';
        this.elements.routeStop.value = route.stop || '';
        
        if (route.routeInfo) {
            this.elements.horaInicio.value = route.routeInfo.horaInicio || '05:30';
            this.elements.horaFinal.value = route.routeInfo.horaFinal || '21:45';
            this.elements.mujerSegura.checked = route.routeInfo.mujerSegura || false;
            this.elements.descripcion.value = route.routeInfo.descripcion || '';
        }
        
        // Deshabilitar el formulario para evitar edición
        this.disableFormForVisualization();
        
        // Cargar geometrías en el mapa
        this.drawnItems.clearLayers();
        this.routeLayer = null;
        
        // Cargar ruta
        if (route.routeData && route.routeData.features) {
            route.routeData.features.forEach(feature => {
                if (feature.geometry.type === 'LineString') {
                    const layer = L.geoJSON(feature, {
                        style: {
                            color: '#17a2b8', // Color diferente para rutas locales
                            weight: 4,
                            opacity: 0.8
                        }
                    });
                    
                    layer.eachLayer(subLayer => {
                        this.drawnItems.addLayer(subLayer);
                        this.routeLayer = subLayer;
                    });
                }
            });
        }
        
        // Cargar paradas
        if (route.stopsData && route.stopsData.features) {
            route.stopsData.features.forEach(feature => {
                if (feature.geometry.type === 'Point') {
                    const coords = feature.geometry.coordinates;
                    const marker = L.marker([coords[1], coords[0]], {
                        icon: L.icon({
                            iconUrl: 'https://api.iconify.design/mdi/bus-stop.svg?color=%2317a2b8',
                            iconSize: [25, 25],
                            iconAnchor: [12, 12],
                            popupAnchor: [0, -12]
                        })
                    });
                    
                    const stopName = feature.properties.name || `Parada ${feature.properties.sequence + 1}`;
                    marker.bindPopup(stopName + ' (Local)');
                    this.drawnItems.addLayer(marker);
                }
            });
        }
        
        // Hacer zoom a la ruta cargada
        if (this.drawnItems.getLayers().length > 0) {
            this.map.fitBounds(this.drawnItems.getBounds());
        }
        
        this.showMessage(`Visualizando ruta local: ${route.name}`, 'info');
    }
    
    /**
     * Deshabilita el formulario para visualización de rutas locales
     */
    disableFormForVisualization() {
        const formElements = [
            this.elements.routeName,
            this.elements.routeId,
            this.elements.routeStop,
            this.elements.horaInicio,
            this.elements.horaFinal,
            this.elements.mujerSegura,
            this.elements.descripcion
        ];
        
        formElements.forEach(element => {
            if (element) {
                element.disabled = true;
                element.style.backgroundColor = '#f8f9fa';
            }
        });
        
        // Cambiar el botón del formulario
        const submitBtn = this.elements.form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Ruta de Solo Lectura';
        submitBtn.className = 'btn btn-secondary w-100';
        submitBtn.disabled = true;
    }
    
    /**
     * Elimina una ruta
     */
    async deleteRoute(routeId) {
        const route = this.existingRoutes.find(r => r.id === routeId);
        if (!route) {
            this.showMessage('Ruta no encontrada.', 'error');
            return;
        }
        
        const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar la ruta "${route.name}" (ID: ${routeId})?

¡Esta acción no se puede deshacer!`);
        
        if (!confirmDelete) {
            return;
        }
        
        try {
            this.showMessage('Eliminando ruta...', 'info');
            
            const response = await fetch(`/api/routes/${routeId}`, {
                method: 'DELETE'
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.showMessage(`Ruta "${route.name}" eliminada exitosamente.`, 'success');
                
                // Recargar la lista de rutas
                await this.loadExistingRoutes();
                
                // Limpiar formulario si se estaba editando esta ruta
                if (this.editingRouteId === routeId) {
                    this.clearForm();
                }
                
            } else {
                this.showMessage(`Error al eliminar ruta: ${result.message}`, 'error');
            }
            
        } catch (error) {
            console.error('Error eliminando ruta:', error);
            this.showMessage('Error de conexión al eliminar la ruta.', 'error');
        }
    }
    
    /**
     * Muestra mensajes al usuario
     */
    showMessage(message, type = 'info') {
        const container = this.elements.messageContainer;
        container.style.display = 'block';
        
        // Limpiar clases anteriores
        container.className = 'mt-3 alert';
        
        // Agregar clase según el tipo
        switch (type) {
            case 'success':
                container.classList.add('alert-success');
                break;
            case 'error':
                container.classList.add('alert-danger');
                break;
            case 'warning':
                container.classList.add('alert-warning');
                break;
            default:
                container.classList.add('alert-info');
        }
        
        container.textContent = message;
        
        // Auto-ocultar después de 5 segundos para mensajes de éxito
        if (type === 'success') {
            setTimeout(() => {
                container.style.display = 'none';
            }, 5000);
        }
    }
}

// Inicializar cuando el DOM esté listo
let routeAdmin;
document.addEventListener('DOMContentLoaded', () => {
    routeAdmin = new RouteAdmin();
});
