const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '../public'));
app.use(express.static(__dirname + '../../app'));

module.exports = (req, res) => {

    res.sendFile(path.resolve(__dirname + '../../index.html'));

}