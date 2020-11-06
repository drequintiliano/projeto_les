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
            console.log("listar prof: " + req.session.passport.user.idUsuario)

            const id = req.session.passport.user.idUsuario;

            const usuariosCliente = new UsuariosCliente(conexao);
            usuariosCliente.procurarId(id)
                .then(cliente => resp.marko(
                    require('../views/perfil/cliente/perfil_cliente.marko'), {
                        cliente: cliente[0],
                    },
                    console.log("listar cliente: " + cliente)
                ))
                .catch(erro => console.log(erro));
        }
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioClienteController