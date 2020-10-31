const conexao = require('../../infra/conexao')

class UsuariosCliente {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(cliente) {
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


}

module.exports = UsuariosCliente;