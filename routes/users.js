const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const controllerUsers= require('../controllers/users');



router.get('/', controllerUsers.getAllUser);

router.get('/:id', controllerUsers.getSingleUser);

router.post('/', validation.saveUser,  controllerUsers.createUser);

router.put('/:id', validation.saveUser,  controllerUsers.updateUser);

router.delete('/:id', controllerUsers.deleteUser);



module.exports = router;