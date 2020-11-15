const Servicos = require('../models/servicos');
const Solicitacoes = require('../models/solicitacoes');
const conexao = require('../config/conexao');
const moment = require('moment');

class ServicosController {

    avaliarServico() {
        return function(req, resp) {
            const form = req.body;
            const idCliente = req.body.idCliente;
            const idServico = req.body.idServico;
            const idSolicitacao = req.body.idSolicitacao;
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const solicitacoes = new Solicitacoes(conexao);
            const servicos = new Servicos(conexao);

            console.log("cliente id: " + idCliente + " solicitacao id: " + idSolicitacao);
            console.log("formulario: " + JSON.stringify(form));

            servicos.atualizarQuantidadeAvaliacoes(idServico);

            servicos.cadastrarServicosAvaliacoes(form)
                .then(
                    solicitacoes.atualizarStatus(idSolicitacao)
                    .then(
                        solicitacoes.listarSolicitacoesCliente(idCliente)
                        .then(solicitacoes => resp.marko(
                            require('../views/perfil/cliente/perfil_cliente_solicitacoes.marko'), {
                                solicitacoes: solicitacoes.map((item) => {
                                    let dataFormatada = moment(item.data_solicitacao, 'DD/MM/YYYY').format('DD/MM/YYYY');

                                    return {
                                        id: item.id,
                                        id_servico: item.id_servico,
                                        data_solicitacao: item.data_solicitacao = dataFormatada,
                                        hora_solicitacao: item.hora_solicitacao,
                                        nome: item.nome,
                                        categoria: item.categoria,
                                        celular: item.celular,
                                        email: item.email,
                                        id_status: item.id_status,
                                        status: item.status
                                    }
                                }),
                                usuarioSessao: usuarioSessao,
                                avaliar: true
                            }
                        )).catch(erro => console.log(erro))
                    ).catch(erro => console.log(erro))
                ).catch(erro => console.log(erro));
        };
    }

    listarServicosDomesticos() {
        return function(req, res) {
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user

            const servicos = new Servicos(conexao);
            servicos.listarCategoriaServico(1)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_servicos.marko'), {
                        servicos: servicos,
                        usuarioSessao: usuarioSessao
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarAssistencia() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarCategoriaServico(2)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_assitencias.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarEventos() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarCategoriaServico(3)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_eventos.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarReformas() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarCategoriaServico(4)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_reformas.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarAulas() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarCategoriaServico(5)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_aulas.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarConsultorias() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarCategoriaServico(6)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_consultorias.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarServicosProfissional() {
        return function(req, res) {
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const id = usuarioSessao.idUsuario;

            console.log("id profissional sessao: " + id);

            const servicos = new Servicos(conexao);
            servicos.listarServicoDoProfissional(id)
                .then(servicos => res.marko(
                    require('../views/perfil/profissional/perfil_profissional_servicos.marko'), {
                        servicos: servicos,
                        usuarioSessao
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    adicionarServicoProfissional() {
        return function(req, res) {
            const form = req.body;
            const usuarioSessao = req.session.passport == undefined ? undefined : req.session.passport.user;
            const id = usuarioSessao.idUsuario;

            console.log("id profissional sessao: " + id);
            console.log("inserir servico dados form: " + JSON.stringify(form));

            const servicos = new Servicos(conexao);
            servicos.cadastrarServicos(form)
                .then(
                    servicos.listarServicoDoProfissional(id)
                    .then(servicos => res.marko(
                        require('../views/perfil/profissional/perfil_profissional_servicos.marko'), {
                            servicos: servicos,
                            usuarioSessao
                        }
                    ))
                    .catch(erro => console.log(erro))
                ).catch(erro => console.log(erro));
        }
    }
}

module.exports = ServicosController;