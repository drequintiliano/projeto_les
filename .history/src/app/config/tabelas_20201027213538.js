class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas');
        this.conexao = conexao;

        this.criarUsuariosProfissional();
        this.criarSolicitacoesProfissional();
        this.criarServicos();
    }

    criarUsuariosProfissional() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuariosProfissional' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'nome varchar(50) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'endereco varchar(100) NOT NULL,' +
            'cidade varchar(50) NOT NULL,' +
            'estado varchar(2),' +
            'email varchar(50) NOT NULL,' +
            'senha varchar(30) NOT NULL,' +
            'descricao text,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create profissional: ' + erro);
            } else {
                console.log('Tabela usuariosProfissional criada com sucesso')
            }
        })
    }

    criarSolicitacoesProfissional() {
        const sql = 'CREATE TABLE IF NOT EXISTS solicitacoesProfissional' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'dataSolicitacao DATE,' +
            'horaSolicitacao TIME,' +
            'cliente varchar(50) NOT NULL,' +
            'endereco varchar(100) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'email varchar(50) NOT NULL,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create solicitações profissional: ' + erro);
            } else {
                console.log('Tabela solicitacoesProfissional criada com sucesso')
            }
        })
    }

    criarServicos() {
        const sql = 'CREATE TABLE IF NOT EXISTS servicos' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'titulo varchar(50),' +
            'categoria varchar(50),' +
            'descricao varchar(500) NOT NULL,' +
            'qualidade  decimal(2,2) NOT NULL DEFAULT 0.50,' +
            'pontualidade  decimal(2,2) NOT NULL DEFAULT 5,' +
            'execucao  decimal(2,2) NOT NULL DEFAULT 5,' +
            'avaliacoes  int NOT NULL DEFAULT 5,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create servicos: ' + erro);
            } else {
                console.log('Tabela servicos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas