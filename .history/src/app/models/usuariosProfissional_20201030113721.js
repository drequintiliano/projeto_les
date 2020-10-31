const conexao = require('../../infra/conexao')

class UsuariosProfissional {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(usuariosProfissional) {
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

module.exports = UsuariosProfissional;