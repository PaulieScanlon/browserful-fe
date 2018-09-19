const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'index', pattern: '/', page: 'index' })
  .add({ name: 'matrix', pattern: '/app/matrix:id', page: 'matrix' })
  .add({ name: 'messages', pattern: '/app/messages', page: 'messages' });
