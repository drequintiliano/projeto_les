const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');

class UsuarioProfissionalController {

    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;
            const email = req.body.email;
            console.log(form);

            const usuariosProfissional = new UsuariosProfissional(conexao);

            usuariosProfissional.procurarEmail(email).then((usuariosProfissional) => {
                if (email) {
                    const erro = "Email informado ja existe, por favor insira outro";
                    resp.render('/cadastrar_profissional', { erro: erro });
                } else {
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