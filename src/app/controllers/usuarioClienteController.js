const UsuariosCliente = require('../models/usuariosCliente');
const conexao = require('../config/conexao');
const { validationResult } = require('express-validator');

class UsuarioClienteController {

    cadastrarCliente() {
        return function(req, resp) {
            const form = req.body;

            const usuariosCliente = new UsuariosCliente(conexao);

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return resp.marko(
                    require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), {
                        cliente: {},
                        errosValidacao: erros.array(),
                        sucesso: false
                    }
                );
            } else {
                console.log("sucesso: " + form);
                usuariosCliente.adiciona(form)
                    .then(
                        resp.marko(
                            require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), {
                                cliente: {},
                                sucesso: true,
                            }
                        ))
                    .catch(erro => console.log(erro))
            }
        };
    }

    listarCliente() {
        return function(req, resp) {
            const usuariosCliente = new UsuariosCliente(conexao);
            console.log("listar prof: " + req.session.passport.user.idUsuario);
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const id = req.session.passport.user.idUsuario;

            usuariosCliente.procurarId(id)
                .then(cliente => resp.marko(
                    require('../views/perfil/cliente/perfil_cliente.marko'), {
                        cliente: cliente[0],
                        usuarioSessao: usuarioSessao
                    },
                    console.log("listar cliente: " + cliente)
                ))
                .catch(erro => console.log(erro));
        }
    }

    editarCliente() {
        return function(req, resp) {
            const usuariosCliente = new UsuariosCliente(conexao);
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            console.log("listar cliente: " + req.session.passport.user.idUsuario);
            const form = req.body;
            const id = req.session.passport.user.idUsuario;

            usuariosCliente.editar(form);

            usuariosCliente.procurarId(id)
                .then(cliente => resp.marko(
                    require('../views/perfil/cliente/perfil_cliente.marko'), {
                        cliente: cliente[0],
                        usuarioSessao: usuarioSessao
                    },
                ))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = UsuarioClienteController