module.exports = (app) => {

    app.get('/', function(req, res) {
        res.sendFile(__dirname + "../../app/views/index.html");
    })
}