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
    "036": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 20, duracionMin: 70, mujerSegura: false, foto: "./data/035/035.png" },
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
    "057": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 8.85, duracionMin: 35, mujerSegura: true, foto: "./data/056/057.png" },
    "058": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 17, duracionMin: 60, mujerSegura: false, foto: "./data/058/058.png" },
    "059": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 46, mujerSegura: false, foto: "./data/059/059.png" },
    "060": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7.09, duracionMin: 25, mujerSegura: false, foto: "./data/060/060.png" },
    "061": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.59, duracionMin: 20, mujerSegura: true, foto: "./data/060/060.png" },
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
    "080": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 48, mujerSegura: false, foto: "./data/080/080.png" },
    "081": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.21, duracionMin: 37, mujerSegura: true, foto: "./data/081/081.png" },
    "082": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 15, duracionMin: 60, mujerSegura: false, foto: "./data/082/082.png" },
    "083": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 18, duracionMin: 72, mujerSegura: true, foto: "./data/083/083.png" },
    "084": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 16, duracionMin: 64, mujerSegura: false, foto: "./data/084/084.png" },
    "085": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 40, mujerSegura: true, foto: "./data/085/085.png" },
    "086": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/086/086.png" },
    "087": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: false, foto: "./data/087/087.png" },
    "088": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 5, duracionMin: 20, mujerSegura: false, foto: "./data/088/088.png" },
    "089": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 5, duracionMin: 20, mujerSegura: true, foto: "./data/089/089.png" },
    "090": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: false, foto: "./data/088/088.png" },
    "091": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: false, foto: "./data/091/091.png" },
    "092": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 3.72, duracionMin: 15, mujerSegura: false, foto: "./data/092/092.png" },
    "093": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13.9, duracionMin: 51, mujerSegura: true, foto: "./data/091/091.png" },
    "094": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 4.13, duracionMin: 17, mujerSegura: false, foto: "./data/091/091.png" },
    "095": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9.27, duracionMin: 41, mujerSegura: true, foto: "./data/095/095.png" },
    "096": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 8.56, duracionMin: 33, mujerSegura: false, foto: "./data/096/096.png" },
    "097": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 44, mujerSegura: false, foto: "./data/097/097.png" },
    "098": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 3.54, duracionMin: 14, mujerSegura: false, foto: "./data/098/098.png" },
    "099": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 9, duracionMin: 36, mujerSegura: false, foto: "./data/099/099.png" },
    "100": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 76, mujerSegura: true, foto: "./data/100/100.png" },
    "101": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 48, mujerSegura: false, foto: "./data/101/101.png" },
    "102": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 11, duracionMin: 44, mujerSegura: true, foto: "./data/102/102.png" },
    "103": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 10, duracionMin: 40, mujerSegura: false, foto: "./data/103/103.png" },
    "104": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 26, duracionMin: 104, mujerSegura: true, foto: "./data/104/104.png" },
    "105": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 7, duracionMin: 28, mujerSegura: false, foto: "./data/105/105.png" },
    "106": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6, duracionMin: 24, mujerSegura: true, foto: "./data/106/106.png" },
    "107": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/107/107.png" },
    "108": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 4, duracionMin: 16, mujerSegura: false, foto: "./data/108/108.png" },
    "109": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 14, duracionMin: 56, mujerSegura: false, foto: "./data/109/109.png" },
    "110": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/110/110.png" },
    "111": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 12, duracionMin: 48, mujerSegura: true, foto: "./data/111/111.png" },
    "112": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.59, duracionMin: 28, mujerSegura: false, foto: "./data/111/111.png" },
    "113": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 6.44, duracionMin: 28, mujerSegura: false, foto: "./data/113/113.png" },
    "114": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 28, duracionMin: 112, mujerSegura: false, foto: "./data/114/114.png" },
    "115": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 19, duracionMin: 76, mujerSegura: true, foto: "./data/115/115.png" },
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
    "126": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 24, duracionMin: 96, mujerSegura: true, foto: "./data/126/126.png" },
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
    "138": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 20, duracionMin: 80, mujerSegura: true, foto: "./data/138/138.png" },
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
    "150": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 25, duracionMin: 100, mujerSegura: true, foto: "./data/148/148.png" },
    "151": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 13, duracionMin: 52, mujerSegura: false, foto: "./data/151/151.png" },
    "152": { horaInicio: "5:30", horaFinal: "21:45", distanciaKm: 27, duracionMin: 108, mujerSegura: false, foto: "./data/152/152.png" },
};



// RUTABUS - app.js (Parte 1)
// Correcciones clave: llaves y comas correctas, sin duplicados fuera de App, renderTraffic() arreglado.
// Cada función incluye una nota breve de lo que hace.

