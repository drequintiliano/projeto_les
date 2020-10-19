const express = require('express');
const app = express();
const routes = require('../app/routes');

app.use(express.static(__dirname + '../../app/public/'));
console.log(__dirname + '/src/app/public/')

app.use('/', routes);

module.exports = app;