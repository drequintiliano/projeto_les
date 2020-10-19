const path = require('path');

module.exports = (req, res) => {

    res.sendFile(path.resolve(__dirname + '../../views/index.html'));

    res.sendFile(path.resolve(__dirname + '../../views/about.html'));


}