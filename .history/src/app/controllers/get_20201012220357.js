module.exports = (req, res) => {
    res.sendFile(__dirname + '../../src/app/index.html')
}