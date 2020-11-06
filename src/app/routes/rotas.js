const routes = require('express').Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + '../../public/img/categorias')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage });

// Model
const UsuariosProfissional = require('../models/usuariosProfissional');
const UsuariosCliente = require('../models/usuariosCliente');

// Controllers
const SolicitacoesProfissionalController = require('../controllers/solicitacoesProfissionalController');
const UsuarioProfissionalController = require('../controllers/usuarioProfissionalController');
const SolicitacoesClienteController = require('../controllers/solicitacoesClienteController');
const UsuarioClienteController = require('../controllers/usuarioClienteController');
const LoginController = require('../controllers/loginController');
const ServicosController = require('../controllers/servicosController');
const getIndex = require('../controllers/get');

// Instancias
const solicitacoesProfissionalController = new SolicitacoesProfissionalController
const usuarioProfissionalController = new UsuarioProfissionalController
const solicitacoesClienteController = new SolicitacoesClienteController
const usuarioClienteController = new UsuarioClienteController
const loginController = new LoginController
const servicos = new ServicosController


/*------------------------------------------------------------ Rotas Home ------------------------------------------------------------*/
routes.get('/', getIndex);

routes.get('/index.html', getIndex);

routes.get('/about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/about.html'));
});

routes.get('/contact.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/contact.html'));
});

routes.get('/cadastro.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/cadastro/cadastro.html'));
});

routes.get('/login', function(req, res) {
    res.marko(require(__dirname + '../../views/login.marko'));
});

routes.post('/login', loginController.efetuaLogin());


/*------------------------------------------------------------ Rotas Serviços ------------------------------------------------------------*/
routes.get('/cat_servicos', servicos.listarServicosDomesticos());

routes.get('/cat_assistencias', servicos.listarAssistencia());

routes.get('/cat_aulas', servicos.listarAulas());

routes.get('/cat_reformas', servicos.listarReformas());

routes.get('/cat_eventos', servicos.listarEventos());

routes.get('/cat_consultorias', servicos.listarConsultorias());


/*------------------------------------------------------------ Rotas Profissional ------------------------------------------------------------*/
routes.get('/profissional_index.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/profissional_index.html'));
});

routes.get('/profissional_about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/profissional_about.html'));
});

routes.get('/profissional_contact.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/profissional_contact.html'));
});

routes.get('/perfil_profissional', usuarioProfissionalController.listarProfissional());

// Cadastro Profissional
routes.get('/cadastrar_profissional', function(req, res) {
    res.marko(require(__dirname + '../../views/cadastro/cadastrar_profissional.marko'), { profissional: {} });
});

routes.post('/cadastrar_profissional', UsuariosProfissional.validacoes(), usuarioProfissionalController.cadastrarProfissional());

// Serviços Profissional
routes.get('/perfil_profissional_servicos', function(req, res) {
    res.marko(require(__dirname + '../../views/perfil/profissional/perfil_profissional_servicos.marko'));
});

routes.post('/perfil_profissional_servicos', upload.single('img'), function(req, res) {
    res.marko(require(__dirname + '../../views/perfil/profissional/perfil_profissional_servicos.marko'));
});

// Solicitacoes Profissional
routes.get('/perfil_profissional_solicitacoes.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional_solicitacoes.html'));
});

routes.get('/solicitacoes_profissional', solicitacoesProfissionalController.listaSolicitacoes());

routes.delete('/solicitacoes_profissional/:id', solicitacoesProfissionalController.removeSolicitacao());


/*------------------------------------------------------------ Rotas Cliente ------------------------------------------------------------*/
routes.get('/cliente_index.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/cliente_index.html'));
});

routes.get('/cliente_about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/cliente_about.html'));
});

routes.get('/cliente_contact.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/cliente_contact.html'));
});

routes.get('/perfil_cliente', usuarioClienteController.listarCliente());

// Cadastro Cliente
routes.get('/cadastrar_cliente', function(req, res) {
    res.marko(require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), { cliente: {} });
});

routes.post('/cadastrar_cliente', UsuariosCliente.validacoes(), usuarioClienteController.cadastrarCliente());

// Solicitacoes Cliente
routes.get('/solicitacoes_cliente', solicitacoesClienteController.listaSolicitacoes());

routes.delete('/solicitacoes_cliente/:id', solicitacoesClienteController.removeSolicitacao());


module.exports = routes;