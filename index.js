require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var ejsLayouts = require('express-ejs-layouts');
var db = require('./models');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var passport = require('./config/passportConfig');
var session = require('express-session');
var app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});

app.get('/', function(req, res){
  res.render('home');
});

app.get('/profile', isLoggedIn, function(req, res){
  res.render('auth/profile');
});
app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/calendar', function (req, res){
  res.render('calendar')
})
app.use('/auth', require('./controllers/auth'));
app.use('/contact', require('./controllers/contact'));
app.use('/team', require('./controllers/team'));
app.use('/program', require('./controllers/program'));
app.use('/contact', require('./controllers/contact'));
app.use('/skills-and-clinics', require('./controllers/skills-and-clinics'));
app.use('/registration', require('./controllers/registration'));






app.listen(process.env.PORT || 3000);
