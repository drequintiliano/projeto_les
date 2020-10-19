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



/*------------------------------ Rotas Serviços ------------------------------*/
routes.get('/cat_servicos.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_servicos.html'));
});

routes.get('/cat_aulas.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_aulas.html'));
});

routes.get('/cat_assistencia.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_assistencia.html'));
});

routes.get('/cat_consultoria.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_consultoria.html'));
});

routes.get('/cat_reforma.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_reforma.html'));
});

routes.get('/cat_eventos.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/categorias/cat_eventos.html'));
});



/*------------------------------ Rotas Cadastro ------------------------------*/
routes.get('/cadastro.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/cadastro/cadastro.html'));
});

routes.get('/cadastrar_profissional.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/cadastro/cadastrar_profissional.html'));
});

routes.get('/cadastrar_cliente.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/cadastro/cadastrar_cliente.html'));
});


/*------------------------------ Rotas Perfil ------------------------------*/
routes.get('/perfil_cliente.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/perfil_cliente.html'));
});

routes.get('/perfil_profissional.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional.html'));
});


module.exports = routes;