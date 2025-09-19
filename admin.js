// --- Inicialización del Mapa del Administrador ---
const adminMap = L.map("admin-map").setView([19.5438, -96.9103], 13);

// Añadir la capa de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
}).addTo(adminMap);

// --- Configuración de las Herramientas de Dibujo ---

// Capa para almacenar los elementos dibujados (ruta y paradas)
const drawnItems = new L.FeatureGroup();
adminMap.addLayer(drawnItems);

// Opciones de la barra de dibujo
const drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems, // Permite editar/eliminar lo que se dibuja
        remove: true
    },
    draw: {
        polygon: false,   // Desactivamos polígonos
        rectangle: false, // Desactivamos rectángulos
        circle: false,    // Desactivamos círculos
        circlemarker: false, // Desactivamos círculos pequeños
        polyline: {       // Opciones para la línea de la ruta
            shapeOptions: {
                color: 'green',
                weight: 4
            }
        },
        marker: {         // Opciones para los marcadores de parada
            icon: L.icon({
                iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61205.png",
                iconSize: [20, 20]
            })
        }
    }
});
adminMap.addControl(drawControl);

// --- Lógica para Capturar los Dibujos ---

// Esta función se activará cada vez que el admin termine de dibujar algo
adminMap.on(L.Draw.Event.CREATED, function (event) {
    const layer = event.layer;

    // Añadimos el nuevo dibujo a nuestra capa de "drawnItems"
    drawnItems.addLayer(layer);

    // Aquí, en el futuro, guardaremos las coordenadas del dibujo
    console.log('Elemento dibujado:', layer.toGeoJSON());
});

// --- Lógica del Formulario (se implementará después) ---
const routeForm = document.getElementById('route-form');
routeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Funcionalidad de guardado se implementará en el siguiente paso.');
    // Aquí es donde enviaremos los datos del formulario y del mapa al servidor
});
