const express = require('express');
const router = express.Router();
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
module.exports = router;
