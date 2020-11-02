const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');
const { validationResult } = require('express-validator/check');


class UsuarioProfissionalController {

    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;
            const email = req.body.email;

            const usuariosProfissional = new UsuariosProfissional(conexao);

            const erros = validationResult(req);

            usuariosProfissional.procurarEmail(email).then((usuariosProfissional) => {
                if (email) {
                    console.log("Email informado ja existe, por favor insira outro.");

                    return resp.marko(
                        require(__dirname + '../../views/cadastro/cadastrar_profissional.marko'), {
                            profissional: {},
                            erroEmail: true
                        }
                    );
                }
            })

            if (!erros.isEmpty()) {
                return resp.marko(
                    require(__dirname + '../../views/cadastro/cadastrar_profissional.marko'), {
                        profissional: {},
                        errosValidacao: erros.array()
                    }
                );
            } else {
                console.log(form);
                usuariosProfissional.adiciona(form)
                    .then(
                        resp.marko(
                            require(__dirname + '../../views/cadastro/cadastrar_profissional.marko'), {
                                profissional: {},
                                sucesso: true
                            }
                        ))
                    .catch(erro => console.log(erro))
            }
        };
    }

    alterarProfissional() {

    }
}

module.exports = UsuarioProfissionalController