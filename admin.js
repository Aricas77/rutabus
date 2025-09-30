/**
 * Configuración inicial del mapa para el panel de administración
 * Utiliza la biblioteca Leaflet para renderizar el mapa centrado en Xalapa
 */
const adminMap = L.map("admin-map").setView([19.5438, -96.9103], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
}).addTo(adminMap);

/**
 * Configuración de las herramientas de dibujo en el mapa
 * Permite dibujar líneas (rutas) y colocar marcadores (paradas)
 */
const drawnItems = new L.FeatureGroup();
adminMap.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
    edit: { featureGroup: drawnItems, remove: true },
    draw: {
        // Deshabilitamos todas las formas excepto polyline (ruta) y marker (paradas)
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

/**
 * Variables para almacenar los datos de la ruta y paradas
 * rutaGeoJSON: Almacena la línea de la ruta en formato GeoJSON
 * paradasGeoJSON: Array que almacena todas las paradas en formato GeoJSON
 */
let rutaGeoJSON = null;
let paradasGeoJSON = [];

/**
 * Evento que se dispara cuando se crea un nuevo elemento en el mapa
 * Maneja la creación de rutas (polyline) y paradas (marker)
 */
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

/**
 * Evento que se dispara cuando se elimina un elemento del mapa
 * Actualiza las variables de ruta y paradas según corresponda
 */
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

/**
 * Configuración y manejo del formulario de rutas
 * Obtiene referencias a los elementos del formulario y configura el evento de envío
 */
const routeForm = document.getElementById('route-form');
const routeNameInput = document.getElementById('routeName');
const routeIdInput = document.getElementById('routeId');
const routeStopInput = document.getElementById('routeStop');
const messageDiv = document.getElementById('admin-message');

/**
 * Manejador del evento submit del formulario
 * Valida los datos, construye el objeto de ruta y lo envía al servidor
 */
routeForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    // Validaciones
    if (!rutaGeoJSON) {
        showMessage('error', 'Error: Debes dibujar la línea de la ruta en el mapa.');
        return;
    }
    if (paradasGeoJSON.length === 0) {
        showMessage('error', 'Error: Debes marcar al menos una parada en el mapa.');
        return;
    }

    // Construcción del objeto de datos
    const routeData = {
        nombre: routeNameInput.value,
        id: routeIdInput.value,
        stop: routeStopInput.value,
        rutaGeoJSON: rutaGeoJSON,
        paradasGeoJSON: paradasGeoJSON
    };

    // Envío de datos al servidor
    try {
        const response = await fetch('/api/rutas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(routeData)
        });

        const result = await response.json();

        if (result.success) {
            showMessage('success', result.message);
            // Limpieza del formulario y el mapa
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

/**
 * Función auxiliar para mostrar mensajes al administrador
 * @param {string} type - Tipo de mensaje ('success' o 'error')
 * @param {string} text - Texto del mensaje a mostrar
 */
function showMessage(type, text) {
    messageDiv.style.display = 'block';
    messageDiv.textContent = text;
    messageDiv.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';

    // El mensaje se oculta automáticamente después de 4 segundos
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 4000);
}