var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();


/*
=========================
Program Page - League
=========================
*/
router.get('/league', function (req, res) {
    res.render('programs/league');
});

/*
=========================
End Leagues
=========================
*/


/*
=========================
Program Page - Pick Up
=========================
*/
router.get('/green', function (req, res) {
    res.render('programs/pickup');
});

/*
=========================
End pickup
=========================
*/


/*
=========================
Program Page - Travel
=========================
*/
router.get('/travel', function (req, res) {
    res.render('programs/travel');
});

/*
=========================
End Travel
=========================
*/
module.exports = router;
