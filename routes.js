const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'index', pattern: '/', page: 'index' })
  .add({
    name: 'app/matrix',
    pattern: '/app/matrix',
    page: 'app-matrix'
  })
  .add({
    name: 'freeview/matrix',
    pattern: '/freeview/matrix',
    page: 'freeview-matrix'
  });
