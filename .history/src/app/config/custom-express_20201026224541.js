const express = require('express');
const app = express();
const routes = require('../routes');
const consign = require('consign');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '../../../app/public/'));

app.use('/', routes);

module.exports = () => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    consign()
        .include('controllers')
        .into(app)

    return app
}