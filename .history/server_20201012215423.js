const app = require('./src/config/custom-express');

// app.use(express.static(__dirname + '/src/app/public'));
// app.use(express.static(__dirname + '/src/app'))

// app.get('/', function(req, res) {
//     res.sendFile(path.resolve(__dirname + '../../index.html'));
// })

app.listen(3000, function() {
    console.log(`Servidor executando na porta 3000`)
});