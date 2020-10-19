module.exports = (app) => {

    app.get("/", function(req, res) {
        res.sendfile(__dirname + "/src/app/index.html");
    })
}