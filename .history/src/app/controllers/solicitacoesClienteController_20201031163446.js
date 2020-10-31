const SolicitacoesCliente = require('../models/solicitacoesCliente');
const conexao = require('../config/conexao');

class SolicitacaoClienteController {
    listaSolicitacoes() {
        return function(req, res) {

            const solicitacoesCliente = new SolicitacoesCliente(conexao);
            solicitacoesCliente.listarTodos()
                .then(solicitacoes => res.marko(
                    require('../views/perfil/cliente/perfil_cliente_solicitacoes.marko'), {
                        solicitacoes: solicitacoes,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = SolicitacaoClienteController