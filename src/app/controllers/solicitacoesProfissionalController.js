const SolicitacoesProfissional = require('../models/solicitacoesProfissional');
const conexao = require('../config/conexao');

class SolicitacoesProfissionalController {

    listaSolicitacoes() {
        return function(req, res) {

            const solicitacoesProfissional = new SolicitacoesProfissional(conexao);
            solicitacoesProfissional.listarTodos()
                .then(solicitacoes => res.marko(
                    require('../views/perfil/profissional/perfil_profissional_solicitacoes.marko'), {
                        solicitacoes: solicitacoes,
                    }
                ))
                .catch(erro => console.log(erro));
        };
    }

    removeSolicitacao() {
        return function(req, resp) {
            const id = req.params.id;

            const solicitacoesProfissional = new SolicitacoesProfissional(conexao);
            solicitacoesProfissional.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = SolicitacoesProfissionalController