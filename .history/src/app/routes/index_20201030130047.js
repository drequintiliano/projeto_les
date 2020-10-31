const routes = require('express').Router();
const path = require('path');
const getIndex = require('./../controllers/get');
const SolicitacoesProfissional = require('../models/solicitacoesProfissional');
const SolicitacoesCliente = require('../models/solicitacoesCliente');
const conexao = require('../config/conexao');
const UsuariosCliente = require('../models/usuariosCliente');


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
    res.marko(require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'));
});


/*------------------------------ Rotas Perfil Profissional ------------------------------*/
routes.get('/perfil_profissional.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional.html'));
});

routes.get('/perfil_profissional_servicos.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional_servicos.html'));
});

routes.get('/perfil_profissional_solicitacoes.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/profissional/perfil_profissional_solicitacoes.html'));
});


routes.get('/solicitacoes_profissional', function(req, res) {

    const solicitacoesProfissional = new SolicitacoesProfissional(conexao);
    solicitacoesProfissional.listarTodos()
        .then(solicitacoes => res.marko(
            require('../views/perfil/profissional/perfil_profissional_solicitacoes.marko'), {
                solicitacoes: solicitacoes,
            }
        ))
        .catch(erro => console.log(erro));
});


/*------------------------------ Rotas Perfil Cliente ------------------------------*/
routes.get('/perfil_cliente.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/perfil_cliente.html'));
});


routes.get('/perfil_cliente_solicitacoes.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/perfil_cliente_solicitacoes.html'));
});


routes.get('/solicitacoes_cliente', function(req, res) {

    const solicitacoesCliente = new SolicitacoesCliente(conexao);
    solicitacoesCliente.listarTodos()
        .then(solicitacoes => res.marko(
            require('../views/perfil/cliente/perfil_cliente_solicitacoes.marko'), {
                solicitacoes: solicitacoes,
            }
        ))
        .catch(erro => console.log(erro));
});

routes.delete('/solicitacoes_cliente/:id', function(req, resp) {
    const id = req.params.id;

    const solicitacoesCliente = new SolicitacoesCliente(conexao);
    solicitacoesCliente.remove(id)
        .then(() => resp.status(200).end())
        .catch(erro => console.log(erro));
});

routes.post('/cadastrar_cliente', function(req, resp) {
    console.log(req.body);
    const usuariosCliente = new UsuariosCliente(conexao);
    usuariosCliente.adiciona(req.body)
        // .then(resp.redirect('/'))
        .then(resp.send(alert(`Obrigado ${req.body,nome}, cadastro feito com sucesso!`)))
        .catch(erro => console.log(erro));
})

module.exports = routes;