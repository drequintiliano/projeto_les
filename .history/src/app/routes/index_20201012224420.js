const routes = require('express').Router();
const get = require('./../controllers/get');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src/app/public/'));
app.use(express.static(__dirname + '/src/app/'));

routes.get('/', get);

// routes.get('/cadastro.html', function(req, res) {
//     res.sendFile('../views/cadastro/cadastro.html')
// });

module.exports = routes;