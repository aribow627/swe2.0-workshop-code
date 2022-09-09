const express = require('express');
const app = express();
const { Dog } = require('./db');
const { sequelize } = require('./db/db');
const { Op } = require('sequelize');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', async (req, res, next) => {
  res.send('THIS is a sanity check')
});

//RESTFUL route examples
//REST - 
//R E - Representational
//S T - State Transfer

//A way for us to organize routes - There is a particular way that we can write our endpoints that follows a RESTful pattern
//Benefits: 
//A repeatable process is scalable where we can re-use routes for multiple and various situations.
//Easy to read and understand

//Two-rules:
//ONLY HTTP methods use verbs - GET / PUT / POST / DELETE
//Request URLs only use nouns

//Go broad to specific

// app.get('/dogs/', async (req, res, next) => {
//   //DEMO HERE!!!!!!
// });

// //You try - write a get request that will get a specific dog breed
// app.get('/dogs/:id', async (req, res, next) => {
 
// })

// //is this restful
// app.post('/dog', async (req, res, next) => {
 
// })

//Query String parameters
//https://app.codingrooms.com/app?joinCode=C-X7DmcgH
//Query String parameters - 
//{key: value, key2: value}
//req.query // to access your query string parameter

app.get('/dogs', async (req, res, next) => {

  //if there is a req.query, then look for data that pertains to the req.query
    //if there is a req.query, we should expect an object to exist with key value pairs
    //Object.keys -> array with only the keys
    //if the array from Object.keys has a length, then there exists keys, therefore there exists a query string parameter
    if(Object.keys(req.query).length !== 0){
      const {color} = req.query // 'black'
      const allBlkDogs = await Dog.findAll({where: {color}})
      res.send(allBlkDogs)
    }else {
      const allDogs = await Dog.findAll()
      res.send(allDogs)
    }

  //if not, fetch all dogs
});

//YOU TRY//



const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Dogs are ready at http://localhost:${PORT}`);
});
