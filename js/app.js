const RUTAS = [
    { id: "001", stop: "1", name: "Ruta 1: Ávila Camacho - UV" },
    { id: "002", stop: "2", name: "Ruta 2: Lucas Martín - Centro" },
    { id: "003", stop: "3", name: "Ruta 3: Av. Xalapa - Lazaro Cardenas" },
    { id: "004", stop: "4", name: "Ruta 4: Lázaro Cardenas - av.xalapa (economía)" },
    { id: "005", stop: "5", name: "Ruta 5: Campo de Tiro - Colonia Hernández Castillo - Sayago" },
    { id: "006", stop: "6", name: "Ruta 6: Miradores - Trancas - Tesoreria - Banderilla" },
    { id: "007", stop: "7", name: "Ruta 7: Mercado - Pipila - Jardines - Carolino Anaya" },
    { id: "008", stop: "8", name: "Ruta 8: Buena Vista- Sauces- Berros- Caxa- Trancas- Pradera- Central Abastos" },
    { id: "009", stop: "9", name: "Ruta 9: Reserva Territorial- 20 de Noviembre- Economía- Avenida Xalapa" },
    { id: "010", stop: "10", name: "Ruta 10: Escuela Normal Veracruzana -Avenida Xalapa, Economía, Clavijero, Reserva Territorial" },
    { id: "011", stop: "11", name: "Ruta 11: Sayago- Calle Nuevo León- Villa Hermosa- Sumidero" },
    { id: "012", stop: "12", name: "Ruta 12: Sumidero- calle Nuevo León - Villa Hermosa - Clavijero" },
    { id: "013", stop: "13", name: "Ruta 13: Sayago(inicio) - Av. Xalapa - Hernández Castillo - Campo de Tiro" },
    { id: "014", stop: "14", name: "Ruta 14: Colonia Vicente Guerrero (inicio) - Campo de Tiro - Col. Revolución - Av. xalapa - Centro" },
    { id: "015", stop: "15", name: "Ruta 15: Inicia Chedrahui Caram segundo punto Ejidal y termina en Chedrahui Caram" },
    { id: "016", stop: "16", name: "Ruta 16: Inicio en Mártires 28 de Agosto - USISVER - Miguel Alemán" },
    { id: "017", stop: "17", name: "Ruta 17: Mártires 28 de Agosto Lazaro Cardenas" },
    { id: "018", stop: "18", name: "Ruta 18: Ruta Macuiltepetl - Miguel Alemán - Cerro de Macuiltepetl - Centro" },
    { id: "019", stop: "19", name: "Ruta 19: Calvario - Panteón - Técnica 72" },
    { id: "020", stop: "20", name: "Ruta 20: Murillo Vidal - Plaza Américas - Torre Ánimas - Sev - Coapexpan - Terminal" },
    { id: "021", stop: "21", name: "Ruta 21: El Olmo - Torre Animas - Murillo Vidal - Coapexpan" },
    { id: "022", stop: "22", name: "Ruta 22: El Haya - Zona UV - Bugambilias" },
    { id: "023", stop: "23", name: "Ruta 23: Bugambilias - Zona UV - El Haya" },
    { id: "024", stop: "24", name: "Ruta 24: El Haya - Centro - Ojo de Agua" },
    { id: "025", stop: "25", name: "Ruta 25: Ojo de Agua - Zona UV - El Haya" },
    { id: "026", stop: "26", name: "Ruta 26: Col. Veracruz - 20 de Noviembre - Central de Abastos" },
    { id: "027", stop: "27", name: "Ruta 27: Central de Abastos - 20 de Noviembre - Col. Veracruz" },
    { id: "028", stop: "28", name: "Ruta 28: Artículo 3ro - Avila Camacho" },
    { id: "029", stop: "29", name: "Ruta 29: Haciendas - Centro - Art 3ro" },
    { id: "030", stop: "30", name: "Ruta 30: San Andrés Tlalnehuayocan - Luz del Barrio - Central de Abastos" },
    { id: "031", stop: "31", name: "Ruta 31: Marina Nacional - Pipila - Santa Rosa" },
    { id: "032", stop: "32", name: "Ruta 32: San Andrés Tlalnehuayocan - Luz del Barrio - Central de Abastos" },
    { id: "033", stop: "33", name: "Ruta 33: San Andrés Tlalnehuayocan - Luz del Barrio - Clavijero - Zipor" },
    { id: "034", stop: "34", name: "Ruta 34: Las Fuentes - Mercado - San Andrés Tlalnehuayocan" },
    { id: "035", stop: "35", name: "Ruta 35: La haciendita - Caxa - Central de Abastos" },
    { id: "036", stop: "36", name: "Ruta 36: Central de Abastos - Caxa - La Haciendita" },
    { id: "037", stop: "37", name: "Ruta 37: Experimental - Plaza Cristal - Central de Abastos" },
    { id: "038", stop: "38", name: "Ruta 38: Central de Abastos - Plaza Cristal - Experimental" },
    { id: "039", stop: "39", name: "Ruta 39: La haciendita - Caxa - Central de Abastos" },
    { id: "040", stop: "40", name: "Ruta 40: Central de Abastos - Caxa - La Haciendita" },
    { id: "041", stop: "41", name: "Ruta 41: Experimental - Cristal - Central de Abastos" },
    { id: "042", stop: "42", name: "Ruta 42: Central de Abastos - Plaza Cristal - Experimental" },
    { id: "043", stop: "43", name: "Ruta 43: Homex - Vasconcelos - Av. Xalapa - Centro" },
    { id: "044", stop: "44", name: "Ruta 44: Centro - Av. Xalapa - Vasconcelos - Homex" },
    { id: "045", stop: "45", name: "Ruta 45: Col México - Lucas Martín - Av. Xalapa-Centro" },
    { id: "046", stop: "46", name: "Ruta 46: Centro - Av. Xalapa - Lucas Martín - Col. México" },
    { id: "047", stop: "47", name: "Ruta 47: Campo de Tiro - Revolución - Clavijero" },
    { id: "048", stop: "48", name: "Ruta 48: Clavijero - Revolución - Campo de Tiro" },
    { id: "049", stop: "49", name: "Ruta 49: El Moral - Revolución - Clavijero" },
    { id: "050", stop: "50", name: "Ruta 50: Clavijero - Revolución - El Moral" },
    { id: "051", stop: "51", name: "Ruta 51: Col Higueras - Lázaro Cárdenas - Centro - Zona UV" },
    { id: "052", stop: "52", name: "Ruta 52: Zona UV - Centro - Lázaro Cárdenas - Higueras" },
    { id: "053", stop: "53", name: "Ruta 53: Sefiplan - Lazaro Cardenas - Cto.Presidentes - Ruiz Cortinez" },
    { id: "054", stop: "54", name: "Ruta 54: Reforma - Mercado - Sumidero" },
    { id: "055", stop: "55", name: "Ruta 55: Sumidero - Mercado - Reforma" },
    { id: "056", stop: "56", name: "Ruta 56: Campo de Tiro - Av. Xalapa - Av. México - Clavijero" },
    { id: "057", stop: "57", name: "Ruta 57: Clavijero - Av. Xalapa - Av. México - Campo de tiro" },
    { id: "058", stop: "58", name: "Ruta 58: Bugambilias - Lázaro Cárdenas - Avila Camacho - Sauces" },
    { id: "059", stop: "59", name: "Ruta 59: Bugambilias - Ávila Camacho - Av. Xalapa" },
    { id: "060", stop: "60", name: "Ruta 60: Col. Revolucion - Av. Xalapa - Sayago" },
    { id: "061", stop: "61", name: "Ruta 61: Col. Revolucion - Av. Xalapa - Sayago" },
    { id: "062", stop: "62", name: "Ruta 62: Col. Higueras - Av. Américas - Av. Xalapa" },
    { id: "063", stop: "63", name: "Ruta 63: Av. Xalapa - Av. Américas - Col. Higueras" },
    { id: "064", stop: "64", name: "Ruta 64: San Andrés - Av. Lázaro Cardes - Trancas" },
    { id: "065", stop: "65", name: "Ruta 65: Trancas - Av. Lázaro Cardes - San Andrés" },
    { id: "066", stop: "66", name: "Ruta 66: Col. Marina Nacional - Av. 20 de Noviembre - Poeta Jesús Díaz" },
    { id: "067", stop: "67", name: "Ruta 67: Poeta Jesús Díaz - Av. 20 de Noviembre - Col. Marina Nacional" },
    { id: "068", stop: "68", name: "Ruta 68: Trancas - 20 de Noviembre - Arteaga" },
    { id: "069", stop: "69", name: "Ruta 69: Arteaga - 20 de Noviembre - Trancas" },
    { id: "070", stop: "70", name: "Ruta 70: Trancas - Lázaro Cardenas - 20 de Noviembre - Plaza Crystal - Jardines de Xalapa - Sumidero - Campo de Tiro | IDA" },
    { id: "071", stop: "71", name: "Ruta 71: Trancas - Lázaro Cardenas - 20 de Noviembre - Plaza Crystal - Jardines de Xalapa - Sumidero - Campo de Tiro | VUELTA" },
    { id: "072", stop: "72", name: "Ruta 72: Santiago Andres - M. 28 de Agosto - Mercado" },
    { id: "073", stop: "73", name: "Ruta 73: Mercado - M. 28 de Agosto - Santiago Andres" },
    { id: "074", stop: "74", name: "Ruta 74: Lomas Verdes - Xalapa 2000 - Rebsamen - Zona UV - Centro" },
    { id: "075", stop: "75", name: "Ruta 75: Centro - Los berros - Rebsamen - Xalapa 2000 - Lomas Verdes - Arco Sur - tecnológico - Arco Sur - Lomas Verdes" },
    { id: "076", stop: "76", name: "Ruta 76: Av. Americas - Pipila - Lazaro Cárdenas - Maestros Veracruzanos - Murillo Vidal - Berros - Rebsamen - Tecnológico" },
    { id: "077", stop: "77", name: "Ruta 77: Plaza Cristal - Lázaro Cárdenas - Chilpancingo - Comercial - Ruiz Cortinez - Luz del Barrio" },
    { id: "078", stop: "78", name: "Ruta 78: Luz del Barrio - Casa Blanca" },
    { id: "079", stop: "79", name: "Ruta 79: Coatepec Porthos - Xalapa Rotonda" },
    { id: "080", stop: "80", name: "Ruta 80: Xalapa - Encinos | Carro Sauces" },
    { id: "081", stop: "81", name: "Ruta 81: Mercado - Centro - Cristal - Peñascal - Sumidero - Campo de Tiro" },
    { id: "082", stop: "82", name: "Ruta 82: Articulo 3ro - Lázaro Cárdenas - Trancas - La Pradera - Las Haciendas" },
    { id: "083", stop: "83", name: "Ruta 83: Central de Abastos - La Martinica (Banderilla)" },
    { id: "084", stop: "84", name: "Ruta 84: Las Trancas - FOVISSSTE" },
    { id: "085", stop: "85", name: "Ruta 85: 20 de Noviembre - Pacho Nuevo" },
    { id: "086", stop: "86", name: "Ruta 86: Central de Abastos - Campo de Tiro" },
    { id: "087", stop: "87", name: "Ruta 87: Centro - Clavijero - Casa Blanca" },
    { id: "088", stop: "88", name: "Ruta 88: Casa Blanca - Plaza Cristal" },
    { id: "089", stop: "89", name: "Ruta 89: Poeta Jesus Dias - Sumidero" },
    { id: "090", stop: "90", name: "Ruta 90: Casa blanca - Pipila - Clavijero" },
    { id: "091", stop: "91", name: "Ruta 91: Pipila - Sumidero" },
    { id: "092", stop: "92", name: "Ruta 92: Terminal - Mercado - Sumidero" },
    { id: "093", stop: "93", name: "Ruta 93: Sumidero - Jardines" },
    { id: "094", stop: "94", name: "Ruta 94: Sumidero - Centro - Plaza Cristal - Calvario" },
    { id: "095", stop: "95", name: "Ruta 95: Mercado - 28 de agosto - San Antonio" },
    { id: "096", stop: "96", name: "Ruta 96: San Antonio - 28 de agosto - Mercado" },
    { id: "097", stop: "97", name: "Ruta 97: Xocotla 27 de agosto - Mecardo" },
    { id: "098", stop: "98", name: "Ruta 98: Ávila Camacho - Ignacio de la Llave - Sauces - Zona UV" },
    { id: "099", stop: "99", name: "Ruta 99: Higueras - Casa Blanca - Lázaro Cárdenas - 20 de Noviembre - Zona UV - Venustiano Carranza" },
    { id: "100", stop: "100", name: "Ruta 100: Carranza - Sauces - Ruiz Cortinez - Av. Xalapa - Poeta - 20 de Noviembre - Lázaro Cárdenas" },
    { id: "101", stop: "101", name: "Ruta 101: Coapexpan - Araucarias - Torre Animas" },
    { id: "102", stop: "102", name: "Ruta 102: Coapexpan - Inst. Tec. 72" },
    { id: "103", stop: "103", name: "Ruta 103: Tec 72 - Coapexpan" },
    { id: "104", stop: "104", name: "Ruta 104: Instituto Tecnológico - Arco Sur - Rebsamen - Sauces - Avila Camacho - Americas - Pipila - Lázaro Cárdenas - Arco Sur - Instituto Tecnológico" },
    { id: "105", stop: "105", name: "Ruta 105: Estación - Zona UV" },
    { id: "106", stop: "106", name: "Ruta 106: Jardines - Estación - Centro" },
    { id: "107", stop: "107", name: "Ruta 107: Centro - Central de Abastos" },
    { id: "108", stop: "108", name: "Ruta 108: Buena Vista - Centro" },
    { id: "109", stop: "109", name: "Ruta 109: Coapexpan - M. Vidal - Torre Animas - Araucarias" },
    { id: "110", stop: "110", name: "Ruta 110: FOVISSSTE - Calvario - IMSS" },
    { id: "111", stop: "111", name: "Ruta 111: FOVISSSTE - Calvario" },
    { id: "112", stop: "112", name: "Ruta 112: Ruiz Cortines - FOVISSTE - Lazaro Cardenas" },
    { id: "113", stop: "113", name: "Ruta 113: Ruiz Cortines - Zona UV" },
    { id: "114", stop: "114", name: "Ruta 114: Lomas Verdes - Medicina" },
    { id: "115", stop: "115", name: "Ruta 115: Estación - Villa Hermosa - Ruiz Cortinez - Sauces" },
    { id: "116", stop: "116", name: "Ruta 116: Escuela Normal - Juarez - Centro - Berros - Rebasame - Ojo de agua" },
    { id: "117", stop: "117", name: "Ruta 117: Bugambilias - Trancas - Lázaro Cárdenas - SEFIPLAN - Av. Xalapa - Ignacio de la Llave - IMSS - Carranza - Zona UV - Rebsamen - Xalapa 2000 - Arco Sur - Tecnologico - Bugambilias" },
    { id: "118", stop: "118", name: "Ruta 118: Articulo 3ro - Ruiz Cortinez - SEFIPLAN - Lázaro Cárdenas - Chedraui Caram - Plaza Americas - Trancas - Arco Sur - Tecnologico" },
    { id: "119", stop: "119", name: "Ruta 119: Torres - Centro" },
    { id: "120", stop: "120", name: "Ruta 120: Xocotla - Martires 28 de Agosto - Sayago" },
    { id: "121", stop: "121", name: "Ruta 121: Buena Vista - Centra de Abastos" },
    { id: "122", stop: "122", name: "Ruta 122: Pastoresa - Murillo Vidal - Centro" },
    { id: "123", stop: "123", name: "Ruta 123: Sauces - Ojo de agua" },
    { id: "124", stop: "124", name: "Ruta 124: Campo de Tiro - Crystal - Mercado" },
    { id: "125", stop: "125", name: "Ruta 125: Estación - Calvario" },
    { id: "126", stop: "126", name: "Ruta 126: Arco Sur - Rebsamen - Tecnológico - Trancas - Lázaro Cárdenas - Pipila - Américas - Avila Camacho - Ignacio de la llave - Sauces - Zona UV - Rebsamen - Arco Sur" },
    { id: "127", stop: "127", name: "Ruta 127: Lomas Verdes - Medicina" },
    { id: "128", stop: "128", name: "Ruta 128: Estación - Terminal Bolivia" },
    { id: "129", stop: "129", name: "Ruta 129: Estación - Ignacio de la llave" },
    { id: "130", stop: "130", name: "Ruta 130: Calvario - Terminal" },
    { id: "131", stop: "131", name: "Ruta 131: Articulo 3ro - Zona UV - Berros - 20 de Noviembre - Av. Xalapa - Avila Camacho - Ruiz Cortinez" },
    { id: "132", stop: "132", name: "Ruta 132: Lazaro Cardenas - Ruiz Cortinez" },
    { id: "133", stop: "133", name: "Ruta 133: SEFIPLAN - Lazaro Cardenas" },
    { id: "134", stop: "134", name: "Ruta 134: SEFIPLAN - Avila Camacho" },
    { id: "135", stop: "135", name: "Ruta 135: Tecnica 72 - Circunvalacion" },
    { id: "136", stop: "136", name: "Ruta 136: Coapexpan - Tecnica 72" },
    { id: "137", stop: "137", name: "Ruta 137: Tecnica 72 - Aguascalientes" },
    { id: "138", stop: "138", name: "Ruta 138: Fovissste - Lerdo de Tejada" },
    { id: "139", stop: "139", name: "Ruta 139: Fovissste - IMSS" },
    { id: "140", stop: "140", name: "Ruta 140: Fovissste - San Bruno - Trancas" },
    { id: "141", stop: "141", name: "Ruta 141: Pastoresa - Mercado" },
    { id: "142", stop: "142", name: "Ruta 142: Luz del Barrio - Plaza Crystal" },
    { id: "143", stop: "143", name: "Ruta 143: Rancho Viejo - Xalapa" },
    { id: "144", stop: "144", name: "Ruta 144: Mercado - Sumidero" },
    { id: "145", stop: "145", name: "Ruta 145: Carolino Anaya - IMSS" },
    { id: "146", stop: "146", name: "Ruta 146: Santa Rosa - Estación" },
    { id: "147", stop: "147", name: "Ruta 147: Martires de Chicago - Mercado" },
    { id: "148", stop: "148", name: "Ruta 148: Coapexpan - SEC" },
    { id: "149", stop: "149", name: "Ruta 149: Coapexpan - Araucarias" },
    { id: "150", stop: "150", name: "Ruta 150: Coapexpan - Araucarias" },
    { id: "151", stop: "151", name: "Ruta 151: Higueras - Mercado" },
    { id: "152", stop: "152", name: "Ruta 152: Circuito Precidentes - Rebsamen - Xalapa 2000 - Arco Sur - Trancas - Lazaro Cardenas - Ruiz Cortinez - Sauces - Velodromo" }
];

