const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('../app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.sendfile(__dirname + "../../app/index.html");
})

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;