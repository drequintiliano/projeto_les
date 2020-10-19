const app = require('./src/config/custom-express');

console.log("caminho serve: " + __dirname + '/src/app/public/');

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});