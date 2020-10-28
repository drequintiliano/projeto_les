const express = require('express');
const app = express();
const routes = require('../app/routes');
const consign = require('consign')
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '../../app/public/'));

app.use('/', routes);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

consign()
    .include('controllers')
    .into(app)

routes(app);

module.exports = app;