// const dotenv = require('dotenv');
// dotenv.config();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GOOGLE_CLIENT_ID="454712106113-49m8bp3812fnjfvvnlaa0l0sr6tad40g.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"
passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "https://food-l5.onrender.com/foods/",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, profile);
    //this User.findOrCreate is for the database user.  
  //  });
  }
));

passport.serializeUser(function(user, done){
    done(null,user);
});

passport.deserializeUser(function(user, done){
    done(null,user);
});