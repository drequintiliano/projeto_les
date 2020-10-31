const conexao = require('../config/conexao');

class UsuariosCliente {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(cliente) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuariosCliente (
                nome,
                celular,
                endereco,
                cidade,
                email,
                senha
            ) VALUES (?,?,?,?,?,?)`;

            const array = [
                cliente.nome,
                cliente.celular,
                cliente.endereco,
                cliente.cidade,
                cliente.email,
                cliente.senha
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel adicionar cliente');
                } else {
                    alert("Cadastro feito com sucesso!");
                    return resolve(resultados);
                }
            })
        })
    }


}

module.exports = UsuariosCliente;