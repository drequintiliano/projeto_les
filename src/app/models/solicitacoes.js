const conexao = require('../config/conexao');

class Solicitacoes {

    constructor(conexao) {
        this._conexao = conexao;
    }

    adiciona(solicitacao) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO solicitacoes (
                data_solicitacao,
                hora_solicitacao,
                id_profissional,
                id_categoria,
                id_cliente,
                id_servico,
                id_status                
            ) VALUES (?,?,?,?,?,?,?)`;

            const array = [
                solicitacao.data,
                solicitacao.hora,
                solicitacao.idProfissional,
                solicitacao.idCategoria,
                solicitacao.idCliente,
                solicitacao.idServico,
                1
            ];

            conexao.query(sql, array, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel adicionar solicitacao' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    async listarSolicitacoesCliente(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT 
                            A.id,
                            A.id_servico,
                            A.data_solicitacao,
                            A.hora_solicitacao,
                            B.nome,
                            D.descricao as categoria,
                            B.celular,
                            B.email,
                            A.id_status,
                            E.descricao as status
                        FROM solicitacoes A 
                        JOIN usuarios_profissional B ON B.id = A.id_profissional
                        JOIN usuarios_cliente C ON C.id = A.id_cliente
                        JOIN categorias D ON D.id = A.id_categoria
                        JOIN solicitacoes_status E ON E.id = A.id_status
                        WHERE C.id = ?
                        ORDER BY A.data_solicitacao`

            conexao.query(sql, [id], (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar solicitações cliente');
                } else {
                    return resolve(resultados);
                }
            })
        });
    }

    async listarSolicitacoesProfissional(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT 
                            A.id,
                            A.id_servico,
                            F.titulo,
                            A.data_solicitacao,
                            A.hora_solicitacao,
                            C.nome,
                            D.descricao,
                            C.celular,
                            C.email,
                            C.endereco,
                            E.descricao,
                            A.id_status,
                            E.descricao as status
                        FROM solicitacoes A 
                        JOIN usuarios_profissional B ON B.id = A.id_profissional
                        JOIN usuarios_cliente C ON C.id = A.id_cliente
                        JOIN categorias D ON D.id = A.id_categoria
                        JOIN solicitacoes_status E ON E.id = A.id_status
                        JOIN servicos F on F.id = A.id_servico
                        WHERE A.id_profissional = ?
                        ORDER BY A.data_solicitacao`

            conexao.query(sql, [id], (erro, resultados) => {
                if (erro) {
                    return reject('Não foi possivel listar solicitações profissional');
                } else {
                    return resolve(resultados);
                }
            })
        });
    }

    atualizarStatus(id) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE solicitacoes
                        SET id_status = 4
                        WHERE id =?`

            conexao.query(sql, id, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel avaliar servico' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    confirmarSolicitacao(id) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE solicitacoes
                        SET id_status = 2
                        WHERE id =?`

            conexao.query(sql, id, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel avaliar servico' + erro);
                } else {
                    console.log("confirmar solicitacao: " + JSON.stringify(resultados));
                    return resolve();
                }
            })
        })
    }

    cancelarSolicitacao(id) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE solicitacoes
                        SET id_status = 3
                        WHERE id_servico =?`

            conexao.query(sql, id, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel cancelar solicitacao' + erro);
                } else {
                    return resolve();
                }
            })
        })
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM solicitacoes WHERE id = ?'

            conexao.query(sql, [id], (erro) => {
                if (erro) {
                    return reject('Não foi possível remover a solicitacao ' + erro);
                }
                return resolve();
            });
        });
    }


}

module.exports = Solicitacoes;