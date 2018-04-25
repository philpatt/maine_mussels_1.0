var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();


/*
=========================
Face-Off Reg
=========================
*/
router.get('/face-off-reg', function (req, res) {
    res.render('registration/face-off-clinic-reg');
});

/*
=========================
End F-O-R
=========================
*/

/*
=========================
HS League Reg
=========================
*/
router.get('/hs-league-reg', function (req, res) {
    res.render('registration/high-school-league-reg');
});

/*
=========================
End HS League Reg
=========================
*/
/*
=========================
HS Travel Reg
=========================
*/
router.get('/hs-travel-reg', function (req, res) {
    res.render('registration/high-school-travel-reg');
});

/*
=========================
End HS Travel Reg
=========================
*/
/*
=========================
MS League Reg
=========================
*/
router.get('/ms-league-reg', function (req, res) {
    res.render('registration/middle-school-league-reg');
});

/*
=========================
End MS League Reg
=========================
*/
/*
=========================
MS Travel Reg
=========================
*/
router.get('/ms-travel-reg', function (req, res) {
    res.render('registration/middle-school-travel-reg');
});
/*
=========================
End MS League Reg
=========================
*/

/*
=========================
Mini Mussels Reg
=========================
*/
router.get('/mini-mussels-reg', function (req, res) {
    res.render('registration/mini-mussels-reg');
});
/*
=========================
End Mini Mussels Reg
=========================
*/
/*
=========================
Mini Mussels Reg
=========================
*/
router.get('/positional-training-reg', function (req, res) {
    res.render('registration/positional-training-reg');
});
/*
=========================
End Mini Mussels Reg
=========================
*/
module.exports = router;
