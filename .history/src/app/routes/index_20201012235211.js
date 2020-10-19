const router = require('express').Router();
const get = require('./../controllers/get');

router.get('/', get);

router.get('/index.html', get);

router.get('/about.html', function(req, res) {
    res.sendFile('../views/about.html');
});

module.exports = router;