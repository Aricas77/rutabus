/**
 * Servidor principal de Rutabus
 * Maneja la autenticación de usuarios y la conexión con MongoDB
 */

// 1. Importación de dependencias necesarias
const express = require('express');
const { MongoClient } = require('mongodb');
const fs = require('fs').promises;
const path = require('path');

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

/**
 * Endpoint para obtener rutas locales desde el directorio data/
 * GET /api/routes/local
 */
app.get('/api/routes/local', async (req, res) => {
    try {
        const dataDir = path.join(__dirname, 'data');
        
        // Verificar si existe el directorio data
        try {
            await fs.access(dataDir);
        } catch (error) {
            return res.json({ success: true, routes: [] });
        }

        const localRoutes = [];
        const entries = await fs.readdir(dataDir);
        
        // Filtrar solo directorios numericos
        const routeDirs = entries.filter(entry => /^\d{3}$/.test(entry));
        
        for (const dirName of routeDirs) {
            const dirPath = path.join(dataDir, dirName);
            
            try {
                // Leer archivo route.json
                const routeFile = path.join(dirPath, 'route.json');
                const routeContent = await fs.readFile(routeFile, 'utf8');
                const routeData = JSON.parse(routeContent);
                
                // Buscar archivo de paradas
                const files = await fs.readdir(dirPath);
                const stopsFile = files.find(file => file.includes('stops.geojson'));
                
                let stopsData = null;
                if (stopsFile) {
                    const stopsPath = path.join(dirPath, stopsFile);
                    const stopsContent = await fs.readFile(stopsPath, 'utf8');
                    stopsData = JSON.parse(stopsContent);
                }
                
                // Formatear la ruta para ser compatible con el formato esperado
                const formattedRoute = {
                    id: dirName,
                    stop: dirName, // Usar el mismo ID por defecto
                    name: routeData.name || `Ruta ${dirName}`,
                    routeData: routeData,
                    stopsData: stopsData,
                    routeInfo: {
                        horaInicio: "05:30",
                        horaFinal: "21:45",
                        descripcion: routeData.desc || '',
                        mujerSegura: false,
                        foto: `./data/${dirName}/${dirName}.png`
                    },
                    source: 'local' // Marcar como ruta local
                };
                
                localRoutes.push(formattedRoute);
                
            } catch (error) {
                console.error(`Error leyendo ruta local ${dirName}:`, error.message);
                // Continuar con la siguiente ruta en caso de error
            }
        }
        
        res.json({ success: true, routes: localRoutes });
        
    } catch (error) {
        console.error('Error cargando rutas locales:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error cargando rutas locales del sistema.' 
        });
    }
});

/**
 * Endpoint para obtener todas las rutas desde la base de datos
 * GET /api/routes
 */
app.get('/api/routes', async (req, res) => {
    if (!db) {
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        });
    }

    try {
        const routes = await db.collection('routes').find({}).toArray();
        res.json({ success: true, routes });
    } catch (error) {
        console.error("Error obteniendo rutas:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error obteniendo rutas de la base de datos." 
        });
    }
});

/**
 * Endpoint para obtener una ruta específica por ID
 * GET /api/routes/:id
 */
app.get('/api/routes/:id', async (req, res) => {
    if (!db) {
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        });
    }

    try {
        const { id } = req.params;
        const route = await db.collection('routes').findOne({ id: id });
        
        if (!route) {
            return res.status(404).json({ 
                success: false, 
                message: "Ruta no encontrada." 
            });
        }

        res.json({ success: true, route });
    } catch (error) {
        console.error("Error obteniendo ruta:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error obteniendo la ruta de la base de datos." 
        });
    }
});

/**
 * Endpoint para crear una nueva ruta
 * POST /api/routes
 */
app.post('/api/routes', async (req, res) => {
    if (!db) {
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        });
    }

    try {
        const { 
            id, 
            stop, 
            name, 
            routeData, 
            stopsData, 
            routeInfo 
        } = req.body;

        // Validar datos requeridos
        if (!id || !stop || !name || !routeData) {
            return res.status(400).json({ 
                success: false, 
                message: "Faltan datos requeridos: id, stop, name, routeData." 
            });
        }

        // Verificar si ya existe una ruta con este ID
        const existingRoute = await db.collection('routes').findOne({ id: id });
        if (existingRoute) {
            return res.status(400).json({ 
                success: false, 
                message: `Ya existe una ruta con el ID ${id}.` 
            });
        }

        // Crear objeto de ruta
        const newRoute = {
            id,
            stop,
            name,
            routeData, // GeoJSON de la ruta
            stopsData: stopsData || null, // GeoJSON de las paradas
            routeInfo: routeInfo || {}, // Información adicional (horarios, etc.)
            createdAt: new Date(),
            updatedAt: new Date()
        };

        await db.collection('routes').insertOne(newRoute);
        res.status(201).json({ 
            success: true, 
            message: "Ruta creada exitosamente.",
            routeId: id
        });

    } catch (error) {
        console.error("Error creando ruta:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error creando la ruta en la base de datos." 
        });
    }
});

/**
 * Endpoint para actualizar una ruta existente
 * PUT /api/routes/:id
 */
app.put('/api/routes/:id', async (req, res) => {
    if (!db) {
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        });
    }

    try {
        const { id } = req.params;
        const updateData = req.body;
        
        // Agregar timestamp de actualización
        updateData.updatedAt = new Date();

        const result = await db.collection('routes').updateOne(
            { id: id },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "Ruta no encontrada." 
            });
        }

        res.json({ 
            success: true, 
            message: "Ruta actualizada exitosamente." 
        });

    } catch (error) {
        console.error("Error actualizando ruta:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error actualizando la ruta en la base de datos." 
        });
    }
});

/**
 * Endpoint para eliminar una ruta
 * DELETE /api/routes/:id
 */
app.delete('/api/routes/:id', async (req, res) => {
    if (!db) {
        return res.status(500).json({ 
            success: false, 
            message: "Error interno: No hay conexión a la base de datos." 
        });
    }

    try {
        const { id } = req.params;

        const result = await db.collection('routes').deleteOne({ id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "Ruta no encontrada." 
            });
        }

        res.json({ 
            success: true, 
            message: "Ruta eliminada exitosamente." 
        });

    } catch (error) {
        console.error("Error eliminando ruta:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error eliminando la ruta de la base de datos." 
        });
    }
});

// Iniciar el servidor
startServer();

