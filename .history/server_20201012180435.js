const app = require('./src/config/custom-express');

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});

app.use(express.static(__dirname + "/src/app"));