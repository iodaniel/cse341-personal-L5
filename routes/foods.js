const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const controllerFoods= require('../controllers/foods');


router.get('/', controllerFoods.getAll);

router.get('/:id', controllerFoods.getSingle);

router.post('/', validation.saveFood,  controllerFoods.createFood);

router.put('/:id', validation.saveFood,  controllerFoods.updateFood);

router.delete('/:id', controllerFoods.deleteFood);



module.exports = router;