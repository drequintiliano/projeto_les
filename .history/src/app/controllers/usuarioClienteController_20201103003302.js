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
                console.log(form);
                usuariosCliente.adiciona(form)
                    .then(
                        resp.marko(
                            require(__dirname + '../../views/cadastro/cadastrar_cliente.marko'), {
                                profissional: {},
                                sucesso: true,
                            }
                        ))
                    .catch(erro => console.log(erro))
            }
        };
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioClienteController