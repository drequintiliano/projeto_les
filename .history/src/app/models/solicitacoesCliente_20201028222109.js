// const conexao = require('../config/conexao')

const conexao = require("../config/conexao");

class SolicitacoesCliente {

    constructor(conexao) {
        this._conexao = conexao;
    }

    listarTodos() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM solicitacoesCliente ORDER BY dataSolicitacao DESC';
            conexao.query(sql, (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar solicitações');
                } else {
                    return resolve(resultados);
                }
            })
        });
    }
}

module.exports = SolicitacoesCliente;