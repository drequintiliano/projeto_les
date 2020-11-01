const routes = require('express').Router();
const path = require('path');

// Controllers
const SolicitacoesProfissionalController = require('../controllers/solicitacoesProfissionalController');
const UsuarioProfissionalController = require('../controllers/usuarioProfissionalController');
const SolicitacoesClienteController = require('../controllers/solicitacoesClienteController');
const UsuarioClienteController = require('../controllers/usuarioClienteController');
const getIndex = require('../controllers/get');

// Instancias
const solicitacoesProfissionalController = new SolicitacoesProfissionalController
const solicitacoesClienteController = new SolicitacoesClienteController
const usuarioClienteController = new UsuarioClienteController


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

routes.get('/cadastrar_cliente', function(req, res) {
    res.marko(require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'));
});


/*------------------------------ Rotas Perfil Profissional ------------------------------*/
routes.get('/profissional_index.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/profissional_index.html'));
});

routes.get('/perfil_profissional.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional.html'));
});

routes.get('/perfil_profissional_servicos.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional_servicos.html'));
});

routes.post('/cadastrar_cliente', usuarioClienteController.cadastrarCliente());

// Solicitacoes Profissional
routes.get('/perfil_profissional_solicitacoes.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional_solicitacoes.html'));
});

routes.get('/solicitacoes_profissional', solicitacoesProfissionalController.listaSolicitacoes());

routes.delete('/solicitacoes_cliente/:id', solicitacoesProfissionalController.removeSolicitacao());


/*------------------------------ Perfil Cliente ------------------------------*/
routes.get('/cliente_index.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/cliente_index.html'));
});

routes.get('/perfil_cliente.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/perfil_cliente.html'));
});

routes.get('/perfil_cliente_solicitacoes.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/perfil_cliente_solicitacoes.html'));
});

routes.post('/cadastrar_cliente', usuarioClienteController.cadastrarCliente());

// Solicitacoes Cliente
routes.get('/solicitacoes_cliente', solicitacoesClienteController.listaSolicitacoes());

routes.delete('/solicitacoes_cliente/:id', solicitacoesClienteController.removeSolicitacao());


module.exports = routes;