var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var facebookStrategy = require('passport-facebook').Strategy;
var db = require('../models');
require('dotenv').config();

passport.serializeUser(function(user, callback){
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback){
  db.user.findById(id).then(function(user){
    callback(null, user);
  }).catch(function(err){
    callback(err, null);
  });
});

passport.use(new localStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, callback){
  db.user.findOne({
    where: { email: email }
  }).then(function(user){
    if(!user || !user.isValidPassword(password)){
      callback(null, false);
    }
    else {
      callback(null, user);
    }
  }).catch(function(err){
    callback(err, null);
  });
}));

passport.use(new facebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.BASE_URL + '/auth/callback/facebook',
  profileFields: ['id', 'email', 'displayName'],
  enableProof: true
}, function(accessToken, refreshToken, profile, callback){
  //Insert or access facebook user in user table
  //See if we have an email address we can use to identify the user
  var facebookEmail = profile.emails ? profile.emails[0].value : null;

  // See if the email exists in the users table
  db.user.findOne({
    where: {email: facebookEmail}
  }).then(function(existingUser){
    //This user has logged in before!
    if(existingUser && facebookEmail){
      existingUser.updateAttributes({
        facebookId: profile.id,
        facebookToken: accessToken
      }).then(function(updatedUser){
        callback(null, updatedUser);
      }).catch(callback);
    }
    else {
      //The person is just new, we need to create an entry for them in the users table
      //parse user's name
      var usernameArr = profile.displayName.split(' ');

      db.user.findOrCreate({
        where: {facebookId: profile.id},
        defaults: {
          facebookToken: accessToken,
          email: facebookEmail,
          firstname: usernameArr[0],
          lastname: usernameArr[usernameArr.length - 1],
          username: profile.displayName
        }
      }).spread(function(user, wasCreated){
        if(wasCreated){
          //Expected case: they were new, and then we created them in the users table
          callback(null, user);
        }
        else{
          //They were not new after all - we just need to update their token (new session)
          //possibly this could happen if the user changed the email that they use for facebook login
          user.facebookToken = accessToken;
          user.email = facebookEmail;
          user.save().then(function(updatedUser){
            callback(null, updatedUser);
          }).catch(callback);
        }
      }).catch(callback);
    }
  })
}));

module.exports = passport;














