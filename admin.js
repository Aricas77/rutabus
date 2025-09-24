// --- Inicialización del Mapa del Administrador ---
const adminMap = L.map("admin-map").setView([19.5438, -96.9103], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
}).addTo(adminMap);

// --- Configuración de las Herramientas de Dibujo ---
const drawnItems = new L.FeatureGroup();
adminMap.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
    edit: { featureGroup: drawnItems, remove: true },
    draw: {
        polygon: false, rectangle: false, circle: false, circlemarker: false,
        polyline: { shapeOptions: { color: '#2b6cb0', weight: 5 } },
        marker: {
            icon: L.icon({
                iconUrl: "https://static.vecteezy.com/system/resources/previews/009/385/848/original/bus-stop-clipart-design-illustration-free-png.png",
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            })
        }
    }
});
adminMap.addControl(drawControl);

// --- Variables para guardar los datos dibujados ---
let rutaGeoJSON = null;
let paradasGeoJSON = [];

// --- Lógica para Capturar los Dibujos ---
adminMap.on(L.Draw.Event.CREATED, function (event) {
    const layer = event.layer;
    const type = event.layerType;

    if (type === 'polyline') {
        // Si ya existe una ruta, la reemplazamos
        if (rutaGeoJSON) {
            drawnItems.eachLayer(l => {
                if (l instanceof L.Polyline) {
                    drawnItems.removeLayer(l);
                }
            });
        }
        rutaGeoJSON = layer.toGeoJSON();
        console.log("Ruta dibujada:", rutaGeoJSON);
    }

    if (type === 'marker') {
        paradasGeoJSON.push(layer.toGeoJSON());
        console.log("Paradas actuales:", paradasGeoJSON);
    }

    drawnItems.addLayer(layer);
});

// Evento cuando se borra una capa, para mantener nuestros datos actualizados
adminMap.on('draw:deleted', function(e) {
    e.layers.eachLayer(function(layer) {
        if (layer instanceof L.Polyline) {
            rutaGeoJSON = null;
            console.log("Se eliminó la ruta.");
        } else if (layer instanceof L.Marker) {
            const deletedGeoJSON = layer.toGeoJSON();
            paradasGeoJSON = paradasGeoJSON.filter(p => 
                p.geometry.coordinates.toString() !== deletedGeoJSON.geometry.coordinates.toString()
            );
            console.log("Se eliminó una parada. Paradas restantes:", paradasGeoJSON);
        }
    });
});


// --- Lógica del Formulario ---
const routeForm = document.getElementById('route-form');
const routeNameInput = document.getElementById('routeName');
const routeIdInput = document.getElementById('routeId');
const routeStopInput = document.getElementById('routeStop');
const messageDiv = document.getElementById('admin-message');

routeForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    // 1. Validar que se haya dibujado todo lo necesario
    if (!rutaGeoJSON) {
        showMessage('error', 'Error: Debes dibujar la línea de la ruta en el mapa.');
        return;
    }
    if (paradasGeoJSON.length === 0) {
        showMessage('error', 'Error: Debes marcar al menos una parada en el mapa.');
        return;
    }

    // 2. Construir el objeto de datos para enviar al servidor
    const routeData = {
        nombre: routeNameInput.value,
        id: routeIdInput.value,
        stop: routeStopInput.value,
        rutaGeoJSON: rutaGeoJSON, // La línea
        paradasGeoJSON: paradasGeoJSON // El arreglo de puntos
    };

    // 3. Enviar los datos usando fetch
    try {
        const response = await fetch('/api/rutas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(routeData)
        });

        const result = await response.json();

        if (result.success) {
            showMessage('success', result.message);
            // Limpiar todo para la siguiente ruta
            routeForm.reset();
            drawnItems.clearLayers();
            rutaGeoJSON = null;
            paradasGeoJSON = [];
        } else {
            showMessage('error', result.message);
        }

    } catch (error) {
        console.error('Error al enviar la ruta:', error);
        showMessage('error', 'Error de conexión con el servidor.');
    }
});

// Función para mostrar mensajes al administrador
function showMessage(type, text) {
    messageDiv.style.display = 'block';
    messageDiv.textContent = text;
    messageDiv.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 4000);
}