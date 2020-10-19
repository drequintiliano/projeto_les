const express = require('express');
const app = express();
const routes = require('../app/routes');

app.use(express.static(__dirname + '../../app/public/'));

app.get('/about.html', function(req, res) {
    res.send('');
});

app.use('/', routes);

module.exports = app;