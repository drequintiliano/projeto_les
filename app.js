const app = require('./src/app/config/custom-express');
const conexao = require('./src/app/config/conexao');
const Tabelas = require('./src/app/config/tabelas');

conexao.connect(erro => {
    if (erro) {
        console.log('erro ao conectar com BD ' + erro);
    } else {
        console.log('Conectado no Banco de Dados com sucesso');

        Tabelas.init(conexao);

        var port = process.env.PORT || 3000;
        app.listen(port, function() {
            console.log(`Servidor executando na porta 3000...`)
        });
    }
})