const conexao = require('../config/conexao');
const { check } = require('express-validator');

class UsuariosCliente {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(cliente) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuarios_cliente (
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

    editar(cliente) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE usuarios_cliente SET                   
                    nome = ?,
                    endereco = ?,
                    cidade = ?,
                    celular = ?
                    WHERE id = ?`;

            const array = [
                cliente.nome,
                cliente.endereco,
                cliente.cidade,
                cliente.celular,
                cliente.idCliente
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel editar usuarios_profissional' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    procurarId(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM usuarios_cliente WHERE id = ?'

            conexao.query(sql, [id], (erro, usuario) => {
                if (erro) {
                    return reject('Não foi possível encontrar o usuário! ' + erro);
                } else {
                    console.log("procurarId: " + JSON.stringify(usuario))
                    return resolve(usuario);
                }
            })
        });
    }

    procurarEmail(email) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `
                    SELECT *
                    FROM usuarios_cliente
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

    isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }


    static validacoes() {
        return [
            check('nome').isLength({ min: 5 }).withMessage('O nome precisa ter no mínimo 5 caracteres.'),
            check('email').custom(value => {
                const usuariosCliente = new UsuariosCliente(conexao);

                return usuariosCliente.procurarEmail(value).then(user => {
                    if (!usuariosCliente.isEmpty(user)) {
                        console.log("email ja existe: " + value)
                        return Promise.reject('O e-mail informado ja está em uso, por favor insira outro.');
                    }
                });
            }),
            check('senha').isLength({ min: 5 }).withMessage('A senha precisa ter no mínimo 5 caracteres.'),
            check('senha').custom((value, { req }) => {
                if (value !== req.body.confirmarSenha) {
                    console.log("senha: " + value)
                    console.log("confirmarSenha: " + req.body.confirmarSenha)
                    throw new Error('O campo "senha" e "confirmar senha" devem ser iguais.');
                }
                return true
            })
        ];
    }
}

module.exports = UsuariosCliente;