// --- Datos de ejemplo para el detalle (puedes ampliar/editar) ---
const RUTA_INFO = {
  "001": { distanciaKm: 12.4, duracionMin: 46, mujerSegura: true,  foto: "./data/001/001.jpg" },
  "002": { distanciaKm: 9.8,  duracionMin: 35, mujerSegura: false, foto: "./img/buses/002.jpg" },
  "152": { distanciaKm: 27.2, duracionMin: 79, mujerSegura: true,  foto: "./img/buses/152.jpg" }
};




// app.js

const App = {
  // --- Estado ---
  map: null,
  activeLayers: {},
  userLocation: null,
  isShowingAll: true,
  isLocationActive: false,
  routeData: [],
  userLocationMarker: null,
  activeRoute: null,

  elements: {
    rutasLista: document.getElementById('rutasLista'),
    buscador: document.getElementById('buscadorRutas'),
    sinResultados: document.getElementById('sinResultados'),
    guestButtons: document.getElementById('guest-buttons'),
    userButtons: document.getElementById('user-buttons'),
    logoutBtn: document.getElementById('logout-btn'),
    sidebar: document.querySelector('.sidebar'),
    toggleSidebarBtn: document.getElementById('toggleSidebarBtn'),
    toggleRoutesBtn: document.getElementById('toggleRoutesBtn'),
    locationBtn: document.getElementById('locationBtn'),
    userDisplayName: document.getElementById('user-display-name'),
    menuIcon: document.getElementById('menu-icon'),
    adminMenu: document.getElementById('admin-menu'),
    addRouteBtn: document.getElementById('add-route-btn')
  },

  icons: {
    parada: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%230d6efd",
      iconSize: [22, 22],
      iconAnchor: [11, 11],
      popupAnchor: [0, -12]
    }),
    ubicacion: L.icon({
      iconUrl: 'https://api.iconify.design/material-symbols/my-location.svg?color=%230d6efd',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    }),
    bus: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus.svg?color=%23000000",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    }),
  },

  // --- Inicialización ---
  async init() {
    this.initMap();
    this.updateAuthUI();
    this.setupEventListeners();

    // Carga de rutas (tal como lo traías)
    await this.fetchAllRouteData();

    this.renderRouteList();
    this.updateToggleButtonText();
    this.elements.toggleRoutesBtn.disabled = false;
  },

  initMap() {
    this.map = L.map("map").setView([19.5438, -96.9103], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(this.map);
  },

  // --- Datos / Ubicación ---
  async fetchAllRouteData() {
    this.elements.toggleRoutesBtn.textContent = 'Cargando datos de rutas...';
    const promises = RUTAS.map(rutaInfo =>
      this.fetchGeoJSON(`./data/${rutaInfo.id}/route.json`)
        .then(geojson => ({ ...rutaInfo, geojson }))
    );
    this.routeData = await Promise.all(promises);
  },

  getUserLocation() {
    const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        alert("La geolocalización no es compatible con tu navegador.");
        reject(new Error("Geolocation not supported"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
          const userLatLng = [this.userLocation.lat, this.userLocation.lon];
          if (this.userLocationMarker) this.map.removeLayer(this.userLocationMarker);
          this.userLocationMarker = L.marker(userLatLng, { icon: this.icons.ubicacion })
            .addTo(this.map)
            .bindPopup("<b>¡Estás aquí!</b>")
            .openPopup();
          this.map.setView(userLatLng, 15);
          resolve();
        },
        (error) => {
          alert("No se pudo obtener tu ubicación. Asegúrate de haber concedido los permisos.");
          reject(error);
        },
        options
      );
    });
  },

  async toggleUserLocation() {
    this.isLocationActive = !this.isLocationActive;
    this.elements.locationBtn.classList.toggle('active', this.isLocationActive);

    if (this.isLocationActive) {
      try {
        await this.getUserLocation();
        this.isShowingAll = false;
      } catch {
        this.isLocationActive = false;
        this.elements.locationBtn.classList.remove('active');
        this.isShowingAll = true;
      }
    } else {
      this.isShowingAll = true;
      if (this.userLocationMarker) {
        this.map.removeLayer(this.userLocationMarker);
        this.userLocationMarker = null;
      }
    }

    this.updateToggleButtonText();
    this.renderRouteList();
  },

  // --- Render/UI ---
  renderRouteList() {
    const query = this.elements.buscador.value;
    const normalizedQuery = this.normalizeString(query);

    this.elements.rutasLista.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const radiusInKm = 1.5;

    let baseRoutes = this.routeData;
    if (!this.isShowingAll && this.userLocation) {
      baseRoutes = this.routeData.filter(ruta =>
        this.isRouteNearby(ruta, this.userLocation, radiusInKm)
      );
    }

    const routesToShow = baseRoutes.filter(ruta => {
      const normalizedText = this.normalizeString(ruta.name);
      return normalizedText.includes(normalizedQuery);
    });

    if (routesToShow.length === 0) {
      const li = document.createElement('li');
      li.className = 'list-group-item text-muted';
      if (query) {
        li.textContent = 'No se encontraron rutas con ese nombre.';
      } else if (!this.isShowingAll && this.userLocation) {
        li.textContent = 'No hay rutas cercanas. Pulsa de nuevo el botón de ubicación para ver todas.';
      } else {
        li.textContent = 'No hay rutas para mostrar.';
      }
      fragment.appendChild(li);
    } else {
      for (const ruta of routesToShow) {
        const li = document.createElement('li');
        li.className = 'list-group-item';

        const button = document.createElement('button');
        button.className = 'btn btn-link ruta-btn';
        button.dataset.ruta = ruta.id;
        button.dataset.stop = ruta.stop;
        button.textContent = ruta.name;

        if (this.activeLayers[ruta.id]) {
          button.classList.add('active');
          li.classList.add('active');
        }

        const info = RUTA_INFO[ruta.id];
        const detalle = document.createElement('div');
        detalle.className = 'route-details';

        if (info) {
          detalle.innerHTML = `
            <div class="meta">
              <div><strong>Distancia de la ruta:</strong> ${info.distanciaKm} km</div>
              <div><strong>Tiempo en completarse:</strong> ${info.duracionMin} min</div>
              <div>
                <strong>¿Versión "Mujer segura"?:</strong>
                <span class="badge ${info.mujerSegura ? 'bg-success' : 'bg-secondary'}">
                  ${info.mujerSegura ? 'Sí' : 'No'}
                </span>
              </div>
            </div>
            ${info.foto ? `<img src="${info.foto}" alt="Autobús ruta ${ruta.id}">` : ''}
          `;
        } else {
          detalle.innerHTML = `
            <div class="meta">
              <div class="text-muted">Información no disponible para esta ruta.</div>
            </div>
          `;
        }

        li.appendChild(button);
        li.appendChild(detalle);
        fragment.appendChild(li);
      }
    }

    this.elements.rutasLista.appendChild(fragment);
  },

  updateToggleButtonText() {
    if (!navigator.geolocation) {
      this.elements.toggleRoutesBtn.textContent = 'Ubicación no disponible';
      this.elements.toggleRoutesBtn.disabled = true;
      return;
    }
    this.elements.toggleRoutesBtn.textContent = this.isShowingAll
      ? 'Mostrar Solo Rutas Cercanas'
      : 'Mostrar Todas las Rutas';
  },

  // Cercanía robusta (revisa todas las features y usa metros)
  isRouteNearby(ruta, userLoc, radiusKm) {
    const features = ruta.geojson?.features;
    if (!Array.isArray(features) || features.length === 0) return false;

    const radiusM = radiusKm * 1000;
    const userLL = L.latLng(userLoc.lat, userLoc.lon);

    for (const f of features) {
      const g = f.geometry;
      if (!g) continue;

      const checkCoords = (coords) => {
        for (const [lng, lat] of coords) {
          if (userLL.distanceTo([lat, lng]) <= radiusM) return true;
        }
        return false;
      };

      if (g.type === 'LineString' && Array.isArray(g.coordinates)) {
        if (checkCoords(g.coordinates)) return true;
      } else if (g.type === 'MultiLineString' && Array.isArray(g.coordinates)) {
        for (const line of g.coordinates) {
          if (checkCoords(line)) return true;
        }
      }
    }
    return false;
  },

  getDistanceInKm(coords1, coords2) {
    const R = 6371;
    const dLat = (coords2.lat - coords1.lat) * Math.PI / 180;
    const dLon = (coords2.lon - coords1.lon) * Math.PI / 180;
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coords1.lat * Math.PI / 180) * Math.cos(coords2.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  async toggleRuta(buttonEl) {
    const rutaId = buttonEl.dataset.ruta;
    const listItemEl = buttonEl.closest('.list-group-item');

    if (this.activeLayers[rutaId]) {
      this.removeRoute(rutaId, buttonEl, listItemEl);
    } else {
      const stopId = buttonEl.dataset.stop;
      this.addRoute(rutaId, stopId, buttonEl, listItemEl);
    }
  },

  async addRoute(rutaId, stopId, buttonEl, listItemEl) {
    buttonEl.classList.add('active');
    listItemEl.classList.add('active');

    this.activeLayers[rutaId] = {};

    const ruta = this.routeData.find(r => r.id === rutaId);
    const geoRuta = ruta ? ruta.geojson : null;

    const stopsUrl = `./data/${rutaId}/route_${stopId}_stops.geojson`;
    const geoStops = await this.fetchGeoJSON(stopsUrl);

    if (geoRuta) {
      const routeLayer = L.geoJSON(geoRuta, { style: { color: "green", weight: 4 } }).addTo(this.map);
      this.activeLayers[rutaId].routeLayer = routeLayer;
      const bounds = routeLayer.getBounds();
      if (bounds.isValid()) this.map.fitBounds(bounds, { padding: [20, 20] });
    }

    // Animación de bus (como lo traías)
    try {
      setTimeout(() => {
        let latlngs = this._stitchLatLngsFromLayer(this.activeLayers[rutaId].routeLayer, 80);

        if (!latlngs || latlngs.length < 2) {
          const geom = geoRuta?.features;
          const all = [];
          if (Array.isArray(geom)) {
            for (const f of geom) {
              const g = f.geometry;
              if (!g) continue;
              if (g.type === 'LineString') {
                all.push(...g.coordinates.map(([lng, lat]) => [lat, lng]));
              } else if (g.type === 'MultiLineString') {
                for (const line of g.coordinates) {
                  all.push(...line.map(([lng, lat]) => [lat, lng]));
                }
              }
            }
          }
          latlngs = all;
        }

        if (latlngs && latlngs.length >= 2) {
          if (this.activeRoute) {
            this.map.removeLayer(this.activeRoute);
            this.activeRoute = null;
          }
          this.bus.stop();

          this.activeRoute = L.polyline(latlngs, { opacity: 0, weight: 0 }).addTo(this.map);

          this.bus.start(this.activeRoute, {
            speed: 250,
            loop: true,
            fitBounds: false
          });
        } else {
          console.warn('[RUTABUS] No se pudo construir latlngs para animar el bus.');
        }
      }, 0);
    } catch (e) {
      console.error('[RUTABUS] Error preparando animación del bus:', e);
    }

    // Paradas + UI de viaje
    if (geoStops) {
      const stopLayer = L.geoJSON(geoStops, {
        pointToLayer: (feature, latlng) =>
          L.marker(latlng, { icon: this.icons.parada })
            .bindPopup(`<b>Parada:</b> ${feature?.properties?.name || "Sin nombre"}`)
      }).addTo(this.map);
      this.activeLayers[rutaId].stopLayer = stopLayer;

      // Extraer stops
      const stops = (geoStops.features || []).map((f, idx) => {
        const [lng, lat] = f.geometry?.coordinates || [];
        const props = f.properties || {};
        const id = props.id || props.stop_id || String(idx + 1);
        const name = props.name || `Parada ${id}`;
        return { id, name, latlng: L.latLng(lat, lng) };
      });
      this.activeLayers[rutaId].stops = stops;

      // Construir controles de viaje
      this._buildTripControls(listItemEl, rutaId, stops);
    } else {
      const detalle = listItemEl.querySelector('.route-details');
      if (detalle) {
        const warn = document.createElement('div');
        warn.className = 'trip-msg';
        warn.innerHTML = `<em>Esta opción no está disponible para esta ruta (no hay paradas).</em>`;
        detalle.appendChild(warn);
      }
    }

    if (!geoRuta && !geoStops) {
      alert(`No se pudo mostrar la ruta ${rutaId}. Verifica que los archivos existan.`);
      this.removeRoute(rutaId, buttonEl, listItemEl);
    }
  },

  removeRoute(rutaId, buttonEl, listItemEl) {
    const layers = this.activeLayers[rutaId];
    if (layers?.routeLayer) this.map.removeLayer(layers.routeLayer);
    if (layers?.stopLayer) this.map.removeLayer(layers.stopLayer);

    buttonEl?.classList.remove("active");
    listItemEl?.classList.remove("active");

    delete this.activeLayers[rutaId];

    // detener animación del bus
    if (this.activeRoute) {
      this.bus.stop();
      this.activeRoute = null;
    }

    // detener viaje si era de esta ruta
    if (this.trip.active && this.trip.rutaId === rutaId) {
      this._stopTrip(true);
    }
  },

  // --- VIAJE: UI ---
  _buildTripControls(listItemEl, rutaId, stops) {
    const detalle = listItemEl.querySelector('.route-details');
    if (!detalle) return;

    let box = detalle.querySelector('.trip-controls');
    if (box) box.remove();

    box = document.createElement('div');
    box.className = 'trip-controls';
    box.innerHTML = `
      <div class="row">
        <div class="col-12 col-md-6">
          <label class="form-label">Parada de entrada</label>
          <select class="form-select form-select-sm trip-origin">
            <option value="">Selecciona...</option>
            ${stops.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
          </select>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label">Parada de destino</label>
          <select class="form-select form-select-sm trip-dest">
            <option value="">Selecciona...</option>
            ${stops.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
          </select>
        </div>
        <div class="col-12 d-flex gap-2">
          <button class="btn btn-primary btn-sm trip-start">Iniciar viaje</button>
          <button class="btn btn-secondary btn-sm trip-stop" disabled>Detener</button>
        </div>
        <div class="col-12">
          <div class="trip-msg"></div>
        </div>
        <div class="col-12 trip-progress" style="display:none;">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width:0%"></div>
          </div>
          <div class="stats">
            <span class="progress-text">0%</span>
            <span class="dist-text">0 m restantes</span>
          </div>
        </div>
      </div>
    `;
    detalle.appendChild(box);

    this.trip.ui = {
      container: box,
      originSel: box.querySelector('.trip-origin'),
      destSel: box.querySelector('.trip-dest'),
      startBtn: box.querySelector('.trip-start'),
      stopBtn: box.querySelector('.trip-stop'),
      msg: box.querySelector('.trip-msg'),
      progressBar: box.querySelector('.progress-bar'),
      progressText: box.querySelector('.progress-text'),
      distText: box.querySelector('.dist-text'),
      progressWrap: box.querySelector('.trip-progress')
    };

    this.trip.ui.startBtn.addEventListener('click', () => this._startTrip(rutaId));
    this.trip.ui.stopBtn.addEventListener('click', () => this._stopTrip());
  },

  // --- VIAJE: lógica ---
  _startTrip(rutaId) {
    if (!this.activeLayers[rutaId]?.stops) {
      this.trip.ui.msg.textContent = 'No hay paradas disponibles en esta ruta.';
      return;
    }
    const oId = this.trip.ui.originSel.value;
    const dId = this.trip.ui.destSel.value;
    if (!oId || !dId) {
      this.trip.ui.msg.textContent = 'Selecciona parada de entrada y de destino.';
      return;
    }
    if (oId === dId) {
      this.trip.ui.msg.textContent = 'Elige paradas diferentes para iniciar.';
      return;
    }

    const stops = this.activeLayers[rutaId].stops;
    const origin = stops.find(s => s.id === oId);
    const dest = stops.find(s => s.id === dId);
    if (!origin || !dest) {
      this.trip.ui.msg.textContent = 'Paradas no válidas.';
      return;
    }

    const path = this._getRouteLatLngs(rutaId);
    if (!path.length) {
      this.trip.ui.msg.textContent = 'No se pudo leer el trazado de la ruta.';
      return;
    }

    const i0 = this._nearestIndexOnPath(path, origin.latlng);
    const i1 = this._nearestIndexOnPath(path, dest.latlng);
    let segment = [];
    if (i0 < i1) segment = path.slice(i0, i1 + 1);
    else segment = path.slice(i1, i0 + 1).reverse();

    if (segment.length < 2) {
      this.trip.ui.msg.textContent = 'No se pudo formar el segmento entre paradas.';
      return;
    }

    // limpiar viaje previo si existe
    this._stopTrip(true);

    // estado
    this.trip.active = true;
    this.trip.rutaId = rutaId;
    this.trip.origin = origin;
    this.trip.dest = dest;
    this.trip.segmentLatLngs = segment;

    // capas
    this.trip.segmentLayer = L.polyline(segment, { color: '#0d6efd', weight: 6 }).addTo(this.map);
    this.trip.progressLayer = L.polyline([segment[0]], { color: '#198754', weight: 6 }).addTo(this.map);
    this.trip.originMarker = L.marker(origin.latlng, { title: 'Parada de entrada' })
      .bindPopup(`<b>Entrada:</b> ${origin.name}`).addTo(this.map);
    this.trip.destMarker = L.marker(dest.latlng, { title: 'Parada de destino' })
      .bindPopup(`<b>Destino:</b> ${dest.name}`).addTo(this.map);

    const bounds = L.latLngBounds(segment);
    if (bounds.isValid()) this.map.fitBounds(bounds, { padding: [30,30] });

    // UI
    this.trip.ui.msg.textContent = `Viaje iniciado: ${origin.name} → ${dest.name}`;
    this.trip.ui.progressWrap.style.display = 'block';
    this.trip.ui.startBtn.disabled = true;
    this.trip.ui.stopBtn.disabled = false;

    // geolocalización continua
    if (!navigator.geolocation) {
      this.trip.ui.msg.textContent = 'Geolocalización no soportada por el navegador.';
      return;
    }
    this.trip.watchId = navigator.geolocation.watchPosition(
      (pos) => this._onTripPosition(pos),
      (err) => {
        console.warn('watchPosition error', err);
        this.trip.ui.msg.textContent = 'No se pudo obtener tu ubicación continuamente.';
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
    );
  },

  _stopTrip(silent = false) {
    if (this.trip.watchId != null) {
      navigator.geolocation.clearWatch(this.trip.watchId);
      this.trip.watchId = null;
    }
    const t = this.trip;
    ['segmentLayer','progressLayer','originMarker','destMarker','userMarker'].forEach(k => {
      if (t[k]) { this.map.removeLayer(t[k]); t[k] = null; }
    });
    t.active = false;
    t.rutaId = null;
    t.origin = null;
    t.dest = null;
    t.segmentLatLngs = [];

    if (t.ui.container) {
      if (!silent) t.ui.msg.textContent = 'Viaje detenido.';
      t.ui.progressWrap.style.display = 'none';
      t.ui.progressBar.style.width = '0%';
      t.ui.progressText.textContent = '0%';
      t.ui.distText.textContent = '0 m restantes';
      t.ui.startBtn.disabled = false;
      t.ui.stopBtn.disabled = true;
    }
  },

  _onTripPosition(position) {
    if (!this.trip.active) return;
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const here = L.latLng(lat, lng);

    if (!this.trip.userMarker) {
      this.trip.userMarker = L.marker(here, { zIndexOffset: 1200 }).addTo(this.map);
    } else {
      this.trip.userMarker.setLatLng(here);
    }

    const seg = this.trip.segmentLatLngs;
    const idx = this._nearestIndexOnPath(seg, here);

    const covered = seg.slice(0, Math.max(1, idx + 1));
    this.trip.progressLayer.setLatLngs(covered);

    const totalM = this._pathLengthM(seg);
    const doneM = this._pathLengthM(covered);
    const remainM = Math.max(0, totalM - doneM);
    const pct = totalM > 0 ? Math.min(100, Math.round((doneM / totalM) * 100)) : 0;

    this.trip.ui.progressBar.style.width = `${pct}%`;
    this.trip.ui.progressText.textContent = `${pct}%`;
    this.trip.ui.distText.textContent = (remainM > 1000)
      ? `${(remainM/1000).toFixed(2)} km restantes`
      : `${Math.round(remainM)} m restantes`;

    const atDest = here.distanceTo(seg[seg.length - 1]) < 25;
    if (atDest) {
      this.trip.ui.msg.textContent = '¡Has llegado a tu destino! 🎉';
      this.trip.ui.progressBar.style.width = '100%';
      this.trip.ui.progressText.textContent = '100%';
      this.trip.ui.distText.textContent = '0 m';
      // setTimeout(()=> this._stopTrip(), 4000);
    }
  },

  // --- Auth/UI ---
  updateAuthUI() {
    const userString = localStorage.getItem('rutabus_user');

    if (userString) {
      this.elements.guestButtons.style.display = 'none';
      this.elements.userButtons.style.display = 'flex';

      const userData = JSON.parse(userString);

      if (userData.rol === 'administrador') {
        this.elements.userDisplayName.textContent = 'Administrador';
        this.elements.menuIcon.style.display = 'block';
      } else {
        const firstName = userData.nombre.split(' ')[0];
        this.elements.userDisplayName.textContent = firstName;
      }
    } else {
      this.elements.guestButtons.style.display = 'flex';
      this.elements.userButtons.style.display = 'none';
      this.elements.userDisplayName.textContent = 'Invitado';
    }
  },

  logout() {
    localStorage.removeItem('rutabus_user');
    window.location.reload();
  },

  // --- Listeners ---
  setupEventListeners() {
    const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

    on(this.elements.rutasLista, 'click', (e) => {
      const btn = e.target.closest(".ruta-btn");
      if (btn) this.toggleRuta(btn);
    });

    on(this.elements.buscador, 'input', () => this.renderRouteList());
    on(this.elements.buscador, 'keydown', (e) => {
      if (e.key === 'Escape') {
        e.target.value = '';
        this.renderRouteList();
      }
    });

    on(this.elements.logoutBtn, 'click', () => this.logout());

    on(this.elements.toggleSidebarBtn, 'click', () => {
      this.elements.sidebar.classList.toggle('collapsed');
      const isCollapsed = this.elements.sidebar.classList.contains('collapsed');
      this.elements.toggleSidebarBtn.textContent = isCollapsed ? '▶️' : '◀️';
      this.elements.toggleSidebarBtn.classList.toggle('collapsed', isCollapsed);
    });

    // Mejora: si no hay ubicación, la pide al pasar a "cercanas"
    on(this.elements.toggleRoutesBtn, 'click', async () => {
      if (this.isShowingAll) {
        if (!this.userLocation) {
          try { await this.getUserLocation(); }
          catch { alert('No se pudo obtener tu ubicación. Revisa permisos e inténtalo de nuevo.'); return; }
        }
        this.isShowingAll = false;
      } else {
        this.isShowingAll = true;
      }
      this.updateToggleButtonText();
      this.renderRouteList();
    });

    on(this.elements.locationBtn, 'click', () => this.toggleUserLocation());

    on(this.elements.menuIcon, 'click', (e) => {
      e.stopPropagation();
      const menu = this.elements.adminMenu;
      if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', () => {
      if (this.elements.adminMenu && this.elements.adminMenu.style.display === 'block') {
        this.elements.adminMenu.style.display = 'none';
      }
    });

    on(this.elements.addRouteBtn, 'click', (e) => {
      e.preventDefault();
      window.location.href = '/admin.html';
    });
  },

  // --- Helpers ---
  async fetchGeoJSON(url) {
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) { return null; }
      const data = await res.json();
      return (data && Array.isArray(data.features) && data.features.length > 0) ? data : null;
    } catch {
      return null;
    }
  },

  normalizeString(str) {
    return (str || '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },

  // Coser polylines de L.geoJSON
  _stitchLatLngsFromLayer(layer, thresholdMeters = 80) {
    const almostEqual = (a, b) => {
      if (!a || !b) return false;
      return Math.abs(a.lat - b.lat) < 1e-5 && Math.abs(a.lng - b.lng) < 1e-5;
    };

    const pieces = [];
    const collect = (lyr) => {
      if (!lyr) return;
      if (lyr instanceof L.Polyline && !(lyr instanceof L.Polygon)) {
        const arr = lyr.getLatLngs();
        const flat = Array.isArray(arr[0]) ? arr.flat() : arr;
        if (flat.length >= 2) pieces.push(flat);
      } else if (typeof lyr.getLayers === 'function') {
        lyr.getLayers().forEach(collect);
      }
    };
    collect(layer);

    if (pieces.length === 0) return [];

    pieces.sort((a, b) => b.length - a.length);
    const path = pieces.shift().slice();

    const dist = (a, b) => a.distanceTo(b);
    while (pieces.length) {
      const last = path[path.length - 1];

      let bestIdx = -1;
      let bestRev = false;
      let bestD = Infinity;

      for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        const dStart = dist(last, p[0]);
        const dEnd   = dist(last, p[p.length - 1]);

        if (dStart < bestD) { bestD = dStart; bestIdx = i; bestRev = false; }
        if (dEnd   < bestD) { bestD = dEnd;   bestIdx = i; bestRev = true;  }
      }

      if (bestD > thresholdMeters) break;

      const chosen = pieces.splice(bestIdx, 1)[0];
      const seq = bestRev ? chosen.slice().reverse() : chosen;

      if (almostEqual(path[path.length - 1], seq[0])) path.pop();

      path.push(...seq);
    }

    return path;
  },

  _extractLatLngsFromGeoJSON(geojson) {
    const latlngs = [];
    if (!geojson || !Array.isArray(geojson.features)) return latlngs;

    for (const f of geojson.features) {
      const g = f && f.geometry;
      if (!g) continue;

      if (g.type === 'LineString' && Array.isArray(g.coordinates)) {
        for (const [lng, lat] of g.coordinates) latlngs.push([lat, lng]);
      } else if (g.type === 'MultiLineString' && Array.isArray(g.coordinates)) {
        for (const line of g.coordinates) {
          for (const [lng, lat] of line) latlngs.push([lat, lng]);
        }
      }
    }
    return latlngs;
  },

  _firstPolylineFromLayer(layer) {
    if (!layer) return null;
    if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) return layer;

    if (typeof layer.getLayers === 'function') {
      const arr = layer.getLayers();
      for (const l of arr) {
        const found = this._firstPolylineFromLayer(l);
        if (found) return found;
      }
    }
    return null;
  },

  // --- VIAJE: estado ---
  trip: {
    active: false,
    rutaId: null,
    origin: null,   // {id, name, latlng}
    dest: null,     // {id, name, latlng}
    segmentLatLngs: [],

    watchId: null,
    segmentLayer: null,
    progressLayer: null,
    originMarker: null,
    destMarker: null,
    userMarker: null,

    ui: {
      container: null,
      originSel: null,
      destSel: null,
      startBtn: null,
      stopBtn: null,
      msg: null,
      progressBar: null,
      progressText: null,
      distText: null,
      progressWrap: null
    }
  },

  // Devuelve todas las coords [lat,lng] (continuas) de la ruta
  _getRouteLatLngs(rutaId) {
    const layer = this.activeLayers[rutaId]?.routeLayer;
    if (!layer) return [];
    let latlngs = this._stitchLatLngsFromLayer(layer, 120);
    if (latlngs && latlngs.length >= 2) return latlngs;

    const ruta = this.routeData.find(r => r.id === rutaId);
    return this._extractLatLngsFromGeoJSON(ruta?.geojson);
  },

  // Índice más cercano en un path
  _nearestIndexOnPath(pathLatLngs, latlng) {
    if (!pathLatLngs || pathLatLngs.length === 0) return 0;
    let bestIdx = 0, bestD = Infinity;
    const p = L.latLng(latlng);
    for (let i = 0; i < pathLatLngs.length; i++) {
      const d = p.distanceTo(pathLatLngs[i]);
      if (d < bestD) { bestD = d; bestIdx = i; }
    }
    return bestIdx;
  },

  // Distancia del path (m)
  _pathLengthM(path) {
    let sum = 0;
    for (let i = 0; i < path.length - 1; i++) sum += path[i].distanceTo(path[i + 1]);
    return sum;
  },

  // --- Animación del bus (tu módulo original) ---
  bus: {
    marker: null,
    animFrame: null,

    stop() {
      if (this.animFrame) {
        cancelAnimationFrame(this.animFrame);
        this.animFrame = null;
      }
      if (this.marker) {
        this.marker.remove();
        this.marker = null;
      }
    },

    start(polyline, opts = {}) {
      const { speed = 8, loop = true, fitBounds = false } = opts;

      this.stop();

      const latlngs = polyline.getLatLngs().flat();
      if (!latlngs || latlngs.length < 2) return;

      if (fitBounds) {
        const b = L.latLngBounds(latlngs);
        polyline._map.fitBounds(b, { padding: [30, 30] });
      }

      const segments = [];
      let totalDist = 0;
      for (let i = 0; i < latlngs.length - 1; i++) {
        const a = latlngs[i], b = latlngs[i + 1];
        const d = a.distanceTo(b);
        segments.push({ a, b, d, acc: totalDist });
        totalDist += d;
      }
      if (totalDist === 0) return;

      this.marker = L.marker(latlngs[0], {
        icon: App.icons.bus,
        zIndexOffset: 1000
      }).addTo(polyline._map);

      const tTotal = (totalDist / speed) * 1000;
      let t0 = null;

      const step = (ts) => {
        if (!t0) t0 = ts;
        const elapsed = ts - t0;
        let dist = (elapsed / tTotal) * totalDist;

        if (dist >= totalDist) {
          if (loop) {
            t0 = ts;
            dist = 0;
          } else {
            this.marker.setLatLng(latlngs[latlngs.length - 1]);
            this.animFrame = null;
            return;
          }
        }

        let seg = segments[0];
        for (let i = 0; i < segments.length; i++) {
          const s = segments[i];
          if (dist <= s.acc + s.d) { seg = s; break; }
        }

        const segDist = dist - seg.acc;
        const t = seg.d > 0 ? (segDist / seg.d) : 0;
        const lat = seg.a.lat + (seg.b.lat - seg.a.lat) * t;
        const lng = seg.a.lng + (seg.b.lng - seg.a.lng) * t;

        this.marker.setLatLng([lat, lng]);
        this.animFrame = requestAnimationFrame(step);
      };

      this.animFrame = requestAnimationFrame(step);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
