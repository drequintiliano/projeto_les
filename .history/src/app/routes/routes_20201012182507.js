module.exports = (app) => {

    app.get("/", function(req, res) {
        res.sendfile(__dirname + "../../app/public/index.html");
    })
}