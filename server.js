const express = require('express');
const server = express();// app 
//const Joi = require('joi');
// const expressValidator = require('express-validator')
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const cors = require('cors');

const port = process.env.PORT || 8121;

// server.set('port' ,port);

// load app middlewares


//server = app io.
// const foodSchema = Joi.object().keys({
//     food_category:Joi.string().min(2).max(20).required(),
//     food_name:Joi.string().min(3).max(20).required(),
//     protein_gr:Joi.number().max(3).required(),
//     carbs_gr:Joi.number().max(3).required(),
//     fat_gr:Joi.number().max(3).required(),
//     fiber_gr:Joi.number().max(2).required(),
//     food_portion:Joi.string().min(3).max(20).required(),
//     calories:Joi.number().max(4).required(),
  

// });
// server.post("/foods", async (req, res, next)=>{
//     const {error, value} = foodSchema.validate(req.body, {abortEarly:false});
//     if(error){
//         console.log(error);
//         return res.send(error.details);

// }
// });
server.use(bodyParser.json()).use((req, res, next)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
       
})
.use('/', require('./routes'));
  mongodb.initDb((err, mongodb)=>{
    if(err){
        console.log(err);
    }else{}
    //establish HTTP server connection
        server.listen(port, () => {
        console.log(`Connected to Database and Listening in port ${port}`);
        });
    }

);

// server.post


