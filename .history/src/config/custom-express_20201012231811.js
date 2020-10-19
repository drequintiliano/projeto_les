const express = require('express');
const app = express();
const routes = require('../app/routes');

app.use(express.static(__dirname + '/src/app/public/'));
console.log(__dirname + '/src/app/public/')

app.use('/', routes);

module.exports = app;