const conexao = require('../../config/conexao')

class SolicitacoesProfissional {

    listarTodos() {
        const sql = 'SELECT * FROM solicitacoesProfissional ORDER BY dataSolicitacao DESC';

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

}

module.exports = new SolicitacoesProfissional;