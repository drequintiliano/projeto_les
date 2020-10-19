const routes = require('express').Router();
const get = require('./../controllers/get');
const path = require('path');

app.use(express.static(path.join(__dirname + '../app/public')));
app.use(express.static(path.join(__dirname + '../app/public')));

routes.get('/', get);

routes.get('/cadastro.html', function(req, res) {
    res.sendFile('../views/cadastro/cadastro.html')
});

module.exports = routes;