const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const controllerFoods= require('../controllers/foods');

// const saveFood = (req, res, next) => {
//     const validationRule = {
//       food_category: 'required|string',
//       food_name: 'required|string',
//       protein_gr: 'required|string',
//       carbs_gr: 'required|string',
//       fat_gr: 'required|string',
//       fiber_gr: 'required|string',
//       food_portion: 'required|string',
//       calories: 'required|integer'
//     };
//     validator(req.body, validationRule, {}, (err, status) => {
//       if (!status) {
//         res.status(412).send({
//           success: false,
//           message: 'Validation failed',
//           data: err
//         });
//       } else {
//         next();
//       }
//     });
//   }; 

router.get('/', controllerFoods.getAll);

router.get('/:id', controllerFoods.getSingle);

router.post('/', validation.saveFood,  controllerFoods.createFood);

router.put('/:id', validation.saveFood,  controllerFoods.updateFood);

router.delete('/:id', controllerFoods.deleteFood);



module.exports = router;