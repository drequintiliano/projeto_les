const app = require('./src/config/custom-express');

app.use(express.static(__dirname + 'public'));

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});