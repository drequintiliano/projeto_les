const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.static('../app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;