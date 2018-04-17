var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();


/*
=========================
Team Page - Futures
=========================
*/
router.get('/futures', function (req, res) {
    res.render('teams/futures');
});


/*
=========================
Team Page - Futures
=========================
*/

module.exports = router;
