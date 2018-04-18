var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();


/*
=========================
Events
=========================
*/
router.get('/profile', function (req, res) {
    res.render('teams/futures');
});

/*
=========================
Programs
=========================
*/

module.exports = router;
