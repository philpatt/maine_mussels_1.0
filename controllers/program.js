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
router.get('/pickup', function (req, res) {
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


/*
=========================
Programs Page
=========================
*/

router.post('/add-program', function (req, res, next) {
    console.log('req.body is', req.body);
});

/*
=========================
End Programs
=========================
*/


module.exports = router;
