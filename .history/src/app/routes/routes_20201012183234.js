const path = require('path');

module.exports = (app) => {

    app.get('/', function(req, res) {
        res.sendFile(path.resolve('../../app/views/index.html'));
    })
}