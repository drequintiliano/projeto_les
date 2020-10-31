const SolicitacoesProfissional = require('../models/solicitacoesProfissional');
const conexao = require('../config/conexao');

class solicitacoesProfissionalController {

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
}

module.exports = solicitacoesProfissionalController