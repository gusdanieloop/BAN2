const express  = require('express');
const router   = express.Router();

const db       = require('../config/db');
const SessionController = require('../controller/SessionController');


router.get('/', (req, res)=> {
    res.render('home');
});

router.get('/users', SessionController.showUsers)

module.exports = router;
