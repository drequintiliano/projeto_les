const app = require('./src/config/custom-express');
const express = require('express');

// app.use(express.static(__dirname + '/src/app/public/'));

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});