const routes = require('express').Router();

routes.get('/cadastro.html', function(req, res) {
    res.sendFile('../views/cadastro/cadastro.html')
});

module.exports = routes;