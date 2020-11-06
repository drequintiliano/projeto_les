const conexao = require("../config/conexao");

class Servicos {

    constructor(conexao) {
        this._conexao = conexao;
    }

    async listarServico(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT 
                            A.id,
                            A.id_categoria,
                            A.titulo,
                            A.descricao,
                            A.quantidade_avaliacoes,
                            B.celular,
                            B.email,
                            B.nome,
                            A.caminho_img   
                        FROM servicos A
                        JOIN usuarios_profissional B ON B.id = A.id_profissional
                        WHERE A.id_categoria = ?`

            conexao.query(sql, [id], (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar serviços');
                } else {
                    console.log("listar serviços: " + JSON.stringify(resultados))
                    return resolve(resultados);
                }
            })
        });
    }

}

module.exports = Servicos;