require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.static(__dirname + '../../../app/public/'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const sessaoAutenticacao = require('./sessaoAutenticacao');
sessaoAutenticacao(app);

const routes = require('../routes/rotas');
app.use('/', routes);

module.exports = app;