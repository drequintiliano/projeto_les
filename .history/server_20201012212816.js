const app = require('./src/config/custom-express');
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


app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});