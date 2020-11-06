const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');
const { validationResult } = require('express-validator');
const multer = require('multer');

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
            console.log("listar prof: " + req.session.passport.user.idUsuario)

            const id = req.session.passport.user.idUsuario;

            const usuariosProfissional = new UsuariosProfissional(conexao);
            usuariosProfissional.procurarId(id)
                .then(profissional => resp.marko(
                    require('../views/perfil/profissional/perfil_profissional.marko'), {
                        profissional: profissional[0],
                    },
                    console.log("listar profissional: " + profissional)
                ))
                .catch(erro => console.log(erro));
        }
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioProfissionalController