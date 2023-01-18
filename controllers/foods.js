const mongodb = require('../db/connect');
const { all } = require('../routes');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('foods').collection('foods').find();

  result.toArray().then((lists) => 
  {
    console.log(lists)
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
//changer foodId for userId
const getSingle = async (req, res, next) => {
  const foodId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('foods')
    .collection('foods')
    .find({ _id: foodId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createFood = async (req, res) => {
  const food = {
    food_category: req.body.food_category,
    food_name: req.body.food_name,
    protein_gr: req.body.protein_gr,
    carbs_gr: req.body.carbs_gr,
    fat_gr: req.body.fat_gr,
    fiber_gr: req.body.fiber_gr,
    food_portion: req.body.food_portion,
    calories: req.body.calories,
  };
  const response = await mongodb
  .getDb()
  .db('foods')
  .collection('foods')
  .insertOne(food);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error encounter when we tried to create a new food.');
  }
};

const updateFood = async (req, res) => {
  const foodId = new ObjectId(req.params.id);
  const food ={
    food_category: req.body.food_category,
    food_name: req.body.food_name,
    protein_gr: req.body.protein_gr,
    carbs_gr: req.body.carbs_gr,
    fat_gr: req.body.fat_gr,
    fiber_gr: req.body.fiber_gr,
    food_portion: req.body.food_portion,
    calories: req.body.calories,
  };
  const response = await mongodb
    .getDb()
    .db('foods')
    .collection('foods')
    .replaceOne({ _id: foodId }, food);
  console.log(response);
  if (response.modifiedCount > 0) {
      res.status(204).send();
  } else {
      res.status(500).json(response.error || 'Some error occurred while updating the food.');
  }
 
};


const deleteFood = async (req, res) => {
  const foodId = new ObjectId(req.params.id);
  const response = await mongodb
  .getDb()
  .db('foods')
  .collection('foods')
  .remove({ _id: foodId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred during the process of deletion.');
  }
};

module.exports = { getAll, getSingle, createFood, updateFood, deleteFood };