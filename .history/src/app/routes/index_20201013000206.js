const routes = require('express').Router();
const path = require('path');
const getIndex = require('./../controllers/get');

routes.get('/', getIndex);

routes.get('/index.html', getIndex);

routes.get('/about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../views/about.html'));
});

module.exports = routes;