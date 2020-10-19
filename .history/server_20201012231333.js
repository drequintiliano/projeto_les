const app = require('./src/config/custom-express');

app.use(express.static(__dirname + '/src/app/public/'));
console.log("caminho serve: " + __dirname + '/src/app/public/');

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});