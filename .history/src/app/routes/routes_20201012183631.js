const path = require('path');

module.exports = (app) => {

    app.get('/', function(req, res) {
        res.sendFile(path.resolve(__dirname + '../../index.html'));
    })
}