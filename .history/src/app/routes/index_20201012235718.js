const routes = require('express').Router();
const getIndex = require('./../controllers/get');

routes.get('/', getIndex);

routes.get('/index.html', getIndex);

routes.get('/about.html', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
    console.log(__dirname + '/views/index.html');
});

module.exports = routes;