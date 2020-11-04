const conexao = require('../config/conexao');

class Usuario {

    constructor(conexao) {
        this._conexao = conexao;
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            const drop = 'DROP VIEW IF EXISTS viewUsuarios'

            const create = `CREATE VIEW viewUsuarios AS
                            SELECT distinct 
                                id, 
                                nome, 
                                endereco, 
                                redes_sociais, 
                                celular, 
                                telefone, 
                                descricao, 
                                email, 
                                senha, 
                                1 as tipo 
                            FROM usuariosProfissional
                            UNION ALL
                            SELECT distinct 
                                id, 
                                nome, 
                                endereco, 
                                '-' as redes_sociais, 
                                celular, 
                                '-' as telefone, 
                                '-' as descricao, 
                                email, 
                                senha, 
                                2 as tipo 
                            FROM usuariosCliente`

            const select = 'SELECT * FROM viewUsuarios WHERE email = ?'

            conexao.query(drop);
            conexao.query(create);
            conexao.query(select, [email], (erro, usuario) => {
                if (erro) {
                    return reject('Não foi possível encontrar o usuário! ' + erro);
                }

                console.log("busca email " + JSON.stringify(usuario[0]))
                return resolve(usuario);
            })
        });
    }
}

module.exports = Usuario;