const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = app;

app.use(express.static(__dirname + '/src/app/public'));
app.use(express.static(__dirname + '/src/app'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../index.html'));
})

const rotas = require(__dirname + '/src/app/routes/routes');
rotas(app);

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});