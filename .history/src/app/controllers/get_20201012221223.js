module.exports = (req, res) => {

    res.sendFile(path.resolve(__dirname + '../../index.html'));

}