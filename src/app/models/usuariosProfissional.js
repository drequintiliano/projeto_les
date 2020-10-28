const conexao = require('../../infra/conexao')

class usuariosProfissional {
    insert(usuariosProfissional) {
        const sql = 'INSERT INTO usuariosProfissional SET ?'

        conexao.query(sql, usuariosProfissional, (erro, resultado) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultado)
            }
        })
    }

    findAll()
}