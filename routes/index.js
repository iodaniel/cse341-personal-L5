const express = require('express');
const router = express.Router();
const session = require("express-session");
const passport = require('passport');
require('../auth');
//createa route for the contact all ...

function isLoggedIn(req, res, next){
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
}
  //req.user ? next():res.sendStatus(401);
  //code 401 is authorized 
}

router.use('/', require('./swagger'));
//router.use('/foods', isLoggedIn, require('./foods'));
router.use('/foods', require('./foods'));
router.get("/", (req, res) => {
  res.redirect("/users");
})
router.use('/users', require('./users'));
// router.get('/', (req, res) => {
//   res.send('Food Datnpm ');
// });
// router.get('/', (req, res) => {
//   res.send('User Data');
// });
router.use(session({secret:'tacocat'}));



router.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/auth/google', 
  passport.authenticate('google', {scope: ['email', 'profile']})
)

router.get('/google/callback', 
  passport.authenticate('google',{
    successRedirect: '/users', 
    failureRedirect: '/auth/failure', 
  })
);

router.get('/auth/failure', (req, res) => {
  res.send('Something went wrong try again...');

});
//scope is what type of information we need to request to google. 
// router.get('/protected', (req, res) => {
//   res.send('Hello');
// });

module.exports = router;
