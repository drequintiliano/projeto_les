const express = require('express');
const app = express();
const routes = require('../routes');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '../../../app/public/'));

app.use('/', routes);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app;