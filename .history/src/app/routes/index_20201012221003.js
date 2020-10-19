const routes = require('express').Router();
const get = require('./../controllers/get');

routes.get('/', get);

app.use(express.static(__dirname + '/src/app/public'));
app.use(express.static(__dirname + '/src/app'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../index.html'));
})

routes.get('/cadastro.html', function(req, res) {
    res.sendFile('../views/cadastro/cadastro.html')
});

module.exports = routes;