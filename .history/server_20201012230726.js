const app = require('./src/config/custom-express');
const express = require('express');
const app = express();

app.use(express.static(__dirname + 'public'));

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});