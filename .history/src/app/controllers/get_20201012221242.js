module.exports = (req, res) => {

    res.sendFile(path.resolve(__dirname + '/src/app/index.html'));

}