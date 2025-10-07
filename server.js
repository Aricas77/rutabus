/**
 * Servidor principal de Rutabus
 * Maneja la autenticación, gestión de rutas y conexión con MongoDB
 */
const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;

const MONGO_URI = "mongodb+srv://Salinas_user:rutabus123@rutabus.qdwcba8.mongodb.net/?retryWrites=true&w=majority&appName=Rutabus";
const DB_NAME = "rutabus_db";
let db;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// --- RUTAS DE AUTENTICACIÓN ---

app.post('/api/login', async (req, res) => {
    if (!db) { return res.status(500).json({ success: false, message: "Error interno: No hay conexión a la base de datos." }); }
    try {
        const { email, password, isAdmin } = req.body;
        const usuario = await db.collection('usuarios').findOne({ email: email });
        if (!usuario) { return res.status(404).json({ success: false, message: "Email no registrado." }); }
        if (usuario.password !== password) { return res.status(401).json({ success: false, message: "Contraseña incorrecta." }); }
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

app.post('/api/register', async (req, res) => {
    if (!db) { return res.status(500).json({ success: false, message: "Error interno: No hay conexión a la base de datos." }); }
    try {
        const { nombre, email, password } = req.body;
        const coleccionUsuarios = db.collection('usuarios');
        const usuarioExistente = await coleccionUsuarios.findOne({ email: email });
        if (usuarioExistente) {
            return res.status(400).json({ success: false, message: "Este correo electrónico ya está registrado." });
        }
        const nuevoUsuario = { nombre, email, password, rol: 'usuario' };
        await coleccionUsuarios.insertOne(nuevoUsuario);
        res.status(201).json({ success: true, message: "¡Registro exitoso! Serás redirigido para iniciar sesión." });
    } catch (error) {
        console.error("Error durante el registro:", error);
        res.status(500).json({ success: false, message: "Ocurrió un error en el servidor." });
    }
});


// --- RUTAS DE GESTIÓN DE RUTAS (CRUD) ---

app.post('/api/rutas', async (req, res) => {
    if (!db) { return res.status(500).json({ success: false, message: "Error de conexión con la base de datos." }); }
    try {
        const { nombre, id, stop, rutaGeoJSON, paradasGeoJSON, horaInicio, horaFinal, distanciaKm, duracionMin, mujerSegura } = req.body;
        const coleccionRutas = db.collection('rutas');
        const rutaExistente = await coleccionRutas.findOne({ id: id });
        if (rutaExistente) {
            return res.status(400).json({ success: false, message: "Ya existe una ruta con ese ID." });
        }
        const nuevaRuta = { nombre, id, stop, ruta: rutaGeoJSON, paradas: paradasGeoJSON, horaInicio, horaFinal, distanciaKm, duracionMin, mujerSegura, createdAt: new Date() };
        await coleccionRutas.insertOne(nuevaRuta);
        res.status(201).json({ success: true, message: "Ruta creada exitosamente" });
    } catch (error) {
        console.error("Error al crear la ruta:", error);
        res.status(500).json({ success: false, message: "Error del servidor al crear la ruta" });
    }
});

// --- RUTA GET FUNCIONAL Y DEFINITIVA ---
app.get('/api/rutas', async (req, res) => {
    if (!db) { return res.status(500).json({ success: false, message: "Error interno: No hay conexión a la base de datos." }); }
    try {
        const rutas = await db.collection('rutas').find({}).toArray();
        res.json({ success: true, rutas: rutas });
    } catch (error) {
        console.error("Error al obtener las rutas:", error);
        res.status(500).json({ success: false, message: "Error al obtener las rutas" });
    }
});

app.put('/api/rutas/:id', async (req, res) => {
    if (!db) { return res.status(500).json({ success: false, message: "Error de conexión con la base de datos." }); }
    try {
        const rutaId = req.params.id;
        const { nombre, stop, rutaGeoJSON, paradasGeoJSON, horaInicio, horaFinal, distanciaKm, duracionMin, mujerSegura } = req.body;
        const resultado = await db.collection('rutas').updateOne(
            { id: rutaId },
            { $set: { nombre, stop, ruta: rutaGeoJSON, paradas: paradasGeoJSON, horaInicio, horaFinal, distanciaKm, duracionMin, mujerSegura, updatedAt: new Date() } }
        );
        if (resultado.matchedCount === 0) {
            return res.status(404).json({ success: false, message: "Ruta no encontrada" });
        }
        res.json({ success: true, message: "Ruta actualizada exitosamente" });
    } catch (error) {
        console.error("Error al actualizar la ruta:", error);
        res.status(500).json({ success: false, message: "Error del servidor al actualizar la ruta" });
    }
});

app.delete('/api/rutas/:id', async (req, res) => {
    if (!db) { return res.status(500).json({ success: false, message: "Error interno: No hay conexión a la base de datos." }); }
    try {
        const rutaId = req.params.id;
        const resultado = await db.collection('rutas').deleteOne({ id: rutaId });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ success: false, message: "Ruta no encontrada" });
        }
        res.json({ success: true, message: "Ruta eliminada exitosamente" });
    } catch (error) {
        console.error("Error al eliminar la ruta:", error);
        res.status(500).json({ success: false, message: "Error al eliminar la ruta" });
    }
});


// --- INICIALIZACIÓN DEL SERVIDOR ---

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