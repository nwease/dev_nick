const routes = require('next-routes');

module.exports = routes()
    .add('details', '/details/:id');