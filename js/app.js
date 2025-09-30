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

  // --- Datos de ejemplo para el detalle de cada ruta ---
  const RUTA_INFO = {
  "001": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 37, duracionMin: 80, mujerSegura: false, foto: "./data/001/001.png" },
  "002": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 25, duracionMin: 86, mujerSegura: true, foto: "./data/002/002.png" },
  "003": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.2, duracionMin: 25, mujerSegura: false, foto: "./data/003/003.png" },
  "004": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.2, duracionMin: 25, mujerSegura: false, foto: "./data/004/004.png" },
  "005": { horaInicio: "6:30", horaFinal: "21:45", distanciaKm: 5.5, duracionMin: 25, mujerSegura: false, foto: "./data/005/005.png" },
  "006": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: false, foto: "./data/006/006.png" },
  "007": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 46, mujerSegura: false, foto: "./data/007/007.png" },
  "008": { horaInicio: "5:00", horaFinal: "21:45", distanciaKm: 16, duracionMin: 55, mujerSegura: false, foto: "./data/008/008.png" },
  "009": { horaInicio: "5:00", horaFinal: "21:45", distanciaKm: 12, duracionMin: 46, mujerSegura: false, foto: "./data/009/009.png" },
  "010": { horaInicio: "5:40", horaFinal: "21:45", distanciaKm: 12, duracionMin: 46, mujerSegura: true, foto: "./data/010/010.png" },
  "011": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: false, foto: "./data/011/011.png" },
  "012": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: false, foto: "./data/012/012.png" },
  "013": { horaInicio: "5:45", horaFinal: "21:45", distanciaKm: 10, duracionMin: 46, mujerSegura: true, foto: "./data/013/013.png" },
  "014": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 46, mujerSegura: false, foto: "./data/014/014.png" },
  "015": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 88, mujerSegura: false, foto: "./data/015/015.png" },
  "016": { horaInicio: "6:00", horaFinal: "21:45", distanciaKm: 5.4, duracionMin: 25, mujerSegura: false, foto: "./data/016/016.png" },
  "017": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 5.4, duracionMin: 25, mujerSegura: false, foto: "./data/017/017.png" },
  "018": { horaInicio: "6:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 46, mujerSegura: false, foto: "./data/018/018.png" },
  "019": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.8, duracionMin: 46, mujerSegura: false, foto: "./data/019/019.png" },
  "020": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 26, duracionMin: 86, mujerSegura: false, foto: "./data/020/020.png" },
  "021": { horaInicio: "7:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 60, mujerSegura: false, foto: "./data/021/021.png" },
  "022": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 50, mujerSegura: false, foto: "./data/022/022.png" },
  "023": { horaInicio: "7:00", horaFinal: "21:45", distanciaKm: 14, duracionMin: 50, mujerSegura: true, foto: "./data/023/023.png" },
  "024": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 50, mujerSegura: false, foto: "./data/023/023.png" },
  "025": { horaInicio: "5:45", horaFinal: "21:45", distanciaKm: 14, duracionMin: 50, mujerSegura: true, foto: "./data/023/023.png" },
  "026": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 55, mujerSegura: false, foto: "./data/026/026.png" },
  "027": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 55, mujerSegura: true, foto: "./data/026/026.png" },
  "028": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 60, mujerSegura: true, foto: "./data/028/028.png" },
  "029": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 60, mujerSegura: false, foto: "./data/028/028.png" },
  "030": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 55, mujerSegura: false, foto: "./data/030/030.png" },
  "031": { horaInicio: "7:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 55, mujerSegura: false, foto: "./data/030/030.png" },
  "032": { horaInicio: "7:30", horaFinal: "21:45", distanciaKm: 24, duracionMin: 86, mujerSegura: false, foto: "./data/032/032.png" },
  "033": { horaInicio: "7:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 55, mujerSegura: true, foto: "./data/032/032.png" },
  "034": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 55, mujerSegura: false, foto: "./data/032/032.png" },
  "035": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 20, duracionMin: 70, mujerSegura: false, foto: "./data/035/035.png" },
  "036": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 20, duracionMin:70, mujerSegura: false, foto: "./data/035/035.png" },
  "037": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 55, mujerSegura: false, foto: "./data/037/037.png" },
  "038": { horaInicio: "6:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 55, mujerSegura: true, foto: "./data/037/037.png" },
  "039": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 65, mujerSegura: false, foto: "./data/039/039.png" },
  "040": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 55, mujerSegura: true, foto: "./data/039/039.png" },
  "041": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 22, duracionMin: 75, mujerSegura: false, foto: "./data/041/041.png" },
  "042": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 65, mujerSegura: false, foto: "./data/041/041.png" },
  "043": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: false, foto: "./data/043/043.png" },
  "044": { horaInicio: "7:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: true, foto: "./data/043/043.png" },
  "045": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.86, duracionMin: 35, mujerSegura: false, foto: "./data/045/045.png" },
  "046": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.86, duracionMin: 35, mujerSegura: false, foto: "./data/045/045.png" },
  "047": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.53, duracionMin: 40, mujerSegura: false, foto: "./data/047/047.png" },
  "048": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 40, mujerSegura: false, foto: "./data/047/047.png" },
  "049": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.86, duracionMin: 25, mujerSegura: true, foto: "./data/049/049.png" },
  "050": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.79, duracionMin: 25, mujerSegura: true, foto: "./data/049/049.png" },
  "051": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 55, mujerSegura: false, foto: "./data/051/051.png" },
  "052": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.68, duracionMin: 40, mujerSegura: false, foto: "./data/051/051.png" },
  "053": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 88, mujerSegura: true, foto: "./data/053/053.png" },
  "054": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.45, duracionMin: 40, mujerSegura: false, foto: "./data/054/054.png" },
  "055": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.98, duracionMin: 35, mujerSegura: true, foto: "./data/054/054.png" },
  "056": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 8.4, duracionMin: 35, mujerSegura: false, foto: "./data/056/056.png" },
  "057": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 8.85, duracionMin: 35, mujerSegura: true, foto: "./data/056/057.png"},
  "058": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 60, mujerSegura: false, foto: "./data/058/058.png" },
  "059": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: false, foto: "./data/059/059.png" },
  "060": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.09, duracionMin: 25, mujerSegura: false, foto: "./data/060/060.png" },
  "061": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.59, duracionMin: 20, mujerSegura: true, foto: "./data/060/060.png"},
  "062": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.03, duracionMin: 35, mujerSegura: false, foto: "./data/062/062.png" },
  "063": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.06, duracionMin: 30, mujerSegura: false, foto: "./data/062/062.png" },
  "064": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 90, mujerSegura: false, foto: "./data/064/064.png" },
  "065": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 25, duracionMin: 86, mujerSegura: false, foto: "./data/064/064.png" },
  "066": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 55, mujerSegura: true, foto: "./data/066/066.png" },
  "067": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 46, mujerSegura: false, foto: "./data/066/066.png" },
  "068": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.86, duracionMin: 25, mujerSegura: false, foto: "./data/068/068.png" },
  "069": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 46, mujerSegura: false, foto: "./data/068/068.png" },
  "070": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 53, mujerSegura: false, foto: "./data/070/070.png" },
  "071": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 55, mujerSegura: true, foto: "./data/070/070.png" },
  "072": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 53, mujerSegura: false, foto: "./data/072/072.png" },
  "073": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 66, mujerSegura: false, foto: "./data/072/072.png" },
  "074": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 8.04, duracionMin: 42, mujerSegura: true, foto: "./data/074/074.png" },
  "075": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: true, foto: "./data/074/074.png" },
  "076": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 60, mujerSegura: true, foto: "./data/076/076.png" },
  "077": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.86, duracionMin: 40, mujerSegura: false, foto: "./data/077/077.png" },

  "078": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 48, mujerSegura: true, foto: "./data/078/078.png" },
  "079": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/079/079.png" },
  "080": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12,  duracionMin: 48, mujerSegura: false, foto: "./data/080/080.png" },
  "081": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.21, duracionMin: 37, mujerSegura: true,  foto: "./data/081/081.png" },
  "082": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 60, mujerSegura: false, foto: "./data/082/082.png" },
  "083": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 72, mujerSegura: true, foto: "./data/083/083.png" },
  "084": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 64, mujerSegura: false, foto: "./data/084/084.png" },
  "085": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 40, mujerSegura: true,  foto: "./data/085/085.png" },
  "086": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/086/086.png" },
  "087": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: false, foto: "./data/087/087.png" },
  "088": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 5, duracionMin: 20, mujerSegura: false, foto: "./data/088/088.png" },
  "089": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 5, duracionMin: 20, mujerSegura: true,  foto: "./data/089/089.png" },
  "090": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6,  duracionMin: 24, mujerSegura: false, foto: "./data/088/088.png" },
  "091": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: false, foto: "./data/091/091.png" },
  "092": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 3.72, duracionMin: 15, mujerSegura: false, foto: "./data/092/092.png" },
  "093": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13.9, duracionMin: 51, mujerSegura: true, foto: "./data/091/091.png" },
  "094": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 4.13, duracionMin: 17, mujerSegura: false, foto: "./data/091/091.png" },
  "095": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.27, duracionMin: 41, mujerSegura: true,  foto: "./data/095/095.png" },
  "096": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 8.56, duracionMin: 33, mujerSegura: false, foto: "./data/096/096.png" },
  "097": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 44, mujerSegura: false, foto: "./data/097/097.png" },
  "098": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 3.54, duracionMin: 14, mujerSegura: false, foto: "./data/098/098.png" },
  "099": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9, duracionMin: 36, mujerSegura: false, foto: "./data/099/099.png" },
  "100": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 76, mujerSegura: true,  foto: "./data/100/100.png" },
  "101": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 48, mujerSegura: false, foto: "./data/101/101.png" },
  "102": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 44, mujerSegura: true, foto: "./data/102/102.png" },
  "103": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 40, mujerSegura: false, foto: "./data/103/103.png" },
  "104": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 26, duracionMin: 104, mujerSegura: true, foto: "./data/104/104.png" },
  "105": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7, duracionMin: 28, mujerSegura: false, foto: "./data/105/105.png" },
  "106": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: true,  foto: "./data/106/106.png" },
  "107": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/107/107.png" },
  "108": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 4, duracionMin: 16, mujerSegura: false, foto: "./data/108/108.png" },
  "109": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 56, mujerSegura: false, foto: "./data/109/109.png" },
  "110": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/110/110.png" },
  "111": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 48, mujerSegura: true, foto: "./data/111/111.png" },
  "112": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.59, duracionMin: 28, mujerSegura: false, foto: "./data/111/111.png" },
  "113": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.44, duracionMin: 28, mujerSegura: false, foto: "./data/113/113.png" },
  "114": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 28, duracionMin: 112, mujerSegura: false, foto: "./data/114/114.png" },
  "115": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 76, mujerSegura: true,  foto: "./data/115/115.png" },
  "116": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 25, duracionMin: 100, mujerSegura: false, foto: "./data/114/114.png" },
  "117": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 31, duracionMin: 124, mujerSegura: false, foto: "./data/117/117.png" },
  "118": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 34, duracionMin: 136, mujerSegura: true, foto: "./data/117/117.png" },
  "119": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 26, duracionMin: 104, mujerSegura: false, foto: "./data/119/119.png" },
  "120": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 64, mujerSegura: false, foto: "./data/120/120.png" },
  "121": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 25, duracionMin: 100, mujerSegura: false, foto: "./data/121/121.png" },
  "122": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 68, mujerSegura: true, foto: "./data/122/122.png" },
  "123": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 24, duracionMin: 96, mujerSegura: false, foto: "./data/114/114.png" },
  "124": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 76, mujerSegura: false, foto: "./data/124/124.png" },
  "125": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 72, mujerSegura: false, foto: "./data/125/125.png" },
  "126": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 24, duracionMin: 96, mujerSegura: true,  foto: "./data/126/126.png" },
  "127": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 108, mujerSegura: false, foto: "./data/127/127.png" },
  "128": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/128/128.png" },
  "129": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/129/129.png" },
  "130": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 40, mujerSegura: false, foto: "./data/128/128.png" },
  "131": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 68, mujerSegura: true, foto: "./data/131/131.png" },
  "132": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 76, mujerSegura: false, foto: "./data/126/126.png" },
  "133": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 24, duracionMin: 96, mujerSegura: false, foto: "./data/126/126.png" },
  "134": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 30, duracionMin: 120, mujerSegura: false, foto: "./data/134/134.png" },
  "135": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 68, mujerSegura: true, foto: "./data/135/135.png" },
  "136": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 56, mujerSegura: false, foto: "./data/136/136.png" },
  "137": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 60, mujerSegura: false, foto: "./data/136/136.png" },
  "138": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 20, duracionMin: 80, mujerSegura: true,  foto: "./data/138/138.png" },
  "139": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 20, duracionMin: 80, mujerSegura: false, foto: "./data/138/138.png" },
  "140": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 29, duracionMin: 116, mujerSegura: false, foto: "./data/138/138.png" },
  "141": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 108, mujerSegura: true, foto: "./data/141/141.png" },
  "142": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 21, duracionMin: 84, mujerSegura: false, foto: "./data/142/142.png" },
  "143": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.7, duracionMin: 40, mujerSegura: false, foto: "./data/143/143.png" },
  "144": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 72, mujerSegura: false, foto: "./data/141/141.png" },
  "145": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 72, mujerSegura: false, foto: "./data/145/145.png" },
  "146": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 22, duracionMin: 88, mujerSegura: true, foto: "./data/146/146.png" },
  "147": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 64, mujerSegura: false, foto: "./data/147/147.png" },
  "148": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 22, duracionMin: 88, mujerSegura: false, foto: "./data/148/148.png" },
  "149": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 68, mujerSegura: false, foto: "./data/148/148.png" },
  "150": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 25, duracionMin: 100, mujerSegura: true,  foto: "./data/148/148.png" },
  "151": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/151/151.png" },
  "152": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 108, mujerSegura: false, foto: "./data/152/152.png" },



};

