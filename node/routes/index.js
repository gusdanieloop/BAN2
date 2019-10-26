var express  = require('express'),
    router   = express.Router(),
    db       = require('../db/index');

router.get('/', (req, res)=> {
    res.render('home');
});

module.exports = router;