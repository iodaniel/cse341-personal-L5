const express = require('express');
const router = express.Router();

const controllerFoods= require('../controllers/foods');

router.get('/', controllerFoods.getAll);

router.get('/:id', controllerFoods.getSingle);

router.post('/', controllerFoods.createFood);

router.put('/:id', controllerFoods.updateFood);

router.delete('/:id', controllerFoods.deleteFood);



module.exports =router;