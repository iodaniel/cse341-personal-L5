import Joi from 'joi';
// rule of data validation 

export default {
  // POST /api/tasks
  createFood: {
    body: {
      user: Joi.string().required(),
      description: Joi.string().required(),
      done: Joi.boolean()
    }
  },

  // GET-PUT-DELETE /api/tasks/:taskId
  getFood: {
    params: {
      taskId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }
  },

  // PUT /api/tasks/:taskId
  updateFood: {
    body: {
      user: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
      description: Joi.string(),
      done: Joi.boolean()
    }
  }
};