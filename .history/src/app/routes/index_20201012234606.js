const routes = require('express').Router();
const get = require('./../controllers/get');

routes.get('/', get);

routes.get('/index.html', get);

module.exports = routes;