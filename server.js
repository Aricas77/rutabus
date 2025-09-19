// ... (El inicio del archivo no cambia)
// 1. Importar las librerías necesarias
const express = require('express');
const { MongoClient } = require('mongodb');

// 2. Configuración
const app = express();
const PORT = 3000;

const MONGO_URI = "mongodb+srv://Salinas_user:rutabus123@rutabus.qdwcba8.mongodb.net/?retryWrites=true&w=majority&appName=Rutabus";
const DB_NAME = "rutabus_db";

let db;

// Middlewares
app.use(express.json());
app.use(express.static(__dirname));


// --- RUTA DE LOGIN MODIFICADA ---
app.post('/api/login', async (req, res) => {
    // CAMBIO: Ahora también recibimos 'isAdmin'
    const { email, password, isAdmin } = req.body;
    
    if (!db) { 
        return res.status(500).json({ success: false, message: "Error interno: No hay conexión a la base de datos." }); 
    }

    try {
        const usuario = await db.collection('usuarios').findOne({ email: email });

        if (!usuario) { 
            return res.status(404).json({ success: false, message: "Email no registrado." }); 
        }
        if (usuario.password !== password) { 
            return res.status(401).json({ success: false, message: "Contraseña incorrecta." }); 
        }

        // --- NUEVA VERIFICACIÓN DE ROL DE ADMINISTRADOR ---
        // Si el usuario intenta entrar como admin (isAdmin === true)
        // pero su rol en la base de datos NO es 'administrador', le negamos el acceso.
        if (isAdmin && usuario.rol !== 'administrador') {
            return res.status(403).json({ success: false, message: "Acceso denegado. No tienes permisos de administrador." });
        }
        
        res.json({
            success: true,
            message: `¡Bienvenido, ${usuario.nombre}!`,
            user: { nombre: usuario.nombre, email: usuario.email, rol: usuario.rol }
        });

    } catch (error) {
        console.error("Error durante el login:", error);
        res.status(500).json({ success: false, message: "Ocurrió un error en el servidor." });
    }
});


// ... (La ruta de registro y la función startServer no cambian)
// Ruta de registro
app.post('/api/register', async (req, res) => {
    if (!db) {
        return res.status(500).json({ success: false, message: "Error interno: No hay conexión a la base de datos." });
    }
    try {
        const { nombre, email, password } = req.body;
        const coleccionUsuarios = db.collection('usuarios');
        const usuarioExistente = await coleccionUsuarios.findOne({ email: email });
        if (usuarioExistente) {
            return res.status(400).json({ success: false, message: "Este correo electrónico ya está registrado." });
        }
        const nuevoUsuario = {
            nombre: nombre,
            email: email,
            password: password,
            rol: 'usuario'
        };
        await coleccionUsuarios.insertOne(nuevoUsuario);
        res.status(201).json({ success: true, message: "¡Registro exitoso! Serás redirigido para iniciar sesión." });
    } catch (error) {
        console.error("Error durante el registro:", error);
        res.status(500).json({ success: false, message: "Ocurrió un error en el servidor." });
    }
});


// Función para iniciar todo en orden
async function startServer() {
    try {
        const client = new MongoClient(MONGO_URI);
        await client.connect();
        db = client.db(DB_NAME);
        console.log(`✅ Conectado exitosamente a la base de datos: ${DB_NAME}`);

        app.listen(PORT, () => {
            console.log(`🚀 Servidor de Rutabus corriendo en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error fatal al conectar a MongoDB. La aplicación no puede iniciar.", error);
        process.exit(1);
    }
}

startServer();

