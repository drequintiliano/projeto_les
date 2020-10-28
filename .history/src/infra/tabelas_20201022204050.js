class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas');
        this.conexao = conexao;
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE usuariosProfissional (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, celular varchar(50) NOT NULL, endereco varchar(100) NOT NULL, cidade varchar(50), estado varchar(2), email varchar(50) NOT NULL, senha varchar(30) NOT NULL), descricao text, PRIMARY KEY(id))'

        this.conexao.query()
    }
}

module.exports = new Tabelas