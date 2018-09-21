const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'index', pattern: '/', page: 'index' })
  .add({ name: 'app/matrix', pattern: '/app/matrix:id', page: 'app-matrix' })
  .add({
    name: 'app/messages',
    pattern: '/app/messages',
    page: 'app-messages'
  });
