var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('./db/models/user');


module.exports = (passport, config) => {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================

  // TODO change this to passport-local strategy instead of basic strategy

  passport.use(new BasicStrategy(
  function(username, password, callback) {
    User.findOne({ username: username }, function (err, user) {
      if (err) 
        return callback(err)

      // No user found with that username
      if (!user) 
        return callback(null, false)

      // Make sure the password is correct
      user.verifyPassword(password, function(err, isMatch) {
        if (err)
          return callback(err)

        // Password did not match
        if (!isMatch) 
          return callback(null, false)

        // Success
        return callback(null, user)
      })
    })
  }
))
}


exports.isAuthenticated = passport.authenticate('basic', { session : false })
