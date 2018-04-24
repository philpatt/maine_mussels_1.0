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
End Futures
=========================
*/


/*
=========================
Team Page - Green
=========================
*/
router.get('/green', function (req, res) {
    res.render('teams/green');
});

/*
=========================
End Green
=========================
*/


/*
=========================
Team Page - Navy
=========================
*/
router.get('/navy', function (req, res) {
    res.render('teams/navy');
});

/*
=========================
End Green
=========================
*/
/*
=========================
Team Page - Navy
=========================
*/
router.get('/mini-mussels', function (req, res) {
    res.render('teams/mini');
});

/*
=========================
End Green
=========================
*/
module.exports = router;
