const conexao = require('../../infra/conexao')

class UsuariosProfissional {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(usuariosProfissional) {
        return new Promise((resolve, reject) => {
            const sql = ''
            conexao.query(sql, (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar solicitações');
                } else {
                    return resolve(resultados);
                }
            })
        })
    }

    findAll()
}

module.exports = UsuariosProfissional;