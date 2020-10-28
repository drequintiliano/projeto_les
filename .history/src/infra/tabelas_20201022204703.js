class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas');
        this.conexao = conexao;

        this.criarUsuariosProfissional();
    }

    criarUsuariosProfissional() {
        const sql = 'CREATE TABLE usuariosProfissional' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'nome varchar(50) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'endereco varchar(100) NOT NULL,' +
            'cidade varchar(50) NOT NULL,' +
            'estado varchar(2),' +
            'email varchar(50) NOT NULL,' +
            'senha varchar(30) NOT NULL),' +
            'descricao varchar(50),' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create profissional: ' + erro);
            } else {
                console.log('Tabela usuariosProfissional criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas