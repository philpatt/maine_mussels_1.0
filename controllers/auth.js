var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();


/* 
============================
Admin Site -- hidden url
============================
*/

router.get('/admin', function(req, res){
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  successFlash: 'Login Successful!',
  failureRedirect: '/auth/admin',
  failureFlash: 'Invalid Credentials'
}));

router.get('/signup', function(req, res){
  res.render('auth/signup');
});

router.post('/signup', function(req, res, next){
  // console.log('req.body is', req.body);
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    }
  }).spread(function(user, wasCreated){
    if(wasCreated){
      //Good job, you didn't try to make a duplicate!
      passport.authenticate('local', {
        successRedirect: '/profile',
        successFlash: 'Successfully logged in'
      })(req, res, next);
    }
    else {
      //Bad job, you tried to sign up when you should login
      req.flash('error', 'Email already exists');
      res.redirect('/auth/admin');
    }
  }).catch(function(err){
    req.flash('error', err.message);
    res.redirect('/auth/signup');
  });
});

router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'Successfully logged out');
  res.redirect('/');
});

/* 
============================
End hidden URLs
============================
*/

/* 
============================
Facebook Auth -- 
Stretch goal for User comments
============================
*/

/* OAUTH ROUTES */
//Calls the passport-facebook strategy (located in passport config)
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

//Handle the response from Facebook (logic located in passport config)
router.get('/callback/facebook', passport.authenticate('facebook', {
  successRedirect: '/profile',
  successFlash: 'You successfully logged in via Facebook',
  failureRedirect: '/auth/login',
  failureFlash: 'You tried to login with FB, but FB doesn\'t like you'
}));

/* 
============================
End Facebook Auth
============================
*/

module.exports = router;




















