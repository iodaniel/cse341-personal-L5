const validator = require('../helpers/validate');

const saveFood = (req, res, next) => {
  const validationRule = {
    food_category: 'required|string',
    food_name: 'required|string',
    protein_gr: 'required|string',
    carbs_gr: 'required|string',
    fat_gr: 'required|string',
    fiber_gr: 'required|string',
    food_portion: 'required|string',
    calories: 'required|integer'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


module.exports = {saveFood};