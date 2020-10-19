const express = require('express');
const app = express();
const routes = require('../app/routes');

app.use('/', routes);
app.use(express.static('/src/app/public'));
app.use(express.static('/src/app'))

module.exports = app;