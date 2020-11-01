const conexao = require('../config/conexao');
class UsuariosProfissional {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(profissional) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO usuariosProfissional (
                nome,
                celular,
                endereco,
                cidade,
                email,
                senha
            ) VALUES (?,?,?,?,?,?)`;

            const array = [
                profissional.nome,
                profissional.celular,
                profissional.endereco,
                profissional.cidade,
                profissional.email,
                profissional.senha
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel adicionar profissional' + erro);
                }
                return resolve();
            })
        })
    }
}

module.exports = UsuariosProfissional;