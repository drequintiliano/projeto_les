const app = require('./src/config/custom-express');
const express = require('express');
const conexao = require('./src/infra/conexao')

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});