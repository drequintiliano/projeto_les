const conexao = require("../config/conexao");

class Servicos {

    constructor(conexao) {
        this._conexao = conexao;
    }

    totalizarServicos() {
        const drop1 = 'DROP TABLE IF EXISTS tmp_servicos';
        const drop2 = 'DROP TABLE IF EXISTS tmp_servicos_avaliacoes';
        const drop3 = 'DROP VIEW IF EXISTS view_comentarios';

        const create1 = `CREATE TABLE tmp_servicos AS
                        SELECT 
                            A.id,
                            A.id_categoria,
                            C.descricao as categoria_desc,
                            A.id_profissional,                            
                            A.titulo,
                            A.descricao,
                            A.quantidade_avaliacoes,
                            B.celular,
                            B.email,
                            B.nome,
                            A.caminho_img,
                            A.qualidade,
                            A.pontualidade,
                            A.execucao,
                            A.descricao as comentarios   
                        FROM servicos A
                        JOIN usuarios_profissional B ON B.id = A.id_profissional
                        JOIN categorias C ON C.id = A.id_categoria
                        ORDER BY quantidade_avaliacoes DESC`;

        const create2 = `CREATE TABLE tmp_servicos_avaliacoes AS
                        select
                            id_servico,
                            format((sum(qualidade)/sum(avaliacoes)), 2) as qualidade,
                            format((sum(pontualidade)/sum(avaliacoes)), 2) as pontualidade,
                            format((sum(execucao)/sum(avaliacoes)), 2) as execucao,
                            format((sum(avaliacoes)), 0) as quantidade_avaliacoes
                        FROM servicos_avaliacoes
                        GROUP BY id_servico`;

        const create3 = `CREATE VIEW view_comentarios AS
                        SELECT 
                            A.id_servico,
                            group_concat(' ', A.comentarios) AS comentarios
                        FROM servicos_avaliacoes A 
                        group by id_servico`;

        const update1 = `UPDATE tmp_servicos A
                        JOIN tmp_servicos_avaliacoes B ON B.id_servico = A.id
                        SET A.qualidade = B.qualidade, A.pontualidade = B.pontualidade, A.execucao = B.execucao, A.quantidade_avaliacoes = B.quantidade_avaliacoes`;

        const update2 = `UPDATE tmp_servicos A
                        JOIN view_comentarios B on B.id_servico = A.id
                        SET A.comentarios = B.comentarios`;

        conexao.query(drop1);
        conexao.query(drop2);
        conexao.query(drop3);
        conexao.query(create1);
        conexao.query(create2);
        conexao.query(create3);
        conexao.query(update1);
        conexao.query(update2);
    }

    async listarCategoriaServico(id) {
        return new Promise((resolve, reject) => {

            this.totalizarServicos();

            const sql = `SELECT * FROM  tmp_servicos
                        WHERE id_categoria = ?
                        ORDER BY quantidade_avaliacoes DESC`;

            conexao.query(sql, [id], (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar serviços' + erro);
                } else {
                    console.log("listar serviços: " + JSON.stringify(resultados))
                    return resolve(resultados);
                }
            })
        });
    }

    listarServicoDoProfissional(id) {
        return new Promise((resolve, reject) => {

            this.totalizarServicos();

            const sql = `SELECT * FROM  tmp_servicos
                        WHERE id_profissional = ?
                        ORDER BY quantidade_avaliacoes DESC`;

            conexao.query(sql, [id], (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar serviços' + erro);
                } else {
                    console.log("listar serviços: " + JSON.stringify(resultados))
                    return resolve(resultados);
                }
            })
        });
    }

    cadastrarServicos(servico) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO servicos (                   
                    titulo,
                    caminho_img,
                    id_profissional,
                    id_categoria,
                    descricao,
                    qualidade,
                    pontualidade,
                    execucao,
                    quantidade_avaliacoes                
                ) VALUES (?,?,?,?,?,?,?,?,?)`;

            const array = [
                servico.titulo,
                servico.caminho_img,
                servico.idProfissional,
                servico.categoria,
                servico.descricao,
                5,
                5,
                5,
                0
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel inserir servico' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    cadastrarServicosAvaliacoes(servico) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO servicos_avaliacoes (                   
                    id_cliente,
                    id_servico,
                    qualidade,
                    pontualidade,
                    execucao,
                    avaliacoes,
                    comentarios                
                ) VALUES (?,?,?,?,?,?,?)`;

            const array = [
                servico.idCliente,
                servico.idServico,
                servico.qualidade,
                servico.pontualidade,
                servico.execucao,
                1,
                servico.comentarios
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel avaliar servico' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    atualizarQuantidadeAvaliacoes(id) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE servicos
                        SET quantidade_avaliacoes = quantidade_avaliacoes+1
                        WHERE id = ?`

            conexao.query(sql, id, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel avaliar servico' + erro);
                } else {
                    console.log("atualizou qtde avaliacaoes: " + resultados)
                    return resolve();
                }
            })
        })
    }
}

module.exports = Servicos;