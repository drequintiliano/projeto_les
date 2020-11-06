const passport = require("passport");
const UsuarioProfissional = require('../models/usuariosProfissional');
const UsuarioCliente = require('../models/usuariosCliente');
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

                    console.log("redirecionar para: " + user[0].tipo + " user: " + user[0].id);

                    const tipo = user[0].tipo
                    const id = user[0].id

                    if (tipo == 1) {
                        const usuarioProfissional = new UsuarioProfissional(conexao);

                        console.log('profissional logado sessao: ' + JSON.stringify(req.session.passport.user.idUsuario))
                        console.log('profissional logado sessao: ' + JSON.stringify(req.session.passport.user))

                        return usuarioProfissional.procurarId(id)
                            .then(profissional => resp.marko(
                                require(__dirname + '../../views/perfil/profissional/perfil_profissional.marko'), {
                                    profissional: profissional[0],
                                }
                            ))
                            .catch(erro => console.log(erro));
                    } else {
                        const usuarioCliente = new UsuarioCliente(conexao);

                        console.log('usuario logado sessao: ' + JSON.stringify(req.session.passport.user.idUsuario))
                        console.log('usuario logado sessao: ' + JSON.stringify(req.session.passport.user))

                        return usuarioCliente.procurarId(id)
                            .then(cliente => resp.marko(
                                require(__dirname + '../../views/perfil/cliente/perfil_cliente.marko'), {
                                    cliente: cliente[0],
                                }
                            ))
                            .catch(erro => console.log(erro));
                    }
                });
            })(req, resp, next);
        };
    }
}

module.exports = Login;