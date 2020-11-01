const UsuariosCliente = require('../models/usuariosCliente');
const conexao = require('../config/conexao');

class UsuarioClienteController {
    cadastrarCliente() {
        return function(req, resp) {
            const form = req.body;
            console.log(form);

            const usuariosCliente = new UsuariosCliente(conexao);
            usuariosCliente.adiciona(form)
                // .then(resp.redirect('/cadastrar_cliente'))
                .then(resp.redirect('/cliente_index.html', function(req, res) {
                        res.sendFile(path.resolve(__dirname + '../../views/perfil/cliente/cliente_index.html'));
                    })
                    .catch(erro => console.log(erro));
                };
        }

        alterarCliente() {

        }
    }

    module.exports = UsuarioClienteController