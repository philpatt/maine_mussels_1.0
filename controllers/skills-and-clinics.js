var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();


/*
=========================
Clinics
=========================
*/
router.get('/clinics', function (req, res) {
    res.render('skillsandclinics/clinics');
});

/*
=========================
End Clinics
=========================
*/


/*
=========================
Personal Coaching
=========================
*/
router.get('/personal-coaching', function (req, res) {
    res.render('skillsandclinics/personal-coaching');
});

/*
=========================
End Positional Coaching
=========================
*/


/*
=========================
Positional Training
=========================
*/
router.get('/positional-training', function (req, res) {
    res.render('skillsandclinics/positional-training');
});

/*
=========================
End Positional Training
=========================
*/
module.exports = router;
