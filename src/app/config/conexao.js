const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'mysql741.umbler.com',
    // port: 3306,
    user: 'locahost',
    password: 'admin123',
    database: 'base-tg'
})

module.exports = conexao