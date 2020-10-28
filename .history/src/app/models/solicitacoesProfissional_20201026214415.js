// const conexao = require('../../config/conexao')

class SolicitacoesProfissional {

    constructor(conexao) {
        this._db = conexao;
    }

    listarTodos(solicitacoesProfissional) {
        const sql = 'SELECT * FROM solicitacoesProfissional'

        conexao.query(sql, solicitacoesProfissional, (erro, resultado) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultado)
            }
        })
    }

}

module.exports = SolicitacoesProfissional;