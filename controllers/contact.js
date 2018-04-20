var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();



/* 
============================
Contact Page 
============================
*/
router.post('/add-contact', function (req, res, next) {
    console.log('req.body is', req.body);
    db.contact.findOrCreate({
        where: {
            contact_type: req.body.contact_type
        },
        defaults: {
            contact_url: req.body.contact_url,
            contact_number: req.body.contact_number,
        }
    }).spread(function (contact, wasCreated) {
        if (wasCreated) {
            //Good job, you didn't try to make a duplicate!
                res.redirect('/contact',{})
        }
        else {
            //Bad job, you tried to create something thats already created
            req.flash('error', 'Contact Already exists');
            res.redirect('/contact');
        }
    }).catch(function (err) {
        req.flash('error', err.message);
        res.redirect('/contact');
    });
});



/* 
============================
End Contact
============================
*/

/* 
============================
About Page 
============================
*/


/* 
============================
End About
============================
*/
module.exports = router;
