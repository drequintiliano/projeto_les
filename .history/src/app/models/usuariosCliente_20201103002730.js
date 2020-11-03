const conexao = require('../config/conexao');
const { check } = require('express-validator');

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
                    return reject('Não foi possivel adicionar cliente' + erro);
                }
                return resolve();
            })
        })
    }

    procurarEmail(email) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `
                    SELECT *
                    FROM usuariosCliente
                    WHERE email = ?
                `, [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }

                    return resolve(usuario);
                }
            )
        });
    }

    static validacoes() {
        return [
            check('senha').isLength({ min: 5 }).withMessage('A senha precisa ter no mínimo 5 caracteres!'),
            check('nome').isLength({ min: 5 }).withMessage('O nome precisa ter no mínimo 5 caracteres!')
        ];
    }
}

module.exports = UsuariosCliente;