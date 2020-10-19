const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;

app.use(express.static(__dirname + '/src/app/public'));
app.use(express.static(__dirname + '/src/app'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../index.html'));
})

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});