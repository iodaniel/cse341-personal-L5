// const dotenv = require('dotenv');
// dotenv.config();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
//const GOOGLE_CLIENT_ID="454712106113-kcq12rtfihc8so8n0j7u0ub3asjlehus.apps.googleusercontent.com"
const GOOGLE_CLIENT_ID="454712106113-49m8bp3812fnjfvvnlaa0l0sr6tad40g.apps.googleusercontent.com"
//const GOOGLE_CLIENT_SECRET="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"
const GOOGLE_CLIENT_SECRET="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"
passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "https://food-l5.onrender.com/google/callback",
   // "http://localhost:8121/google/callback",
    passReqToCallback: true
  },
 
  function(request, accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
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