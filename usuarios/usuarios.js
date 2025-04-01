const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// 1. Servir la interfaz web de JSON Server
server.use(middlewares.static('node_modules/json-server/public'));

// 2. Middleware para redirigir a usuarios //
server.get('/', (req, res) => {
  res.redirect('/usuarios');
});

// 3. Middleware para ordenar ID primero (tu requerimiento)
server.use((req, res, next) => {
  const originalJson = res.json;
  res.json = (data) => {
    if (data && typeof data === 'object') {
      const reorderId = (obj) => {
        if (!obj || Array.isArray(obj)) return obj;
        const { id, ...rest } = obj;
        return id !== undefined ? { id, ...rest } : obj;
      };
      data = Array.isArray(data) ? data.map(reorderId) : reorderId(data);
    }
    originalJson.call(res, data);
  };
  next();
});

// Configuración CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('✨ Interfaz web disponible en: http://localhost:3000');
});