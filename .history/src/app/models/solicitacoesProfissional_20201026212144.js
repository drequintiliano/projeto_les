const conexao = require('../../infra/conexao')

class solicitacoesProfissional {
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