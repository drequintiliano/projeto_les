const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src/app/public'));
app.use(express.static(__dirname + '/src/app'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../index.html'));
})

module.exports = app;