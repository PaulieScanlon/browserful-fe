const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');
const port = parseInt(process.env.PORT, 10) || 3030;
const app = next({ dir: './src', dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
