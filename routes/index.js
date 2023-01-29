const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../auth');
//createa route for the contact all ...
router.use('/', require('./swagger'));
router.use('/foods', require('./foods'));
router.use('/users', require('./users'));

router.get('/', (req, res) => {
  res.send('Food Data');
});
router.get('/', (req, res) => {
  res.send('User Data');
});
router.get('/users', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/auth/google', 
  passport.authenticate('google', {scope: ['email', 'profile']})
)
//scope is what type of information we need to request to google. 
router.get('/protected', (req, res) => {
  res.send('Hello');
});

module.exports = router;