const App = {
  // --- Propiedades y Estado ---
  // Nota: variables principales del estado de la app (mapa, capas activas, ubicación de usuario, etc.)
  map: null,
  activeLayers: {},
  userLocation: null,
  isShowingAll: true,
  isLocationActive: false,
  routeData: [],
  userLocationMarker: null,
  activeRoute: null,
  selectionDefaults: { start: null, end: null, segmentLayer: null },
  dbRoutes: [],
  watchId: null,
  accuracyCircle: null,
  followUser: true,
  lastUserLatLng: null,
  routePathCache: {},
  settings: {
    nearbyRadiusKm: 0.3,
    showAccuracyCircle: false
  },
  proximityCircle: null,

  // --- CORRECCIÓN: elementos del DOM inicializados vacíos y luego vinculados en bindElements() ---
  elements: {},

  // --- Íconos ---
  // Nota: define los íconos usados por Leaflet (paradas, ubicación, bus, etc.)
  icons: {
    parada: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%230d6efd",
      iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -12]
    }),
    paradaStart: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%2300a65a",
      iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -12]
    }),
    paradaEnd: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus-stop.svg?color=%23e11d48",
      iconSize: [22, 22], iconAnchor: [11, 11], popupAnchor: [0, -12]
    }),
    ubicacion: L.icon({
      iconUrl: 'https://api.iconify.design/material-symbols/my-location.svg?color=%230d6efd',
      iconSize: [32, 32], iconAnchor: [16, 16]
    }),
    bus: L.icon({
      iconUrl: "https://api.iconify.design/mdi/bus.svg?color=%23000000",
      iconSize: [32, 32], iconAnchor: [16, 16]
    }),
  },

  // --- Vinculación de elementos del DOM ---
  // Nota: busca y guarda referencias a los elementos HTML que la app usa.
  bindElements() {
    this.elements = {
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
      adminPanelBtn: document.getElementById('admin-panel-btn'),
      guestLegend: document.getElementById('guest-legend'),
      reportTrafficBtn: document.getElementById('reportTrafficBtn'),
      toggleTrafficBtn: document.getElementById('toggleTrafficBtn'),
      // Opcionales: si existen en el HTML, quedarán disponibles; si no, no truenan por el uso de ?.
      menuIcon: document.getElementById('menuIcon'),
      adminMenu: document.getElementById('adminMenu'),
      addRouteBtn: document.getElementById('addRouteBtn'),
      trafficList: document.getElementById('trafficList'),
    };
  },

  // --- Inicialización ---
  // Nota: prepara la app; crea el mapa, vincula UI, descarga datos de rutas y habilita botones.
  async init() {
    this.bindElements(); // primero vinculamos el DOM
    this.initMap();
    this.updateAuthUI();
    this.setupEventListeners();
    await this.fetchAllRouteData();
    this.renderRouteList();
    // Habilita el botón tras cargar
    if (this.elements.toggleRoutesBtn) {
      this.elements.toggleRoutesBtn.disabled = false;
      this.updateToggleButtonText();
    }
  },

  // --- Crear mapa y capa de tráfico ---
  // Nota: crea el mapa, define listeners de zoom/drag, y prepara contenedores de tráfico.
  initMap() {
    this.map = L.map("map").setView([19.5438, -96.9103], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(this.map);

    this.map.on('dragstart zoomstart', () => { this.followUser = false; });
    this.map.on('zoomend', () => {
      if (this.proximityCircle && this.userLocation) {
        this.proximityCircle.setRadius(this.getCurrentNearbyRadiusKm() * 1000);
      }
    });

    // Capa y lista de tráfico
    this.traffic.layer = L.layerGroup().addTo(this.map);
    this.traffic.listContainer = this.elements.trafficList;

    // Botón para ver alertas de tráfico
    this.elements.toggleTrafficBtn?.addEventListener('click', async () => {
      if (!this.isAuthenticated()) return this._nudgeGuest('Ver alertas de tráfico');
      await this.fetchTrafficAlerts();
      this.renderTraffic();
      this.renderTrafficList();
    });
  },

  // --- Carga de datos (local + BD) ---
  // Nota: descarga y combina rutas locales (carpeta /data) y rutas desde la API /api/rutas.
  async fetchAllRouteData() {
    if (this.elements.toggleRoutesBtn) {
      this.elements.toggleRoutesBtn.textContent = 'Cargando datos de rutas...';
    }

    // 1) Rutas locales según tu arreglo RUTAS
    const localPromises = (RUTAS || []).map(rutaInfo =>
      this.fetchGeoJSON(`./data/${rutaInfo.id}/route.json`)
        .then(geojson => ({ ...rutaInfo, geojson, local: true }))
    );

    // 2) Rutas desde la base de datos
    let dbRoutesPromise = fetch('/api/rutas')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.rutas) {
          return data.rutas.map(ruta => ({
            id: ruta.id,
            stop: ruta.stop,
            name: ruta.nombre,
            geojson: ruta.ruta,
            dbParadas: ruta.paradas,
            local: false
          }));
        }
        return [];
      })
      .catch(error => {
        console.error('Error al cargar rutas de la base de datos:', error);
        return [];
      });

    // 3) Combinar
    const [localRoutes, dbRoutes] = await Promise.all([
      Promise.all(localPromises),
      dbRoutesPromise
    ]);

    this.routeData = [...localRoutes, ...dbRoutes].sort((a, b) => a.id.localeCompare(b.id));

    if (this.elements.toggleRoutesBtn) {
      this.updateToggleButtonText();
    }
  },

  // --- Obtener ubicación actual (una sola vez) ---
  // Nota: pide geolocalización una sola vez; coloca un marcador y centra el mapa.
  getUserLocation() {
    if (!this.isAuthenticated()) { this._nudgeGuest('Mi ubicación'); return Promise.reject(); }
    const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        alert("La geolocalización no es compatible con tu navegador.");
        return reject(new Error("Geolocation not supported"));
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

  // --- Seguir ubicación en vivo ---
  // Nota: alterna entre seguir/no seguir la ubicación en tiempo real (watchPosition/clearWatch).
  async toggleUserLocation() {
    if (!this.isAuthenticated()) return this._nudgeGuest('Mi ubicación');
    this.isLocationActive = !this.isLocationActive;
    this.elements.locationBtn?.classList.toggle('active', this.isLocationActive);
    this.elements.locationBtn?.setAttribute('aria-pressed', this.isLocationActive ? 'true' : 'false');
    if (this.elements.locationBtn) {
      this.elements.locationBtn.title = this.isLocationActive ?
        'Dejar de seguir mi ubicación' :
        'Seguir mi ubicación en tiempo real';
    }

    if (this.isLocationActive) {
      this.followUser = true;
      this.isShowingAll = false;
      this.startLiveLocation();
    } else {
      this.stopLiveLocation();
      this.isShowingAll = true;
    }
    this.updateToggleButtonText();
    this.renderRouteList();
  },

  // --- Iniciar seguimiento en vivo ---
  // Nota: usa watchPosition para actualizar círculo/marker y re-render de rutas cercanas.
  startLiveLocation() {
    if (!navigator.geolocation) {
      alert('La geolocalización no es compatible con tu navegador.');
      this.isLocationActive = false;
      this.elements.locationBtn?.classList.remove('active');
      this.elements.locationBtn?.setAttribute('aria-pressed', 'false');
      return;
    }
    const opts = { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 };
    this.watchId = navigator.geolocation.watchPosition(
      (pos) => this._onLocationSuccess(pos),
      (err) => this._onLocationError(err),
      opts
    );
  },

  // --- Detener seguimiento en vivo ---
  // Nota: limpia watchPosition, marcador, círculos y estado relacionados a la ubicación.
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

  // --- Callback de ubicación exitosa ---
  // Nota: actualiza marcador, círculo de proximidad y centra el mapa si followUser está activo.
  _onLocationSuccess(position) {
    const { latitude, longitude, accuracy } = position.coords;
    this.userLocation = { lat: latitude, lon: longitude, accuracy };
    const latlng = [latitude, longitude];

    if (!this.userLocationMarker) {
      this.userLocationMarker = L.marker(latlng, { icon: this.icons.ubicacion })
        .addTo(this.map)
        .bindPopup('<b>¡Estás aquí!</b>');
      this.userLocationMarker.openPopup();
    } else {
      this.userLocationMarker.setLatLng(latlng);
    }

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

  // --- Callback de error de ubicación ---
  // Nota: informa el error, apaga seguimiento y restaura UI.
  _onLocationError(err) {
    console.warn('[RUTABUS] Geolocalización falló:', err);
    const msg = err?.code === 1 ?
      'Permite el acceso a la ubicación para poder mostrarte en el mapa.' :
      'No se pudo obtener tu ubicación. Inténtalo de nuevo.';
    alert(msg);
    this.isLocationActive = false;
    this.elements.locationBtn?.classList.remove('active');
    this.elements.locationBtn?.setAttribute('aria-pressed', 'false');
    if (this.elements.locationBtn) this.elements.locationBtn.title = 'Seguir mi ubicación en tiempo real';
    this.stopLiveLocation();
    this.isShowingAll = true;
    this.updateToggleButtonText();
    this.renderRouteList();
  },

  // --- Render de lista de rutas ---
  // Nota: filtra por búsqueda y/o cercanía y pinta la lista de rutas interactiva.
  renderRouteList() {
    const query = this.elements.buscador?.value || '';
    const normalizedQuery = this.normalizeString(query);
    if (this.elements.rutasLista) this.elements.rutasLista.innerHTML = '';

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

    if (!routesToShow.length) {
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

        const info = (typeof RUTA_INFO !== 'undefined') ? RUTA_INFO[ruta.id] : null;
        const detalle = document.createElement('div');
        detalle.className = 'route-details';

        if (info) {
          detalle.innerHTML = `
            <div class="meta">
              <div><strong>Distancia:</strong> ${info.distanciaKm} km</div>
              <div><strong>Duración:</strong> ${info.duracionMin} min</div>
              <div><strong>Inicio:</strong> ${info.horaInicio}</div>
              <div><strong>Fin:</strong> ${info.horaFinal}</div>
              <div>
                <strong>Mujer Segura:</strong>
                <span class="badge ${info.mujerSegura ? 'bg-success' : 'bg-secondary'}">
                  ${info.mujerSegura ? 'Sí' : 'No'}
                </span>
              </div>
            </div>
            ${info.foto ? `<img src="${info.foto}" alt="Autobús ruta ${ruta.id}">` : ''}
          `;
        } else {
          detalle.innerHTML = `<div class="meta"><div class="text-muted">Información no disponible.</div></div>`;
        }

        li.appendChild(button);
        li.appendChild(detalle);
        fragment.appendChild(li);
      }
    }

    this.elements.rutasLista?.appendChild(fragment);
  },

  // --- Texto del botón alternar cercanas/todas ---
  // Nota: ajusta el texto del botón según el estado de filtros (cercanas vs todas).
  updateToggleButtonText() {
    if (!this.elements.toggleRoutesBtn) return;
    if (!navigator.geolocation) {
      this.elements.toggleRoutesBtn.textContent = 'Ubicación no disponible';
      this.elements.toggleRoutesBtn.disabled = true;
      return;
    }
    this.elements.toggleRoutesBtn.textContent = this.isShowingAll ?
      'Mostrar Solo Rutas Cercanas' :
      'Mostrar Todas las Rutas';
  },

    // --- ¿Ruta cercana a mi ubicación? ---
  // Nota: revisa si algún punto del GeoJSON cae dentro del radio cercano actual.
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

  // --- Haversine simplificado ---
  // Nota: calcula distancia aproximada en km entre dos coordenadas (lat/lon).
  getDistanceInKm(coords1, coords2) {
    const R = 6371;
    const dLat = (coords2.lat - coords1.lat) * Math.PI / 180;
    const dLon = (coords2.lon - coords1.lon) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos(coords1.lat * Math.PI / 180) *
      Math.cos(coords2.lat * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  },

  // --- Radio dinámico por zoom ---
  // Nota: convierte zoom en un radio en km para filtrar rutas cercanas.
  getCurrentNearbyRadiusKm() {
    if (this.settings?.nearbyRadiusKm != null) return this.settings.nearbyRadiusKm;
    const z = this.map?.getZoom() ?? 15;
    if (z >= 18) return 0.15;
    if (z >= 17) return 0.25;
    if (z >= 16) return 0.35;
    if (z >= 15) return 0.6;
    if (z >= 14) return 0.9;
    return 1.2;
  },

  // --- Alternar una ruta (on/off) ---
  // Nota: si ya está activa, la quita; si no, la carga (línea, paradas y animación).
  async toggleRuta(buttonEl) {
    const rutaId = buttonEl.dataset.ruta;
    const listItemEl = buttonEl.closest('.list-group-item');
    if (this.activeLayers[rutaId]) {
      this.removeRoute(rutaId, buttonEl, listItemEl);
    } else {
      const stopId = buttonEl.dataset.stop;
      await this.addRoute(rutaId, stopId, buttonEl, listItemEl);
    }
  },

  // --- Agregar ruta al mapa ---
  // Nota: dibuja la polyline de la ruta, carga paradas, calcula trayecto y arranca animación del "carrito".
  async addRoute(rutaId, stopId, buttonEl, listItemEl) {
    buttonEl?.classList.add('active');
    listItemEl?.classList.add('active');
    this.activeLayers[rutaId] = {};

    const ruta = this.routeData.find(r => r.id === rutaId);
    if (!ruta) {
      console.error(`No se encontraron datos para la ruta ${rutaId}`);
      this.removeRoute(rutaId, buttonEl, listItemEl);
      return;
    }

    const geoRuta = ruta.geojson;
    let geoStops = null;

    // Si la ruta es local, pedimos stops por archivo; si es de BD, ya vienen en el objeto.
    if (ruta.local) {
      const stopsUrl = `./data/${rutaId}/route_${stopId}_stops.geojson`;
      geoStops = await this.fetchGeoJSON(stopsUrl);
    } else {
      geoStops = {
        type: "FeatureCollection",
        features: ruta.dbParadas || []
      };
    }

    // Dibuja la polyline de la ruta
    if (geoRuta) {
      const routeLayer = L.geoJSON(geoRuta, { style: { color: "green", weight: 4 } }).addTo(this.map);
      this.activeLayers[rutaId].routeLayer = routeLayer;

      // Calcula puntos muestreados para animación fluida
      let latlngs = this.routePathCache[rutaId];
      if (!latlngs) {
        latlngs = this._buildCoverageLoopFromGeoJSON(geoRuta, {
          connectThreshold: 25,
          resampleEvery: 8
        });
        this.routePathCache[rutaId] = latlngs;
      }
      this.activeLayers[rutaId].routeLatLngs = latlngs;

      // Ajusta el mapa a la ruta
      const bounds = L.latLngBounds(latlngs);
      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [20, 20] });
      }
    }

    // Inicia animación del bus sobre la ruta base (invisible, solo para path)
    const baseLatLngs = this.activeLayers[rutaId]?.routeLatLngs;
    if (baseLatLngs && baseLatLngs.length >= 2) {
      if (this.activeRoute) {
        this.bus.stop();
        this.map.removeLayer(this.activeRoute);
        this.activeRoute = null;
      }
      this.activeRoute = L.polyline(baseLatLngs, { opacity: 0, weight: 0 }).addTo(this.map);
      // Nota simple: esta función hace que funcione la animación del carrito recorriendo la ruta.
      this.bus.start(this.activeRoute, { speed: 5000, loop: true, fitBounds: false });
    } else {
      console.warn('[RUTABUS] No se pudo construir latlngs para animar el bus.');
    }

    // Dibuja paradas
    if (geoStops && geoStops.features?.length > 0) {
      const stopLayer = L.geoJSON(geoStops, {
        // Nota simple: cada parada se pinta como un marcador y se puede seleccionar para inicio/destino.
        pointToLayer: (feature, latlng) => {
          const m = L.marker(latlng, { icon: this.icons.parada });
          const name = feature?.properties?.name || "Sin nombre";
          if (this.isAuthenticated()) {
            m.bindPopup(`<b>Parada:</b> ${name}<br><small>Click: inicio/destino</small>`);
            m.on('click', () => this._handleStopClick(rutaId, m));
          } else {
            m.bindPopup(`<b>Parada:</b> ${name}<br><small>Inicia sesión para marcar inicio/destino</small>`);
            m.on('click', () => this._nudgeGuest('Seleccionar inicio/destino'));
          }
          return m;
        }
      }).addTo(this.map);
      this.activeLayers[rutaId].stopLayer = stopLayer;
      this.activeLayers[rutaId].selection = { start: null, end: null, segmentLayer: null };
    }

    // Si no hubo datos válidos, revierte
    if (!geoRuta && (!geoStops || !geoStops.features?.length)) {
      alert(`No se pudo mostrar la ruta ${rutaId}. Los datos parecen estar incompletos.`);
      this.removeRoute(rutaId, buttonEl, listItemEl);
    }
  },

  // --- Quitar ruta del mapa ---
  // Nota: elimina polyline, paradas y detiene la animación si ya no quedan rutas activas.
  removeRoute(rutaId, buttonEl, listItemEl) {
    const entry = this.activeLayers[rutaId];
    if (entry?.selection) this._resetSelection(rutaId);

    const layers = this.activeLayers[rutaId];
    if (layers?.routeLayer) this.map.removeLayer(layers.routeLayer);
    if (layers?.stopLayer) this.map.removeLayer(layers.stopLayer);

    buttonEl?.classList.remove("active");
    listItemEl?.classList.remove("active");

    delete this.activeLayers[rutaId];

    if (Object.keys(this.activeLayers).length === 0) {
      if (this.activeRoute) {
        this.bus.stop();
        this.map.removeLayer(this.activeRoute);
        this.activeRoute = null;
      }
    }
  },

  // --- Actualiza UI según autenticación ---
  // Nota: muestra/oculta botones para invitados/usuarios y habilita/deshabilita acciones.
  updateAuthUI() {
    const userString = localStorage.getItem('rutabus_user');
    const authed = !!userString;

    const restricteds = [
      this.elements.buscador,
      this.elements.toggleRoutesBtn,
      this.elements.locationBtn,
      this.elements.reportTrafficBtn,
      this.elements.toggleTrafficBtn
    ].filter(Boolean);

    if (authed) {
      this.elements.guestButtons && (this.elements.guestButtons.style.display = 'none');
      this.elements.userButtons && (this.elements.userButtons.style.display = 'flex');
      this.elements.guestLegend && (this.elements.guestLegend.style.display = 'none');

      restricteds.forEach(el => {
        el.disabled = false;
        el.classList.remove('requires-auth');
      });

      const userData = JSON.parse(userString);
      if (userData.rol === 'administrador') {
        if (this.elements.userDisplayName) this.elements.userDisplayName.textContent = 'Administrador';
        if (this.elements.menuIcon?.style) this.elements.menuIcon.style.display = 'block';
      } else {
        const firstName = (userData.nombre || '').split(' ')[0] || 'Usuario';
        if (this.elements.userDisplayName) this.elements.userDisplayName.textContent = firstName;
        if (this.elements.menuIcon?.style) this.elements.menuIcon.style.display = 'none';
      }
    } else {
      this.elements.guestButtons && (this.elements.guestButtons.style.display = 'flex');
      this.elements.userButtons && (this.elements.userButtons.style.display = 'none');
      if (this.elements.userDisplayName) this.elements.userDisplayName.textContent = 'Invitado';
      if (this.elements.menuIcon?.style) this.elements.menuIcon.style.display = 'none';

      restricteds.forEach(el => {
        el.disabled = true;
        if (!el.classList.contains('requires-auth')) el.classList.add('requires-auth');
      });

      if (this.elements.buscador) {
        this.elements.buscador.value = '';
        this.elements.buscador.placeholder = 'Buscar ruta (requiere iniciar sesión)';
      }
      this.elements.guestLegend && (this.elements.guestLegend.style.display = 'block');
    }
  },

  // --- Cerrar sesión ---
  // Nota: limpia localStorage y recarga la página para reiniciar el estado.
  logout() {
    localStorage.removeItem('rutabus_user');
    window.location.reload();
  },

  // --- Listeners de UI ---
  // Nota: conecta eventos de clic, input, teclado y navegación del panel/admin.
  setupEventListeners() {
    // Lista de rutas (toggle de cada ruta)
    this.elements.rutasLista?.addEventListener("click", (e) => {
      const btn = e.target.closest(".ruta-btn");
      if (btn) this.toggleRuta(btn);
    });

    // Buscador (bloquea si no hay sesión)
    this.elements.buscador?.addEventListener('focus', () => {
      if (!this.isAuthenticated()) {
        this._nudgeGuest('Buscar rutas');
        this.elements.buscador.blur();
      }
    });
    this.elements.buscador?.addEventListener('input', () => {
      if (!this.isAuthenticated()) return;
      this.renderRouteList();
    });
    this.elements.buscador?.addEventListener('keydown', (e) => {
      if (!this.isAuthenticated()) return e.preventDefault();
      if (e.key === 'Escape') {
        e.target.value = '';
        this.renderRouteList();
      }
    });

    // Logout
    this.elements.logoutBtn?.addEventListener('click', () => this.logout());

    // Sidebar
    this.elements.toggleSidebarBtn?.addEventListener('click', () => {
      this.elements.sidebar?.classList.toggle('collapsed');
      const isCollapsed = this.elements.sidebar?.classList.contains('collapsed');
      if (this.elements.toggleSidebarBtn) {
        this.elements.toggleSidebarBtn.textContent = isCollapsed ? '▶️' : '◀️';
        this.elements.toggleSidebarBtn.classList.toggle('collapsed', !!isCollapsed);
      }
    });

    // Alternar cercanas/todas
    this.elements.toggleRoutesBtn?.addEventListener('click', () => {
      if (!this.isAuthenticated()) return this._nudgeGuest('Rutas cercanas');
      this.isShowingAll = !this.isShowingAll;
      Object.keys(this.activeLayers).forEach(rid => this._resetSelection(rid));
      this.updateToggleButtonText();
      this.renderRouteList();
    });

    // Ubicación en vivo
    this.elements.locationBtn?.addEventListener('click', () => {
      if (!this.isAuthenticated()) return this._nudgeGuest('Mi ubicación');
      this.toggleUserLocation();
    });

    // Icono/menú admin
    this.elements.menuIcon?.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = this.elements.adminMenu;
      if (!menu) return;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    window.addEventListener('click', () => {
      if (this.elements.adminMenu?.style.display === 'block') {
        this.elements.adminMenu.style.display = 'none';
      }
    });

    // Ir al panel admin (si existe)
    this.elements.addRouteBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/admin.html';
    });

    // Reporte de tráfico
    this.elements.reportTrafficBtn?.addEventListener('click', () => {
      if (!this.isAuthenticated()) return this._nudgeGuest('Reportar tráfico');
      // Nota simple: abre (o abriría) el modal para reportar tráfico.
      alert('Aquí abrirías tu modal/form para reportar tráfico (solo usuarios).');
    });
  },

    // --- Helper: fetchGeoJSON con tolerancia a fallos ---
  // Nota: trae un GeoJSON por URL y devuelve null si está vacío o falla.
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

  // --- Helper: normalizar texto ---
  // Nota: quita acentos y pasa a minúsculas para búsquedas más amigables.
  normalizeString(str) {
    return (str || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  },

  // --- Helper: ¿hay sesión iniciada? ---
  // Nota: valida si existe un objeto de usuario en localStorage.
  isAuthenticated() {
    try {
      const u = JSON.parse(localStorage.getItem('rutabus_user') || 'null');
      return !!u;
    } catch { return false; }
  },

  // --- Helper: ¿es administrador? ---
  // Nota: revisa el rol del usuario guardado en localStorage.
  isAdmin() {
    try {
      const u = JSON.parse(localStorage.getItem('rutabus_user') || 'null');
      return u?.rol === 'administrador';
    } catch { return false; }
  },

  // ==================== GEOMETRÍA (trayectos y muestreo) ====================

  // --- Construir recorrido continuo desde GeoJSON ---
  // Nota: une segmentos cercanos y re-muestrea puntos para una animación fluida.
  _buildCoverageLoopFromGeoJSON(geojson, { connectThreshold = 25, resampleEvery = 8 } = {}) {
    const pieces = this._extractPieces(geojson);
    if (pieces.length === 0) return [];

    const main = this._connectPieces(pieces.slice(), connectThreshold);

    // Copia restante para revisar anexos no conectados “cercanos”
    const remaining = [];
    for (const p of pieces) remaining.push(p);

    const closeTo = (a, b, thr) => a.distanceTo(b) <= thr;
    const endpoints = (arr) => [arr[0], arr[arr.length - 1]];
    const thr = connectThreshold;
    const unattached = [];

    for (const seg of remaining) {
      const [s, e] = endpoints(seg);
      const [ms, me] = endpoints(main);
      const nearMain =
        closeTo(s, ms, thr) || closeTo(s, me, thr) ||
        closeTo(e, ms, thr) || closeTo(e, me, thr);
      if (!nearMain) unattached.push(seg.slice());
    }

    let tour = main.slice();
    const tourEnds = () => [tour[0], tour[tour.length - 1]];

    while (unattached.length) {
      let bestIdx = -1, bestRev = false, bestToEnd = true, bestD = Infinity;
      const [tStart, tEnd] = tourEnds();

      for (let i = 0; i < unattached.length; i++) {
        const seg = unattached[i];
        const s = seg[0], e = seg[seg.length - 1];
        const d1 = tEnd.distanceTo(s);
        const d2 = tEnd.distanceTo(e);
        const d3 = tStart.distanceTo(e);
        const d4 = tStart.distanceTo(s);
        if (d1 < bestD) { bestD = d1; bestIdx = i; bestRev = false; bestToEnd = true; }
        if (d2 < bestD) { bestD = d2; bestIdx = i; bestRev = true;  bestToEnd = true; }
        if (d3 < bestD) { bestD = d3; bestIdx = i; bestRev = false; bestToEnd = false; }
        if (d4 < bestD) { bestD = d4; bestIdx = i; bestRev = true;  bestToEnd = false; }
      }

      const chosen = unattached.splice(bestIdx, 1)[0];
      const seq = bestRev ? chosen.slice().reverse() : chosen;

      if (bestToEnd) {
        const last = tour[tour.length - 1];
        if (last.distanceTo(seq[0]) > 0) tour.push(seq[0]);
        if (tour[tour.length - 1].equals(seq[0])) seq.shift();
        tour.push(...seq);
      } else {
        const first = tour[0];
        if (first.distanceTo(seq[seq.length - 1]) > 0) tour.unshift(seq[seq.length - 1]);
        if (seq[seq.length - 1].equals(tour[0])) seq.pop();
        tour.unshift(...seq);
      }
    }

    const cleaned = this._dedupeConsecutive(tour);
    return this._resamplePath(cleaned, resampleEvery);
  },

  // --- Extraer piezas LineString/MultiLineString ---
  // Nota: transforma coordenadas del GeoJSON en arrays de L.LatLng.
  _extractPieces(geojson) {
    const out = [];
    if (!geojson?.features) return out;

    for (const f of geojson.features) {
      const g = f.geometry;
      if (!g) continue;

      if (g.type === 'LineString') {
        const arr = g.coordinates.map(([lng, lat]) => L.latLng(lat, lng));
        if (arr.length >= 2) out.push(arr);
      } else if (g.type === 'MultiLineString') {
        for (const line of g.coordinates) {
          const arr = line.map(([lng, lat]) => L.latLng(lat, lng));
          if (arr.length >= 2) out.push(arr);
        }
      }
    }
    return out;
  },

  // --- Conectar piezas cercanas ---
  // Nota: elige segmentos más largos primero y une extremos si están dentro del umbral.
  _connectPieces(pieces, thresholdMeters) {
    const remaining = pieces.map(p => p.slice());
    remaining.sort((a, b) => b.length - a.length);

    const path = remaining.shift();
    const endPts = (arr) => ({ start: arr[0], end: arr[arr.length - 1] });

    while (remaining.length) {
      const pEnd = endPts(path);
      let best = -1, bestReverse = false, bestAtEnd = true, bestD = Infinity;

      for (let i = 0; i < remaining.length; i++) {
        const seg = remaining[i];
        const s = seg[0], e = seg[seg.length - 1];
        const d1 = pEnd.end.distanceTo(s);
        const d2 = pEnd.end.distanceTo(e);
        const d3 = pEnd.start.distanceTo(e);
        const d4 = pEnd.start.distanceTo(s);

        if (d1 < bestD) { bestD = d1; best = i; bestReverse = false; bestAtEnd = true; }
        if (d2 < bestD) { bestD = d2; best = i; bestReverse = true;  bestAtEnd = true; }
        if (d3 < bestD) { bestD = d3; best = i; bestReverse = false; bestAtEnd = false; }
        if (d4 < bestD) { bestD = d4; best = i; bestReverse = true;  bestAtEnd = false; }
      }

      if (bestD > thresholdMeters) break;

      const chosen = remaining.splice(best, 1)[0];
      const seq = bestReverse ? chosen.slice().reverse() : chosen;

      if (bestAtEnd) {
        if (path[path.length - 1].equals(seq[0])) seq.shift();
        path.push(...seq);
      } else {
        if (seq[seq.length - 1].equals(path[0])) seq.pop();
        path.unshift(...seq);
      }
    }
    return path;
  },

  // --- Quitar duplicados consecutivos ---
  // Nota: evita puntos repetidos que rompen cálculos de distancia/animación.
  _dedupeConsecutive(latlngs) {
    const out = [];
    for (let i = 0; i < latlngs.length; i++) {
      const cur = latlngs[i];
      if (i === 0 || !cur.equals(latlngs[i - 1])) out.push(cur);
    }
    return out;
  },

  // --- Re-muestrear ruta cada N metros ---
  // Nota: crea puntos intermedios espaciados para animación uniforme.
  _resamplePath(latlngs, targetMeters = 8) {
    if (latlngs.length < 2) return latlngs.slice();
    const out = [latlngs[0]];
    let carry = 0;

    for (let i = 0; i < latlngs.length - 1; i++) {
      const a = latlngs[i];
      const b = latlngs[i + 1];
      let d = a.distanceTo(b);
      if (d === 0) continue;

      for (let dist = targetMeters - carry; dist < d; dist += targetMeters) {
        const t = dist / d;
        out.push(L.latLng(
          a.lat + (b.lat - a.lat) * t,
          a.lng + (b.lng - a.lng) * t
        ));
      }
      carry = (targetMeters - ((d - carry) % targetMeters)) % targetMeters;
      out.push(b);
    }
    return this._dedupeConsecutive(out);
  },

  // ==================== SELECCIÓN DE PARADAS / SEGMENTOS ====================

  // --- Índice más cercano en camino ---
  // Nota: busca el punto de ruta más cercano a un latlng dado.
  _nearestIndexInPath(latlngs, target) {
    let bestIdx = 0, bestD = Infinity;
    for (let i = 0; i < latlngs.length; i++) {
      const d = latlngs[i].distanceTo(target);
      if (d < bestD) { bestD = d; bestIdx = i; }
    }
    return bestIdx;
  },

  // --- Reset selección de una ruta ---
  // Nota: limpia inicio/destino, segmento pintado y detiene animación local.
  _resetSelection(rutaId) {
    const entry = this.activeLayers[rutaId];
    if (!entry) return;

    const sel = entry.selection;
    if (sel?.segmentLayer) {
      this.map.removeLayer(sel.segmentLayer);
      sel.segmentLayer = null;
    }
    if (sel?.start?.marker) sel.start.marker.setIcon(this.icons.parada);
    if (sel?.end?.marker)   sel.end.marker.setIcon(this.icons.parada);

    entry.selection = { start: null, end: null, segmentLayer: null };

    if (this.activeRoute) {
      this.bus.stop();
      this.map.removeLayer(this.activeRoute);
      this.activeRoute = null;
    }
  },

  // --- Actualizar segmento entre inicio/destino ---
  // Nota: pinta el tramo entre dos paradas seleccionadas y mueve el “carrito” ahí.
  _updateSegment(rutaId) {
    const entry = this.activeLayers[rutaId];
    if (!entry || !entry.routeLatLngs) return;

    const { start, end } = entry.selection;
    if (!start || !end) return;

    const iA = this._nearestIndexInPath(entry.routeLatLngs, start.latlng);
    const iB = this._nearestIndexInPath(entry.routeLatLngs, end.latlng);
    if (iA === iB) return;

    const segmentLatLngs = (iA < iB)
      ? entry.routeLatLngs.slice(iA, iB + 1)
      : entry.routeLatLngs.slice(iB, iA + 1);

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
    // Nota simple: esta función hace que el carrito recorra solo el segmento elegido.
    this.bus.start(this.activeRoute, { speed: 5000, loop: true, fitBounds: true });
  },

  // --- Click en parada (inicio/destino) ---
  // Nota: alterna selección de inicio/destino y re-dibuja el segmento.
  _handleStopClick(rutaId, marker) {
    if (!this.isAuthenticated()) return this._nudgeGuest('Seleccionar inicio/destino');

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
      this._resetSelection(rutaId);
      const againEntry = this.activeLayers[rutaId];
      againEntry.selection.start = { marker, latlng };
      marker.setIcon(this.icons.paradaStart);
      marker.bindPopup("<b>Inicio</b>").openPopup();
    }
  },

  // ==================== ANIMACIÓN DEL BUS ====================

  // --- Objeto bus: controla la animación del “carrito” ---
  // Nota: recorre una polyline usando requestAnimationFrame y distancias acumuladas.
  bus: {
    marker: null,
    animFrame: null,

    // Nota simple: detiene la animación y elimina el marcador.
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

    // Nota simple: inicia la animación sobre una polyline dada (loop opcional).
    start(polyline, opts = {}) {
      const { speed = 8, loop = true, fitBounds = false } = opts;
      this.stop();

      const latlngsRaw = polyline.getLatLngs();
      const latlngs = Array.isArray(latlngsRaw[0]) ? latlngsRaw.flat() : latlngsRaw;
      if (!latlngs || latlngs.length < 2) return;

      if (fitBounds) {
        const b = L.latLngBounds(latlngs);
        if (b.isValid()) polyline._map.fitBounds(b, { padding: [30, 30] });
      }

      const segments = [];
      let total = 0;
      for (let i = 0; i < latlngs.length - 1; i++) {
        const a = latlngs[i], b = latlngs[i + 1];
        const d = a.distanceTo(b);
        if (d <= 0) continue;
        segments.push({ a, b, d, acc: total });
        total += d;
      }
      if (segments.length === 0 || total === 0) return;

      this.marker = L.marker(segments[0].a, { icon: App.icons.bus, zIndexOffset: 1000 })
        .addTo(polyline._map);

      const tTotal = (total / speed) * 1000;
      let t0 = null;

      const step = (ts) => {
        if (!t0) t0 = ts;
        let elapsed = ts - t0;
        let dist = (elapsed / tTotal) * total;

        if (dist >= total) {
          if (loop) {
            t0 = ts;
            dist = 0;
          } else {
            this.marker.setLatLng(segments[segments.length - 1].b);
            this.animFrame = null;
            return;
          }
        }

        // búsqueda binaria del segmento actual
        let lo = 0, hi = segments.length - 1, idx = 0;
        while (lo <= hi) {
          const mid = (lo + hi) >> 1;
          const s = segments[mid];
          if (dist < s.acc) hi = mid - 1;
          else if (dist > s.acc + s.d) lo = mid + 1;
          else { idx = mid; break; }
        }
        idx = Math.min(idx, segments.length - 1);

        const seg = segments[idx];
        const segDist = Math.max(0, Math.min(seg.d, dist - seg.acc));
        const t = seg.d > 0 ? (segDist / seg.d) : 0;
        const lat = seg.a.lat + (seg.b.lat - seg.a.lat) * t;
        const lng = seg.a.lng + (seg.b.lng - seg.a.lng) * t;

        this.marker.setLatLng([lat, lng]);
        this.animFrame = requestAnimationFrame(step);
      };

      this.animFrame = requestAnimationFrame(step);
    }
  },

  // ==================== TRÁFICO ====================

  // --- Estado de tráfico ---
  // Nota: contenedor de la capa de tráfico y lista de alertas activas.
  traffic: {
    layer: null,
    alerts: [],
    listContainer: null
  },

  // --- Descarga alertas de tráfico ---
  // Nota: lee alerts.json, filtra por estado y expiración.
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

  // --- Pintar alertas en el mapa ---
  // Nota: coloca marcadores/círculos por severidad y opcionalmente renderiza segmento de ruta afectado.
  renderTraffic() {
    if (!this.traffic.layer) return;
    this.traffic.layer.clearLayers();

    this.traffic.alerts.forEach(a => {
      const sev = Number(a.severidad) || 1;
      const color = sev >= 5 ? '#dc2626' : sev >= 3 ? '#f59e0b' : '#22c55e';

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

      if (a.rutaId && a.segment && a.segment.fromStop && a.segment.toStop) {
        this._renderTrafficSegment(a).catch(err =>
          console.warn('No se pudo pintar segmento', a.id, err)
        );
      }
    });
  },

  // --- Lista lateral de alertas ---
  // Nota: ordena por cercanía a mi ubicación y permite centrar el mapa en cada alerta.
  renderTrafficList() {
    const ul = this.traffic.listContainer;
    if (!ul) return;

    ul.innerHTML = '';
    const pos = this.userLocation || null;

    const items = this.traffic.alerts
      .map(a => {
        let distKm = null;
        if (pos && a.coord) {
          const p1 = L.latLng(pos.lat, pos.lon ?? pos.lng ?? pos.long ?? pos.lon);
          const p2 = L.latLng(a.coord.lat, a.coord.lng);
          // Si pos no tenía 'lng', intenta 'lon'
          const p1Fixed = L.latLng(pos.lat, (pos.lng ?? pos.lon));
          distKm = p1Fixed.distanceTo(p2) / 1000;
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

      li.querySelector('button')?.addEventListener('click', () => {
        if (a.coord) this.map.setView([a.coord.lat, a.coord.lng], Math.max(this.map.getZoom(), 15));
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

  // --- Pintar segmento de ruta afectado por una alerta ---
  // Nota: carga el route.json de la ruta y dibuja un polyline resaltado (simple).
  async _renderTrafficSegment(alerta) {
    const geo = await this.fetchGeoJSON(`./data/${alerta.rutaId}/route.json`);
    if (!geo) return;
    const latlngs = this._buildCoverageLoopFromGeoJSON(geo, { connectThreshold: 25, resampleEvery: 8 });
    if (!latlngs.length) return;

    L.polyline(latlngs, {
      color: '#e11d48',
      weight: 6,
      opacity: 0.6,
      dashArray: '6 6'
    }).addTo(this.traffic.layer);
  },

  // --- Aviso para invitados (nudges) ---
  // Nota: anima una leyenda para avisar que la función requiere iniciar sesión.
  _nudgeGuest(featureName = '') {
    if (this.elements.guestLegend) {
      this.elements.guestLegend.classList.remove('pulse');
      // reflow para reiniciar la animación CSS
      void this.elements.guestLegend.offsetWidth;
      this.elements.guestLegend.classList.add('pulse');
    }
    if (featureName) {
      alert(`Inicia sesión para usar: ${featureName}.`);
    }
  }
}; // <- Cierre del objeto App

// --- Bootstrap del módulo ---
// Nota: cuando el DOM esté listo, inicializa la app.
document.addEventListener('DOMContentLoaded', () => App.init());
