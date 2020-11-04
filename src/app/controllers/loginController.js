const passport = require("passport");

class Login {

    efetuaLogin() {
        return function(req, resp, next) {

            // Lógia de login
            const passport = req.passport
            passport.authenticate('local', (erro, user, info) => {
                if (info) {
                    console.log("info: " + info.mensagem)
                    console.log("user: " + user[0])
                    return resp.marko(require(__dirname + '../../views/login.marko'));
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

                    console.log("redirecionar para: " + user[0].tipo)
                    if (user[0].tipo == 1) {
                        return resp.redirect('/perfil_profissional.html')
                    } else {
                        return resp.redirect('perfil_cliente.html')
                    }
                });
            })(req, resp, next);
        };
    }
}

module.exports = Login;