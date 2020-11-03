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

                    console.log("redirecionar...")
                    console.log("red. user:" + user)
                    return resp.redirect('/profissional_index.html')
                });
            })(req, resp, next);
        };
    }
}

module.exports = Login;