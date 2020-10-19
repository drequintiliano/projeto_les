const express = require('express');
const app = express();
const routes = require('../app/routes');

app.use(express.static('/src/app/public/'));
app.use(express.static('/src/app/'));

app.use('/', routes);

module.exports = app;