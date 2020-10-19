module.exports = (app) => {

    app.get('/cadastro.html', function(req, res) {
        res.sendFile('../views/cadastro/cadastro.html')
    })

}