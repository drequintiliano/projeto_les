const routes = require('express').Router();
const get = require('./../controllers/get');

routes.get('/', get);

routes.get('/index.html', get);

routes.get('/about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
    console.log(__dirname + '/views/index.html');
});

module.exports = routes;