class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas');
        this.conexao = conexao;

        this.criarUsuariosProfissional();
        this.criarUsuariosCliente();
        this.criarSolicitacoesProfissional();
        this.criarServicos();
        this.criarSolicitacoesCliente();
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

    criarUsuariosCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuariosCliente' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'nome varchar(50) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'endereco varchar(100) NOT NULL,' +
            'cidade varchar(50) NOT NULL,' +
            'estado varchar(2),' +
            'email varchar(50) NOT NULL,' +
            'senha varchar(30) NOT NULL,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create clientes: ' + erro);
            } else {
                console.log('Tabela usuariosCliente criada com sucesso')
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
            'qualidade  decimal(2,2) NOT NULL,' +
            'pontualidade  decimal(2,2) NOT NULL,' +
            'execucao  decimal(2,2) NOT NULL,' +
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

    criarSolicitacoesCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS solicitacoesCliente' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'dataSolicitacao DATE,' +
            'horaSolicitacao TIME,' +
            'idProfissional int NOT NULL,' +
            'nomeProfissional varchar(50) NOT NULL,' +
            'categoria varchar(100) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'email varchar(50) NOT NULL,' +
            'statusId int NOT NULL,' +
            'statusDesc varchar(50) NOT NULL,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create solicitacoesCliente: ' + erro);
            } else {
                console.log('Tabela solicitacoesCliente criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas