const express = require('express');
const router = express.Router();
//createa route for the contact all ...
router.use('/', require('./swagger'));
router.use('/foods', require('./foods'));

router.get('/', (req, res) => {
  res.send('Food Data');
});


module.exports = router;
