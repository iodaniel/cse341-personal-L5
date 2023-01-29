const mongodb = require('../db/connect');
const { all } = require('../routes');
const ObjectId = require('mongodb').ObjectId;

const getAllUser = async (req, res, next) => {
  const result = await mongodb.getDb().db('foods').collection('users').find();

  result.toArray().then((lists) => 
  {
    console.log(lists)
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
//changer foodId for userId
const getSingleUser = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid food id to find a contact.');
  }
  const userId =  new ObjectId(req.params.id); 
  console.log(userId)
  //new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('foods')
    .collection('users')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createUser = async (req, res) => {
  const user = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    
  };
  const response = await mongodb
  .getDb()
  .db('foods')
  .collection('users')
  .insertOne(user);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error encounter when we tried to create a new user.');
  }
};

const updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid user id to find a contact.');
  }
  const userId = new ObjectId(req.params.id);
  const user ={
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  const response = await mongodb
    .getDb()
    .db('foods')
    .collection('users')
    .replaceOne({ _id: userId }, user);
  console.log(response);
  if (response.modifiedCount > 0) {
      res.status(204).send();
  } else {
      res.status(500).json(response.error || 'Some error occurred while updating the user.');
  }
 
};

const deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid user id to find a contact.');
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
  .getDb()
  .db('foods')
  .collection('users')
  .remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred during the process of deletion.');
  }
};

module.exports = { getAllUser, getSingleUser, createUser, updateUser, deleteUser };