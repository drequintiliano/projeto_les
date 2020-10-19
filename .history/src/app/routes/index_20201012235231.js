const routes = require('express').Router();
const get = require('./../controllers/get');

routes.get('/', get);

routes.get('/index.html', get);

routes.get('/about.html', function(req, res) {
    res.sendFile('../views/about.html');
});

module.exports = routes;