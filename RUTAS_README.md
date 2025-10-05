# Gestión de Rutas - Rutabus

## 🎉 Funcionalidad Implementada

Se ha implementado exitosamente la funcionalidad completa de gestión de rutas que permite a los administradores crear, editar y eliminar rutas que se almacenan en la base de datos MongoDB y persisten entre sesiones.

## ✨ Características Nuevas

### 1. **Panel de Administración Interactivo**
- Mapa interactivo con herramientas de dibujo
- Formulario completo para información de rutas
- Gestión visual de rutas existentes

### 2. **Base de Datos Integrada**
- Las rutas se guardan en MongoDB en la colección `routes`
- Formato compatible con el sistema existente
- Persistencia completa entre sesiones

### 3. **CRUD Completo de Rutas**
- ✅ **Crear**: Nuevas rutas con trazado interactivo
- ✅ **Leer**: Carga automática desde base de datos
- ✅ **Actualizar**: Edición completa de rutas existentes
- ✅ **Eliminar**: Eliminación segura con confirmación

## 🚀 Cómo Usar

### Acceso al Panel de Administración
1. Inicia sesión como administrador en `/login.html`
2. Ve al panel de administración en `/admin.html`
3. O usa el menú hamburguesa desde la aplicación principal

### Crear una Nueva Ruta
1. **Completar el formulario:**
   - Nombre de la ruta (ej: "Ruta 153: Centro - USBI")
   - ID de 3 dígitos (ej: "153")
   - ID de parada (auto-completado)
   - Horarios de inicio y fin
   - Marcar como "Mujer Segura" si aplica
   - Descripción opcional

2. **Dibujar en el mapa:**
   - Usar la herramienta de línea para trazar la ruta
   - Usar la herramienta de marcador para agregar paradas
   - Las paradas se numeran automáticamente

3. **Guardar:**
   - Hacer clic en "Guardar Ruta"
   - La ruta se almacena en la base de datos
   - Aparece inmediatamente en la aplicación principal

### Gestionar Rutas Existentes
1. **Cargar rutas:** Hacer clic en "Cargar Rutas" para ver todas las rutas existentes
2. **Seleccionar:** Hacer clic en cualquier ruta para seleccionarla
3. **Editar:** 
   - Hacer clic en el botón "Editar" de la ruta deseada
   - Los datos se cargan automáticamente en el formulario y mapa
   - Modificar según sea necesario
   - Hacer clic en "Actualizar Ruta"
4. **Eliminar:**
   - Hacer clic en el botón "Eliminar"
   - Confirmar la eliminación en el diálogo
   - La ruta se elimina permanentemente

### Limpiar el Formulario
- Usar "Limpiar Formulario" para resetear todos los campos sin afectar el mapa
- Útil para cancelar una edición y crear una nueva ruta

## 🛠 Estructura Técnica

### Backend (server.js)
- `GET /api/routes` - Obtener todas las rutas
- `GET /api/routes/:id` - Obtener ruta específica
- `POST /api/routes` - Crear nueva ruta
- `PUT /api/routes/:id` - Actualizar ruta existente
- `DELETE /api/routes/:id` - Eliminar ruta

### Base de Datos (MongoDB)
```javascript
// Estructura de documento en colección 'routes'
{
  id: "153",                    // ID único de 3 dígitos
  stop: "153",                  // ID de parada
  name: "Ruta 153: Centro - USBI",
  routeData: { ... },          // GeoJSON de la ruta (LineString)
  stopsData: { ... },          // GeoJSON de las paradas (Points)
  routeInfo: {                 // Información adicional
    horaInicio: "05:30",
    horaFinal: "21:45",
    distanciaKm: 12.5,
    duracionMin: 50,
    mujerSegura: false,
    descripcion: "...",
    foto: "./data/153/153.png"
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Frontend
- **admin.js**: Lógica completa del panel de administración
- **app.js**: Modificado para cargar desde base de datos con fallback a archivos estáticos
- **admin.html**: Interfaz de usuario mejorada

## 🔄 Flujo de Datos

1. **Carga inicial**: La app intenta cargar rutas desde `/api/routes`
2. **Fallback**: Si no hay datos en BD, usa archivos estáticos existentes
3. **Nuevas rutas**: Se crean en BD y aparecen inmediatamente
4. **Persistencia**: Todas las rutas persisten entre reinicios del servidor

## ⚡ Características Adicionales

- **Validación completa** de formularios
- **Confirmación de eliminación** para prevenir errores
- **Mensajes informativos** en tiempo real
- **Cálculo automático** de distancias
- **Numeración automática** de paradas
- **Zoom automático** a rutas editadas
- **Interfaz responsive** para diferentes pantallas

## 🧪 Testing

Para probar la funcionalidad:

1. **Iniciar el servidor:**
   ```bash
   node server.js
   ```

2. **Crear usuario administrador** (si no existe):
   - Ir a `/register.html`
   - Registrarse con cualquier email/contraseña
   - En MongoDB, cambiar el campo `rol` de "usuario" a "administrador"

3. **Probar flujo completo:**
   - Login como admin → Panel admin → Crear ruta → Ver en app principal
   - Editar ruta → Verificar cambios
   - Eliminar ruta → Verificar eliminación

## 🔧 Mantenimiento

- Las rutas se almacenan permanentemente en MongoDB
- Los archivos estáticos siguen siendo compatibles como fallback
- El formato de datos es completamente compatible con el sistema existente
- Se mantiene toda la funcionalidad original intacta

## 🎯 Próximos Pasos Sugeridos

1. **Subida de imágenes**: Permitir subir fotos de rutas
2. **Importación masiva**: Importar rutas desde archivos CSV/JSON
3. **Estadísticas**: Dashboard con métricas de uso de rutas
4. **Notificaciones**: Sistema de alertas para cambios en rutas
5. **Historial**: Registro de cambios en rutas

---

¡La funcionalidad está lista para ser usada! 🚌✨