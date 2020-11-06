const Servicos = require('../models/servicos');
const conexao = require('../config/conexao');

class ServicosController {

    listarServicosDomesticos() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarServico(1)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_servicos.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }

    listarAssistencia() {
        return function(req, res) {

            const servicos = new Servicos(conexao);
            servicos.listarServico(2)
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
            servicos.listarServico(3)
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
            servicos.listarServico(4)
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
            servicos.listarServico(5)
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
            servicos.listarServico(6)
                .then(servicos => res.marko(
                    require('../views/categorias/cat_consultorias.marko'), {
                        servicos: servicos,
                    }
                ))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = ServicosController;