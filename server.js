const express = require('express');
const server = express();// app ?
//const Joi = require('joi');
// const expressValidator = require('express-validator')
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');


const port = process.env.PORT || 8121;


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




