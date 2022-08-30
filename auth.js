const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = '904677193283-5adfnunj9plic7hirgbkkdr5rsknhu3d.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
})
passport.deserializeUser(function(user,done){
    done(null,user)
})