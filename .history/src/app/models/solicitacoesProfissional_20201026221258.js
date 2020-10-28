// const conexao = require('../../config/conexao')

class SolicitacoesProfissional {

    constructor(conexao) {
        this._db = conexao;
    }

    listarTodos() {
        // const sql = 'SELECT * FROM solicitacoesProfissional'

        // conexao.query(sql, solicitacoesProfissional, (erro, resultado) => {
        //     if (erro) {
        //         console.log(erro);
        //     } else {
        //         console.log(resultado)
        //     }
        // })
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM solicitacoesProfissional ORDER BY dataSolicitacao DESC',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar as solicitações profissional!');

                    return resolve(resultados);
                }
            )
        });
    }

}

module.exports = SolicitacoesProfissional;