const App = {
  // --- Propiedades y Estado ---
  map: null,
  activeLayers: {},
  userLocation: null,
  isShowingAll: true,
  isLocationActive: false,
  routeData: [],
  userLocationMarker: null,
  activeRoute: null, 
  selectionDefaults: { start: null, end: null, segmentLayer: null },
  watchId: null,
  accuracyCircle: null,
  followUser: true,
  lastUserLatLng: null,


  settings: {
    nearbyRadiusKm: 0.3,
    showAccuracyCircle: false 
  },

  proximityCircle: null,

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
    paradaStart: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%2300a65a",
      iconSize: [22, 22],
      iconAnchor: [11, 11],
      popupAnchor: [0, -12]
    }),
    paradaEnd: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%23e11d48",
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

  // --- Métodos de Inicialización ---
  async init() {
    this.initMap();
    this.updateAuthUI();
    this.setupEventListeners();
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
    this.map.on('dragstart zoomstart', () => { this.followUser = false; });

    // 🔵 NUEVO: si el radio depende del zoom, actualiza el círculo de proximidad al terminar zoom
    this.map.on('zoomend', () => {
      if (this.proximityCircle && this.userLocation) {
        this.proximityCircle.setRadius(this.getCurrentNearbyRadiusKm() * 1000);
      }
    });

        // [TRAFFIC INIT] --- capa y refs de UI
    this.traffic.layer = L.layerGroup().addTo(this.map);

    this.traffic.listContainer = document.getElementById('trafficList');
    this.$toggleTrafficBtn = document.getElementById('toggleTrafficBtn');

    // Botón "Ver Alertas de Tráfico"
    this.$toggleTrafficBtn?.addEventListener('click', async () => {
      await this.fetchTrafficAlerts();
      this.renderTraffic();
      this.renderTrafficList();
    });

  }, 

  // --- Lógica de Carga de Datos y Ubicación ---
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
    this.elements.locationBtn.setAttribute('aria-pressed', this.isLocationActive ? 'true' : 'false');
    this.elements.locationBtn.title = this.isLocationActive
      ? 'Dejar de seguir mi ubicación'
      : 'Seguir mi ubicación en tiempo real';

    if (this.isLocationActive) {
      this.followUser = true;     // al activar, centramos en cuanto llegue la 1ª fix
      this.isShowingAll = false;  // modo “rutas cercanas”
      this.startLiveLocation();
    } else {
      this.stopLiveLocation();
      this.isShowingAll = true;   // volver a “todas las rutas”
    }
    this.updateToggleButtonText();
    this.renderRouteList();
  },

  startLiveLocation() {
    if (!navigator.geolocation) {
      alert('La geolocalización no es compatible con tu navegador.');
      this.isLocationActive = false;
      this.elements.locationBtn.classList.remove('active');
      this.elements.locationBtn.setAttribute('aria-pressed', 'false');
      return;
    }
    const opts = { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 };
    // Inicia el seguimiento continuo
    this.watchId = navigator.geolocation.watchPosition(
      (pos) => this._onLocationSuccess(pos),
      (err) => this._onLocationError(err),
      opts
    );
  },

  stopLiveLocation() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
    if (this.userLocationMarker) {
      this.map.removeLayer(this.userLocationMarker);
      this.userLocationMarker = null;
    }
    if (this.accuracyCircle) {
      this.map.removeLayer(this.accuracyCircle);
      this.accuracyCircle = null;
    }
    
    if (this.proximityCircle) {
      this.map.removeLayer(this.proximityCircle);
      this.proximityCircle = null;
    }
    this.userLocation = null;
    this.lastUserLatLng = null;
  },

  _onLocationSuccess(position) {
    const { latitude, longitude, accuracy } = position.coords;
    this.userLocation = { lat: latitude, lon: longitude, accuracy };

    const latlng = [latitude, longitude];

    // Crea/mueve el marcador del usuario
    if (!this.userLocationMarker) {
      this.userLocationMarker = L.marker(latlng, { icon: this.icons.ubicacion })
        .addTo(this.map)
        .bindPopup('<b>¡Estás aquí!</b>');
      this.userLocationMarker.openPopup();
    } else {
      this.userLocationMarker.setLatLng(latlng);
    }

    // Círculo de precisión (GPS)
    
    const radiusMeters = this.getCurrentNearbyRadiusKm() * 1000;
    if (!this.proximityCircle) {
      this.proximityCircle = L.circle(latlng, {
        radius: radiusMeters,
        color: '#1d4ed8',
        weight: 2,
        fillOpacity: 0.08
      }).addTo(this.map);
    } else {
      this.proximityCircle.setLatLng(latlng);
      this.proximityCircle.setRadius(radiusMeters);
    }

    // Seguir al usuario mientras no mueva el mapa
    if (this.followUser) {
      const targetZoom = Math.max(this.map.getZoom() || 13, 16);
      this.map.setView(latlng, targetZoom, { animate: true });
    }


    const nowLL = L.latLng(latlng);
    if (!this.isShowingAll) {
      const shouldRerender = !this.lastUserLatLng || this.lastUserLatLng.distanceTo(nowLL) > 50;
      this.lastUserLatLng = nowLL;
      if (shouldRerender) this.renderRouteList();
    } else {
      this.lastUserLatLng = nowLL;
    }
  },

  _onLocationError(err) {
    console.warn('[RUTABUS] Geolocalización falló:', err);
    const msg = err?.code === 1
      ? 'Permite el acceso a la ubicación para poder mostrarte en el mapa.'
      : 'No se pudo obtener tu ubicación. Inténtalo de nuevo.';
    alert(msg);

    this.isLocationActive = false;
    this.elements.locationBtn.classList.remove('active');
    this.elements.locationBtn.setAttribute('aria-pressed', 'false');
    this.elements.locationBtn.title = 'Seguir mi ubicación en tiempo real';

    this.stopLiveLocation();
    this.isShowingAll = true;
    this.updateToggleButtonText();
    this.renderRouteList();
  },

  // --- Renderizado y Lógica de UI ---
  renderRouteList() {
    const query = this.elements.buscador.value;
    const normalizedQuery = this.normalizeString(query);
    this.elements.rutasLista.innerHTML = '';
    const fragment = document.createDocumentFragment();

    
    const radiusInKm = this.getCurrentNearbyRadiusKm();

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

        // Panel de detalles
        const info = RUTA_INFO[ruta.id];
        const detalle = document.createElement('div');
        detalle.className = 'route-details';
        if (info) {
          detalle.innerHTML = `
            <div class="meta">
              <div><strong>Distancia de la ruta:</strong> ${info.distanciaKm} km</div>
              <div><strong>Tiempo en completarse:</strong> ${info.duracionMin} min</div>
              <div><strong>Hora de Inicio:</strong> ${info.horaInicio} </div>
              <div><strong>Hora de Finalización:</strong> ${info.horaFinal} </div>
              <div>
                <strong>¿Versión "Mujer segura"?:</strong>
                <span class="badge ${info.mujerSegura ? 'bg-success' : 'bg-secondary'}">
                  ${info.mujerSegura ? 'Sí' : 'No'}
                </span>
              </div>
            </div>
            ${info.foto ? `<img src="${info.foto}" alt="Autobús ruta ${ruta.id}">` : ``}
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

  isRouteNearby(ruta, userLoc, radiusKm) {
    if (!ruta.geojson?.features?.[0]?.geometry?.coordinates) return false;
    const coordinates = ruta.geojson.features[0].geometry.coordinates;
    for (const point of coordinates) {
      const actualPoint = Array.isArray(point[0]) ? point[0] : point;
      const pointLoc = { lon: actualPoint[0], lat: actualPoint[1] };
      if (this.getDistanceInKm(userLoc, pointLoc) <= radiusKm) return true;
    }
    return false;
  },

  getDistanceInKm(coords1, coords2) {
    const R = 6371;
    const dLat = (coords2.lat - coords1.lat) * Math.PI / 180;
    const dLon = (coords2.lon - coords1.lon) * Math.PI / 180;
    const a = Math.sin(dLat/2) ** 2 +
      Math.cos(coords1.lat * Math.PI / 180) *
      Math.cos(coords2.lat * Math.PI / 180) *
      Math.sin(dLon/2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  
  getCurrentNearbyRadiusKm() {
    if (this.settings?.nearbyRadiusKm != null) return this.settings.nearbyRadiusKm;

    
    const z = this.map?.getZoom() ?? 15;
    if (z >= 18) return 0.15; // 150 m
    if (z >= 17) return 0.25;
    if (z >= 16) return 0.35;
    if (z >= 15) return 0.6;
    if (z >= 14) return 0.9;
    return 1.2; // zoom lejano
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

      // Guardar latlngs del trazado en orden para cortes de segmento
      let latlngs = this._stitchLatLngsFromLayer(routeLayer, 80);
      if (!latlngs || latlngs.length < 2) {
        latlngs = this._extractLatLngsFromGeoJSON(geoRuta).map(([lat, lng]) => L.latLng(lat, lng));
      } else {
        latlngs = latlngs.map(ll => L.latLng(ll.lat, ll.lng));
      }
      this.activeLayers[rutaId].routeLatLngs = latlngs;

      const bounds = routeLayer.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [20, 20] });
      }
    }

    // Preparar animación estándar (ronda completa) si no hay selección activa
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
          this.bus.start(this.activeRoute, { speed: 250, loop: true, fitBounds: false });
        } else {
          console.warn('[RUTABUS] No se pudo construir latlngs para animar el bus.');
        }
      }, 0);
    } catch (e) {
      console.error('[RUTABUS] Error preparando animación del bus:', e);
    }

    if (geoStops) {
      const stopLayer = L.geoJSON(geoStops, {
        pointToLayer: (feature, latlng) => {
          const m = L.marker(latlng, { icon: this.icons.parada });
          const name = feature?.properties?.name || "Sin nombre";
          m.bindPopup(`<b>Parada:</b> ${name}<br><small>Click: inicio/destino</small>`);
          m.on('click', () => this._handleStopClick(rutaId, m));
          return m;
        }
      }).addTo(this.map);
      this.activeLayers[rutaId].stopLayer = stopLayer;

      // inicializa contenedor de selección para esta ruta
      this.activeLayers[rutaId].selection = { start: null, end: null, segmentLayer: null };
    }

    if (!geoRuta && !geoStops) {
      alert(`No se pudo mostrar la ruta ${rutaId}. Verifica que los archivos existan.`);
      this.removeRoute(rutaId, buttonEl, listItemEl);
    }
  },

  removeRoute(rutaId, buttonEl, listItemEl) {
    const entry = this.activeLayers[rutaId];

    // limpiar selección/segmento si existía
    if (entry?.selection) this._resetSelection(rutaId);

    const layers = this.activeLayers[rutaId];
    if (layers?.routeLayer) this.map.removeLayer(layers.routeLayer);
    if (layers?.stopLayer) this.map.removeLayer(layers.stopLayer);

    buttonEl?.classList.remove("active");
    listItemEl?.classList.remove("active");

    delete this.activeLayers[rutaId];

    // Detener animación si no quedan rutas activas
    if (Object.keys(this.activeLayers).length === 0) {
      if (this.activeRoute) {
        this.bus.stop();
        this.map.removeLayer(this.activeRoute);
        this.activeRoute = null;
      }
    }
  },

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

  // --- Event Listeners ---
  setupEventListeners() {
    this.elements.rutasLista.addEventListener("click", (e) => {
      const btn = e.target.closest(".ruta-btn");
      if (btn) this.toggleRuta(btn);
    });

    this.elements.buscador.addEventListener('input', () => this.renderRouteList());
    this.elements.buscador.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.target.value = '';
        this.renderRouteList();
      }
    });

    this.elements.logoutBtn.addEventListener('click', () => this.logout());

    this.elements.toggleSidebarBtn.addEventListener('click', () => {
      this.elements.sidebar.classList.toggle('collapsed');
      const isCollapsed = this.elements.sidebar.classList.contains('collapsed');
      this.elements.toggleSidebarBtn.textContent = isCollapsed ? '▶️' : '◀️';
      this.elements.toggleSidebarBtn.classList.toggle('collapsed', isCollapsed);
    });

    this.elements.toggleRoutesBtn.addEventListener('click', () => {
      this.isShowingAll = !this.isShowingAll;

      // limpiar selecciones activas cuando se cambia el modo
      Object.keys(this.activeLayers).forEach(rid => this._resetSelection(rid));

      this.updateToggleButtonText();
      this.renderRouteList();
    });

    this.elements.locationBtn.addEventListener('click', () => this.toggleUserLocation());

    this.elements.menuIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = this.elements.adminMenu;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', () => {
      if (this.elements.adminMenu.style.display === 'block') {
        this.elements.adminMenu.style.display = 'none';
      }
    });

    this.elements.addRouteBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/admin.html';
    });
  },

  // --- Funciones de Ayuda (Helpers) ---
  async fetchGeoJSON(url) {
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) return null;
      const data = await res.json();
      return (data && Array.isArray(data.features) && data.features.length > 0) ? data : null;
    } catch (error) {
      return null;
    }
  },

  normalizeString(str) {
    return (str || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  },

  // Une todas las polylines del L.geoJSON en un solo camino continuo.
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
        const dEnd = dist(last, p[p.length - 1]);
        if (dStart < bestD) { bestD = dStart; bestIdx = i; bestRev = false; }
        if (dEnd < bestD) { bestD = dEnd; bestIdx = i; bestRev = true; }
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

  // ---------- Selección de paradas y segmento ----------
  _nearestIndexInPath(latlngs, target) {
    let bestIdx = 0, bestD = Infinity;
    for (let i = 0; i < latlngs.length; i++) {
      const d = latlngs[i].distanceTo(target);
      if (d < bestD) { bestD = d; bestIdx = i; }
    }
    return bestIdx;
  },

  _resetSelection(rutaId) {
    const entry = this.activeLayers[rutaId];
    if (!entry) return;
    const sel = entry.selection;
    if (sel?.segmentLayer) {
      this.map.removeLayer(sel.segmentLayer);
      sel.segmentLayer = null;
    }
    if (sel?.start?.marker) sel.start.marker.setIcon(this.icons.parada);
    if (sel?.end?.marker) sel.end.marker.setIcon(this.icons.parada);
    entry.selection = { start: null, end: null, segmentLayer: null };

    if (this.activeRoute) {
      this.bus.stop();
      this.map.removeLayer(this.activeRoute);
      this.activeRoute = null;
    }
  },

  _updateSegment(rutaId) {
    const entry = this.activeLayers[rutaId];
    if (!entry || !entry.routeLatLngs) return;

    const { start, end } = entry.selection;
    if (!start || !end) return;

    const iA = this._nearestIndexInPath(entry.routeLatLngs, start.latlng);
    const iB = this._nearestIndexInPath(entry.routeLatLngs, end.latlng);
    if (iA === iB) return;

    let segmentLatLngs;
    if (iA < iB) {
      segmentLatLngs = entry.routeLatLngs.slice(iA, iB + 1);
    } else {
      segmentLatLngs = entry.routeLatLngs.slice(iB, iA + 1);
    }

    if (entry.selection.segmentLayer) {
      entry.selection.segmentLayer.setLatLngs(segmentLatLngs);
    } else {
      entry.selection.segmentLayer = L.polyline(segmentLatLngs, {
        color: "#ff9800", weight: 6, opacity: 0.95
      }).addTo(this.map);
    }

    if (this.activeRoute) {
      this.map.removeLayer(this.activeRoute);
      this.activeRoute = null;
    }
    this.bus.stop();
    this.activeRoute = L.polyline(segmentLatLngs, { opacity: 0, weight: 0 }).addTo(this.map);
    this.bus.start(this.activeRoute, { speed: 250, loop: true, fitBounds: true });
  },

  _handleStopClick(rutaId, marker) {
    const entry = this.activeLayers[rutaId];
    if (!entry) return;

    if (!entry.selection) entry.selection = { start: null, end: null, segmentLayer: null };

    const latlng = marker.getLatLng();
    const wasStart = entry.selection.start?.marker === marker;

    if (!entry.selection.start) {
      entry.selection.start = { marker, latlng };
      marker.setIcon(this.icons.paradaStart);
      marker.bindPopup("<b>Inicio</b>").openPopup();
    } else if (!entry.selection.end && !wasStart) {
      entry.selection.end = { marker, latlng };
      marker.setIcon(this.icons.paradaEnd);
      marker.bindPopup("<b>Destino</b>").openPopup();
      this._updateSegment(rutaId);
    } else {
      // Reiniciar y establecer este clic como nuevo inicio
      this._resetSelection(rutaId);
      const againEntry = this.activeLayers[rutaId];
      againEntry.selection.start = { marker, latlng };
      marker.setIcon(this.icons.paradaStart);
      marker.bindPopup("<b>Inicio</b>").openPopup();
    }
  },

  // ---------- Animación de bus ----------
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
    /**
     * Inicia la animación
     * @param {L.Polyline} polyline
     * @param {Object} opts
     * @param {number} [opts.speed=8] metros/segundo aproximado
     * @param {boolean} [opts.loop=true]
     * @param {boolean} [opts.fitBounds=false]
     */
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

      this.marker = L.marker(latlngs[0], { icon: App.icons.bus, zIndexOffset: 1000 }).addTo(polyline._map);

      const tTotal = (totalDist / speed) * 1000;
      let t0 = null;

      const step = (ts) => {
        if (!t0) t0 = ts;
        let elapsed = ts - t0;
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
  },

    //Funcion de trafico
    traffic: {
    layer: null,           // L.LayerGroup
    alerts: [],            // array del JSON
    listContainer: null    // <ul> en sidebar para listar
  },

  // === ALERTAS DE TRÁFICO ===
async fetchTrafficAlerts() {
  try {
    const res = await fetch('./data/traffic/alerts.json', { cache: 'no-store' });
    const all = await res.json();
    const now = Date.now();
    this.traffic.alerts = all.filter(a => {
      const exp = a.expira ? Date.parse(a.expira) : now + 3600000;
      return (a.estado === 'aprobada') && (exp > now);
    });
  } catch (e) {
    console.error('Error cargando alerts.json', e);
    this.traffic.alerts = [];
  }
},

renderTraffic() {
  if (!this.traffic.layer) return;
  this.traffic.layer.clearLayers();

  this.traffic.alerts.forEach(a => {
    const sev = Number(a.severidad) || 1;
    const color = sev >= 5 ? '#dc2626' : sev >= 3 ? '#f59e0b' : '#22c55e';

    // Punto
    if (a.coord) {
      const m = L.circleMarker([a.coord.lat, a.coord.lng], {
        radius: 8,
        weight: 2,
        color: '#111',
        fillColor: color,
        fillOpacity: 0.85
      }).bindPopup(`
        <strong>${(a.tipo || 'Incidente').toUpperCase()}</strong>
        <div>${a.descripcion || ''}</div>
        <div>Severidad: ${sev}${a.rutaId ? ` · Ruta ${a.rutaId}` : ''}</div>
      `);
      m.addTo(this.traffic.layer);

      if (a.radio && a.radio > 0) {
        L.circle([a.coord.lat, a.coord.lng], {
          radius: a.radio,
          color,
          weight: 2,
          dashArray: '4 4',
          fillOpacity: 0.08
        }).addTo(this.traffic.layer);
      }
    }

    // Tramo opcional
    if (a.rutaId && a.segment && a.segment.fromStop && a.segment.toStop) {
      this._renderTrafficSegment(a).catch(err =>
        console.warn('No se pudo pintar segmento', a.id, err)
      );
    }
  });
},

renderTrafficList() {
  const ul = this.traffic.listContainer;
  if (!ul) return;
  ul.innerHTML = '';

  const pos = this.user?.coords || null;

  const items = this.traffic.alerts
    .map(a => {
      let distKm = null;
      if (pos && a.coord) {
        const p1 = L.latLng(pos.lat, pos.lng);
        const p2 = L.latLng(a.coord.lat, a.coord.lng);
        distKm = p1.distanceTo(p2) / 1000;
      }
      return { a, distKm };
    })
    .sort((x, y) => {
      if (x.distKm == null && y.distKm == null) return 0;
      if (x.distKm == null) return 1;
      if (y.distKm == null) return -1;
      return x.distKm - y.distKm;
    });

  items.forEach(({ a, distKm }) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-start';

    const sev = Number(a.severidad) || 1;
    const chip = `<span class="badge rounded-pill ${sev>=5?'bg-danger':sev>=3?'bg-warning text-dark':'bg-success'}">S${sev}</span>`;
    const ruta = a.rutaId ? `<span class="badge bg-dark ms-1">Ruta ${a.rutaId}</span>` : '';
    const distTxt = distKm != null ? `${distKm.toFixed(2)} km` : '';

    li.innerHTML = `
      <div class="me-auto">
        <div class="fw-semibold text-uppercase">${a.tipo || 'Incidente'} ${chip} ${ruta}</div>
        <small>${a.descripcion || ''}</small>
      </div>
      <button class="btn btn-sm btn-outline-secondary">Centrar</button>
      <div class="ms-2 text-nowrap"><small>${distTxt}</small></div>
    `;

    li.querySelector('button').addEventListener('click', () => {
      if (a.coord) {
        this.map.setView([a.coord.lat, a.coord.lng], Math.max(this.map.getZoom(), 15));
      }
    });

    ul.appendChild(li);
  });

  if (!items.length) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = 'Sin alertas vigentes.';
    ul.appendChild(li);
  }
},

  // Opcional: pintar tramo afectado si tienes stops/latlngs por ruta
  async _renderTrafficSegment(alerta) {
    let latlngs = this.routeLatLngs?.[alerta.rutaId];
    if (!latlngs) {
      const geo = await this.fetchGeoJSON(`./data/${alerta.rutaId}/route.json`);
      latlngs = this._extractLatLngsFromGeoJSON(geo);
    }

    const stops = this.routeStops?.[alerta.rutaId];
    if (!stops || !latlngs) return;

    const iA = stops.findIndex(s => String(s.id) === String(alerta.segment.fromStop));
    const iB = stops.findIndex(s => String(s.id) === String(alerta.segment.toStop));
    if (iA < 0 || iB < 0) return;

    const start = Math.min(iA, iB);
    const end   = Math.max(iA, iB);
    const segLatLngs = latlngs.slice(start, end + 1);

    L.polyline(segLatLngs, { color: '#e11d48', weight: 6, opacity: 0.9 })
      .addTo(this.traffic.layer);
  },

};

document.addEventListener('DOMContentLoaded', () => App.init());
