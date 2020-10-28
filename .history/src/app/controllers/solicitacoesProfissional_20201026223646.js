const SolicitacoesProfissional = require('../models/solicitacoesProfissional')

module.exports = app => {
    app.get('/solicitacoesProfissional', (req, res) => {
        SolicitacoesProfissional.listarTodos(res);
    })
}