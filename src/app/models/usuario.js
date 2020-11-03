const conexao = require('../config/conexao');

class Usuario {

    constructor(conexao) {
        this._conexao = conexao;
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `
                    SELECT *
                    FROM usuarios
                    WHERE email = ?
                `, [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }

                    console.log("busca email " + JSON.stringify(usuario[0]))
                    return resolve(usuario);
                }
            )
        });
    }
}

module.exports = Usuario;