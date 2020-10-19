const routes = require('express').Router();
const path = require('path');
const getIndex = require('./../controllers/get');

/*------------------------------ Rotas Home ------------------------------*/
routes.get('/', getIndex);

routes.get('/index.html', getIndex);

routes.get('/about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/about.html'));
});

routes.get('/contact.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/contact.html'));
});

routes.get('/login.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/login.html'));
});

routes.get('/cadastro.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/cadastro/cadastro.html'));
});

/*------------------------------ Rotas Serviços ------------------------------*/
routes.get('/cat_servicos.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_servicos.html'));
});


module.exports = routes;