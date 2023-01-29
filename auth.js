const dotenv = require('dotenv');
dotenv.config();

const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://food-l5.onrender.com/foods/google/callback",
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