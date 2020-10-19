const routes = require('express').Router();
const get = require('./../controllers/get');

routes.get('/', get);

routes.get('/about.html', get);

module.exports = routes;