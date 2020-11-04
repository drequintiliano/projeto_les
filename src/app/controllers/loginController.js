const passport = require("passport");
const UsuarioProfissional = require('../models/usuariosProfissional')
const conexao = require('../config/conexao');

class Login {

    efetuaLogin() {
        return function(req, resp, next) {

            // Lógia de login
            const passport = req.passport
            passport.authenticate('local', (erro, user, info) => {
                if (info) {
                    console.log("info: " + info.mensagem)
                    console.log("user: " + user[0])
                    return resp.marko(require(__dirname + '../../views/login.marko'), {
                        erro: true
                    });
                }

                if (erro) {
                    console.log("erro: " + erro)
                    return next(erro);
                }

                req.login(user, (erro) => {
                    if (erro) {
                        console.log("req.login erro: " + erro)
                        return next(erro);
                    }

                    console.log("redirecionar para: " + user[0].tipo + " id: " + user[0].tipo);
                    console.log("carregar user: " + JSON.stringify(user[0]));
                    const userDados = JSON.stringify(user[0]);
                    const parse = JSON.parse(userDados);
                    console.log("dados...")
                    console.log(user)
                    console.log(userDados)
                    console.log(parse)
                    console.log(parse.endereco)

                    const tipo = user[0].tipo
                    const id = user[0].id

                    if (tipo == 1) {
                        const usuarioProfissional = new UsuarioProfissional(conexao)

                        return usuarioProfissional.procurarId(id)
                            .then(profissional => resp.marko(
                                require(__dirname + '../../views/perfil/profissional/perfil_profissional.marko'), {
                                    profissional: profissional[0],
                                }
                            ))
                            .catch(erro => console.log(erro));
                    } else {
                        return resp.redirect('/perfil_cliente', {
                            cliente: userDados
                        })
                    }
                });
            })(req, resp, next);
        };
    }
}

module.exports = Login;