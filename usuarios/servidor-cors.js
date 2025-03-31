const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// 1. Middleware SOLO para ordenar el ID primero
server.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function(body) {
    if (typeof body === 'string' && res.get('Content-Type')?.includes('json')) {
      try {
        const data = JSON.parse(body);
        const reorderId = (obj) => {
          if (!obj || typeof obj !== 'object') return obj;
          const { id, ...rest } = obj;
          return { id, ...rest }; // ID siempre primero
        };
        body = JSON.stringify(Array.isArray(data) ? data.map(reorderId) : reorderId(data));
      } catch (e) {
        console.log("⚠️ Error al reordenar ID:", e.message);
      }
    }
    originalSend.call(this, body);
  };
  next();
});

// 2. Configuración existente (sin cambios)
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('Servidor JSON funcionando en http://localhost:3000');
});