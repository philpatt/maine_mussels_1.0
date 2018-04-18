module.exports = function(req, res, next){
  if(!req.user){
    req.flash('error', 'You must be logged in to view this page');
    res.redirect('/auth/admin');
  }
  else{
    next();
  }
}
