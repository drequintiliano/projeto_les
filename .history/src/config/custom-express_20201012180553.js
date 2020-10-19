const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('../app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/src/app"));

module.exports = app;