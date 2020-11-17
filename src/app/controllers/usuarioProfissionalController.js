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
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            console.log("listar prof: " + req.session.passport.user.idUsuario)
            const id = req.session.passport.user.idUsuario;

            const usuariosProfissional = new UsuariosProfissional(conexao);
            usuariosProfissional.procurarId(id)
                .then(profissional => resp.marko(
                    require('../views/perfil/profissional/perfil_profissional.marko'), {
                        profissional: profissional[0],
                        usuarioSessao: usuarioSessao
                    },
                    console.log("listar profissional: " + profissional)
                ))
                .catch(erro => console.log(erro));
        }
    }

    editarProfissional() {
        return function(req, resp) {
            const usuariosProfissional = new UsuariosProfissional(conexao);
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            console.log("listar prof: " + req.session.passport.user.idUsuario);
            const form = req.body;
            const id = req.session.passport.user.idUsuario;

            usuariosProfissional.editar(form);

            usuariosProfissional.procurarId(id)
                .then(profissional => resp.marko(
                    require('../views/perfil/profissional/perfil_profissional.marko'), {
                        profissional: profissional[0],
                        usuarioSessao: usuarioSessao
                    },
                ))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = UsuarioProfissionalController