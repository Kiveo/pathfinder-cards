const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/cards',
    proxy({
      target: 'http://localhost:3001',
      changeOrigin: true,
    }),
  );
};
