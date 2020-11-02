const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');
const { check } = require('express-validator/check');
const { validationResult } = require('express-validator/check');


class UsuarioProfissionalController {

    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;
            const email = req.body.email;

            const usuariosProfissional = new UsuariosProfissional(conexao);

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return resp.marko(
                    require('/cadastrar_profissional'), {
                        profissional: {},
                        errosValidacao: erros.array()
                    }
                );
            }

            usuariosProfissional.procurarEmail(email).then((usuariosProfissional) => {
                if (email) {
                    console.log("Email informado ja existe, por favor insira outro.");
                    const erroEmail = 'Email informado ja existe, por favor insira outro.';

                    return resp.marko(require('/cadastrar_profissional'), { profissional: {}, errosValidacao: erros.array(), erroEmail })
                } else {
                    console.log(form);
                    usuariosProfissional.adiciona(form)
                        .then(resp.redirect('/profissional_index.html'))
                        .catch(erro => console.log(erro));
                }
            })
        };
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioProfissionalController