const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');
const { validationResult } = require('express-validator');

class UsuarioProfissionalController {

    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;

            const usuariosProfissional = new UsuariosProfissional(conexao);

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return resp.marko(
                    require(__dirname + '../../views/cadastro/cadastrar_profissional.marko'), {
                        profissional: {},
                        errosValidacao: erros.array(),
                        sucesso: false
                    }
                );
            } else {
                console.log("sucesso: " + form);
                usuariosProfissional.adiciona(form)
                    .then(
                        resp.marko(
                            require(__dirname + '../../views/cadastro/cadastrar_profissional.marko'), {
                                profissional: {},
                                sucesso: true,
                            }
                        ))
                    .catch(erro => console.log(erro))
            }
        };
    }

    listarProfissional() {
        return function(req, resp) {
            const id = req.params.id;

            const usuariosProfissional = new UsuariosProfissional(conexao);
            usuariosProfissional.procurarId(id)
                .then(usuario => res.marko(
                    require('../views/perfil/cliente/perfil_profissional.marko'), {
                        profissional: usuario,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioProfissionalController