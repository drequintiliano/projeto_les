const express = require('express');
const app = express();
const routes = require('../app/routes');
const path = require('path');

app.use(express.static(path.join(__dirname + '../app/public')));
app.use(express.static('../app'))

app.use('/', routes);

module.exports = app;