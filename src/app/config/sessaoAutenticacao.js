const { v4: uuidv4 } = require('uuid');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Usuario = require('../models/usuario');
const conexao = require('../config/conexao');

module.exports = (app) => {

    // configuração da sessão e da autenticação.
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'senha'
        },
        (email, senha, done) => {
            const usuario = new Usuario(conexao);
            usuario.buscaPorEmail(email)
                .then(user => {

                    if (!user[0] || senha != user[0].senha) {
                        console.log("entrou if: " + user[0])
                        return done(null, false, {
                            mensagem: 'Login e senha incorretos!'
                        });
                    }

                    return done(null, user);
                })
                .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((user, done) => {
        const usuarioSessao = {
            idUsuario: user[0].id,
            nome: user[0].nome,
            email: user[0].email
        };

        console.log("usuario sessao: " + JSON.stringify(user));
        console.log("usuario sessao id: " + usuarioSessao.idUsuario + " email: " + usuarioSessao.email)
        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    app.use(sessao({
        secret: 'node projeto',
        genid: function(req) {
            return uuidv4();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, resp, next) {
        req.passport = passport;
        next();
    });
};