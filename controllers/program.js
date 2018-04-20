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
Clinics Page
=========================
*/

router.post('/add-clinic', function (req, res, next) {
    console.log('req.body is', req.body);
    db.clinic.findOrCreate({
        where: { 
            clinic_title : req.body.clinic_title 
        },
        defaults: {
            cost: req.body.cost,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            start: req.body.start,
            end: req.body.end,
            clinic_detail: req.body.clinic_detail
        }
    }).spread(function (clinic, wasCreated) {
        if (wasCreated) {
            //Good job, you didn't try to make a duplicate!
            return {
                successFlash: 'successfuly created clinic',
                successRedirect: '/profile'
            }
        }
        else {
            //Bad job, you tried to create something thats already created
            req.flash('error', 'Clinic Already exists');
            res.redirect('/profile');
        }
    }).catch(function (err) {
        req.flash('error', err.message);
        res.redirect('/profile');
    });
});

/*
=========================
End Clinics
=========================
*/
/*
=========================
Programs Page
=========================
*/

router.post('/add-program', function (req, res, next) {
    console.log('req.body is', req.body);

    // db.program.findOrCreate({
    //     where: {
    //         clinic_title: req.body.clinic_title
    //     },
    //     defaults: {
    //         cost: req.body.cost,
    //         start_time: req.body.start_time,
    //         end_time: req.body.end_time,
    //         start: req.body.start,
    //         end: req.body.end,
    //         clinic_detail: req.body.clinic_detail
    //     }
    // }).spread(function (clinic, wasCreated) {
    //     if (wasCreated) {
    //         //Good job, you didn't try to make a duplicate!
    //         return {
    //             successFlash: 'successfuly created clinic',
    //             successRedirect: '/profile'
    //         }
    //     }
    //     else {
    //         //Bad job, you tried to create something thats already created
    //         req.flash('error', 'Clinic Already exists');
    //         res.redirect('/profile');
    //     }
    // }).catch(function (err) {
    //     req.flash('error', err.message);
    //     res.redirect('/profile');
    // });
});

/*
=========================
End Programs
=========================
*/


module.exports = router;
