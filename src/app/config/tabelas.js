class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas');
        this.conexao = conexao;

        this.criarUsuariosProfissional();
        this.criarUsuariosCliente();
        this.criarSolicitacoesProfissional();
        this.criarSolicitacoesCliente();
        this.criarServicos();
        this.criarServicosAvaliacoes();
        this.criarCategorias();
        // this.insertCategorias();
        // this.criarUsuarios();
        // this.insertUsuariosProfissional();
        // this.insertUsuariosCliente();
    }

    criarUsuariosProfissional() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios_profissional' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'nome varchar(50) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'telefone varchar(50),' +
            'endereco varchar(100) NOT NULL,' +
            'cidade varchar(50) NOT NULL,' +
            'redes_sociais varchar(100),' +
            'estado varchar(2),' +
            'email varchar(50) NOT NULL,' +
            'senha varchar(30) NOT NULL,' +
            'descricao varchar(300),' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create usuarios_profissional: ' + erro);
            } else {
                console.log('Tabela usuarios_profissional criada com sucesso')
            }
        })
    }

    criarUsuariosCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios_cliente' +
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
        const sql = 'CREATE TABLE IF NOT EXISTS solicitacoes_profissional' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'data_solicitacao DATE,' +
            'hora_solicitacao TIME,' +
            'id_profissional int,' +
            'id_cliente int,' +
            'cliente varchar(50) NOT NULL,' +
            'endereco varchar(100) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'email varchar(50) NOT NULL,' +
            'status_id int NOT NULL,' +
            'status_desc varchar(50) NOT NULL,' +
            'PRIMARY KEY(id),' +
            'FOREIGN KEY(id_profissional) REFERENCES usuarios_profissional(id),' +
            'FOREIGN KEY(id_cliente) REFERENCES usuarios_cliente(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create solicitacoes_profissional: ' + erro);
            } else {
                console.log('Tabela solicitacoes_profissional criada com sucesso')
            }
        })
    }

    criarSolicitacoesCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS solicitacoes_cliente' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'data_solicitacao DATE,' +
            'hora_solicitacao TIME,' +
            'id_cliente int,' +
            'id_profissional int NOT NULL,' +
            'profissional varchar(50) NOT NULL,' +
            'categoria varchar(100) NOT NULL,' +
            'celular varchar(50) NOT NULL,' +
            'email varchar(50) NOT NULL,' +
            'status_id int NOT NULL,' +
            'status_desc varchar(50) NOT NULL,' +
            'PRIMARY KEY(id),' +
            'FOREIGN KEY(id_profissional) REFERENCES usuarios_profissional(id),' +
            'FOREIGN KEY(id_cliente) REFERENCES usuarios_cliente(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create solicitacoes_cliente: ' + erro);
            } else {
                console.log('Tabela solicitacoes_cliente criada com sucesso')
            }
        })
    }

    criarServicos() {
        const sql = 'CREATE TABLE IF NOT EXISTS servicos' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'titulo varchar(50),' +
            'id_profissional int NOT NULL,' +
            'id_categoria int NOT NULL,' +
            'categoria varchar(50),' +
            'descricao varchar(500) NOT NULL,' +
            'qualidade  decimal(2,2) NOT NULL,' +
            'pontualidade  decimal(2,2) NOT NULL,' +
            'execucao decimal(2,2) NOT NULL,' +
            'id_avaliacoes int,' +
            'quantidade_avaliacoes int NOT NULL DEFAULT 0,' +
            'PRIMARY KEY(id),' +
            'FOREIGN KEY(id_profissional) REFERENCES usuarios_profissional(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create servicos: ' + erro);
            } else {
                console.log('Tabela servicos criada com sucesso')
            }
        })
    }

    criarServicosAvaliacoes() {
        const sql = 'CREATE TABLE IF NOT EXISTS servicos_avaliacoes' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'id_cliente int NOT NULL,' +
            'id_servico int NOT NULL,' +
            'qualidade  decimal(2,2) NOT NULL,' +
            'pontualidade  decimal(2,2) NOT NULL,' +
            'execucao decimal(2,2) NOT NULL,' +
            'avaliacoes int,' +
            'PRIMARY KEY(id),' +
            'FOREIGN KEY(id_servico) REFERENCES servicos(id),' +
            'FOREIGN KEY(id_cliente) REFERENCES usuarios_cliente(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create servicosAvaliacoes: ' + erro);
            } else {
                console.log('Tabela servicosAvaliacoes criada com sucesso')
            }
        })
    }

    criarCategorias() {
        const sql = 'CREATE TABLE IF NOT EXISTS categorias' +
            '(id int NOT NULL,' +
            'descricao varchar(50) NOT NULL,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create categorias: ' + erro);
            } else {
                console.log('Tabela categortias criada com sucesso')
            }
        })
    }

    insertCategorias() {
        const sql = `INSERT INTO categorias (id, descricao) VALUES
                     (1,'Serviços Domésticos'),
                     (2,'Assistencia Técnica'),
                     (3,'Eventos'),
                     (4,'Reformas'),
                     (5,'Aulas'),
                     (6,'Consultorias');`

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar insert categorias: ' + erro);
            } else {
                console.log('Insert categorias executado')
            }
        })
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios' +
            '(id int NOT NULL AUTO_INCREMENT,' +
            'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'email varchar(50),' +
            'senha varchar(30),' +
            'idUsuario int NOT NULL,' +
            'idTabela int NOT NULL,' +
            'PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar create usuarios: ' + erro);
            } else {
                console.log('Tabela usuarios criada com sucesso')
            }
        })
    }

    insertUsuariosProfissional() {
        const sql = `INSERT INTO usuarios (email, senha, idUsuario, idTabela)
                        SELECT usuariosProfissional.email, usuariosProfissional.senha, usuariosProfissional.id, 1
                        FROM usuariosProfissional`

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar insert usuariosProfissional: ' + erro);
            } else {
                console.log('Insert usuariosProfissional executado')
            }
        })
    }

    insertUsuariosCliente() {
        const sql = `INSERT INTO usuarios (email, senha, idUsuario, idTabela)
                        SELECT usuariosCliente.email, usuariosCliente.senha, usuariosCliente.id, 2
                        FROM usuariosCliente`

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao executar insert usuariosCliente: ' + erro);
            } else {
                console.log('Insert usuariosCliente executado')
            }
        })
    }
}

module.exports = new Tabelas