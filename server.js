/**
 * Servidor principal de Rutabus
 * Maneja la autenticación de usuarios y la conexión con MongoDB
 */

// 1. Importación de dependencias necesarias
const express = require('express');
const { MongoClient } = require('mongodb');

// 2. Configuración inicial del servidor
const app = express();
const PORT = 3000;

// 3. Configuración de la base de datos MongoDB
const MONGO_URI = "mongodb+srv://Salinas_user:rutabus123@rutabus.qdwcba8.mongodb.net/?retryWrites=true&w=majority&appName=Rutabus";
const DB_NAME = "rutabus_db";

// Variable global para la conexión a la base de datos
let db;

// 4. Configuración de middlewares
app.use(express.json());  // Para procesar JSON en las peticiones
app.use(express.static(__dirname));  // Servir archivos estáticos

/**
 * Ruta de autenticación de usuarios
 * Maneja tanto el login de usuarios normales como administradores
 * POST /api/login
 */
app.post('/api/login', async (req, res) => {
    // Extraer credenciales y tipo de login de la petición
    const { email, password, isAdmin } = req.body;
    
    // Verificar conexión a la base de datos
    if (!db) { 
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        }); 
    }

    try {
        // Buscar usuario en la base de datos
        const usuario = await db.collection('usuarios').findOne({ email: email });

        // Validar existencia del usuario
        if (!usuario) { 
            return res.status(404).json({ 
                success: false, 
                message: "Email no registrado." 
            }); 
        }

        // Validar contraseña
        if (usuario.password !== password) { 
            return res.status(401).json({ 
                success: false, 
                message: "Contraseña incorrecta." 
            }); 
        }

        // Validar permisos de administrador si es necesario
        if (isAdmin && usuario.rol !== 'administrador') {
            return res.status(403).json({ 
                success: false, 
                message: "Acceso denegado. No tienes permisos de administrador." 
            });
        }
        
        // Enviar respuesta exitosa
        res.json({
            success: true,
            message: `¡Bienvenido, ${usuario.nombre}!`,
            user: { nombre: usuario.nombre, email: usuario.email, rol: usuario.rol }
        });

    } catch (error) {
        console.error("Error durante el login:", error);
        res.status(500).json({ 
            success: false, 
            message: "Ocurrió un error en el servidor." 
        });
    }
});

/**
 * Ruta de registro de nuevos usuarios
 * Crea una nueva cuenta de usuario en el sistema
 * POST /api/register
 */
app.post('/api/register', async (req, res) => {
    // Verificar conexión a la base de datos
    if (!db) {
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        });
    }

    try {
        const { nombre, email, password } = req.body;
        const coleccionUsuarios = db.collection('usuarios');

        // Verificar si el email ya está registrado
        const usuarioExistente = await coleccionUsuarios.findOne({ email: email });
        if (usuarioExistente) {
            return res.status(400).json({ 
                success: false, 
                message: "Este correo electrónico ya está registrado." 
            });
        }

        // Crear nuevo usuario
        const nuevoUsuario = {
            nombre: nombre,
            email: email,
            password: password,
            rol: 'usuario'  // Por defecto, todos los nuevos usuarios son normales
        };

        await coleccionUsuarios.insertOne(nuevoUsuario);
        res.status(201).json({ 
            success: true, 
            message: "¡Registro exitoso! Serás redirigido para iniciar sesión." 
        });

    } catch (error) {
        console.error("Error durante el registro:", error);
        res.status(500).json({ 
            success: false, 
            message: "Ocurrió un error en el servidor." 
        });
    }
});

/**
 * Función de inicialización del servidor
 * Establece la conexión con MongoDB y arranca el servidor Express
 */
async function startServer() {
    try {
        // Conectar a MongoDB
        const client = new MongoClient(MONGO_URI);
        await client.connect();
        db = client.db(DB_NAME);
        console.log(`✅ Conectado exitosamente a la base de datos: ${DB_NAME}`);

        // Iniciar servidor Express
        app.listen(PORT, () => {
            console.log(`🚀 Servidor de Rutabus corriendo en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error fatal al conectar a MongoDB. La aplicación no puede iniciar.", error);
        process.exit(1);
    }
}

// Iniciar el servidor
startServer();

