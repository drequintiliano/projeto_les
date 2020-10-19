const routes = require('express').Router();
const index = require('./../controllers/get');

routes.get('/', index);

routes.get('/index.html', index);

routes.get('/about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
    console.log(__dirname + '/views/index.html');
});

module.exports = routes;