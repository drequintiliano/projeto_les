const app = require('./src/app/config/custom-express');
const conexao = require('./src/app/config/conexao');
const Tabelas = require('./src/app/config/tabelas');

conexao.connect(erro => {
    if (erro) {
        console.log('erro ao conectar com BD ' + erro);
    } else {
        console.log('Conectado com sucesso no BD');

        Tabelas.init(conexao);
        app.listen(3000, function() {
            console.log(`Servidor executando na porta 3000`)
        });
    }
})