const solicitacoesProfissional = require('../models/solicitacoesProfissional')
const routes = require('express').Router();

module.exports = routes => {
    routes.get('/solicitacoesProfissional', (req, res) => {
        solicitacoesProfissional.listarTodos(res);
    })

    // app.get('/atendimentos/:id', (req, res) => {
    //     const id = parseInt(req.params.id)

    //     Atendimento.buscaPorId(id, res)
    // })

    // app.post('/atendimentos', (req, res) => {
    //    const atendimento = req.body

    //     Atendimento.adiciona(atendimento, res)
    // }) 

    // app.patch('/atendimentos/:id', (req, res) => {
    //     const id = parseInt(req.params.id)
    //     const valores = req.body

    //     Atendimento.altera(id, valores, res)
    // })

    // app.delete('/atendimentos/:id', (req, res) => {
    //     const id = parseInt(req.params.id)

    //     Atendimento.deleta(id, res)
    // })
}