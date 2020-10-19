const routes = require('express').Router();
const get = require('./../controllers/get');

routes.get('/', get);


routes.get('/cadastro.html', function(req, res) {
    res.sendFile('../views/cadastro/cadastro.html')
});

module.exports = routes;