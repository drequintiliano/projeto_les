const conexao = require('../config/conexao');
const { check } = require('express-validator');
class UsuariosProfissional {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(profissional) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuariosProfissional (
                nome,
                celular,
                telefone,
                endereco,
                cidade,
                redes_sociais,
                descricao,
                email,
                senha
            ) VALUES (?,?,?,?,?,?,?,?,?)`;

            const array = [
                profissional.nome,
                profissional.celular,
                profissional.telefone,
                profissional.endereco,
                profissional.cidade,
                profissional.redes_sociais,
                profissional.descricao,
                profissional.email,
                profissional.senha
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel adicionar profissional' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    procurarEmail(email) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `
                    SELECT *
                    FROM usuariosProfissional
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

    procurarId(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM usuariosProfissional WHERE id = ?'

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
                const usuariosProfissional = new UsuariosProfissional(conexao);

                return usuariosProfissional.procurarEmail(value).then(user => {
                    if (!usuariosProfissional.isEmpty(user)) {
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

module.exports = UsuariosProfissional;