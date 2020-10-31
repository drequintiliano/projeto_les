require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const routes = require('../routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../../../app/public/'));

app.use('/', routes);


module.exports = app;