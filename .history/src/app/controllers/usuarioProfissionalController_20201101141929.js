const UsuariosProfissional = require('../models/usuariosProfissional');
const conexao = require('../config/conexao');

class UsuarioProfissionalController {
    cadastrarProfissional() {
        return function(req, resp) {
            const form = req.body;
            console.log(form);

            const usuariosProfissional = new UsuariosProfissional(conexao);
            usuariosProfissional.adiciona(form)
                // .then(resp.redirect('/cadastrar_cliente'))
                .then(resp.redirect('/profissional_index.html'))
                .catch(erro => console.log(erro));
        };
    }

    alterarCliente() {

    }
}

module.exports = UsuarioProfissionalController