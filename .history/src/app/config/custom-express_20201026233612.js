const express = require('express');
const app = express();
const routes = require('../routes');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '../../../app/public/'));

app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;