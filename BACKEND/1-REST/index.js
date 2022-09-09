const express = require('express');
const app = express();
const { Dog } = require('./db');
const { sequelize } = require('./db/db');
const { Op } = require('sequelize');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//RESTFUL route examples
app.get('/get-dogs/', async (req, res, next) => {
  //DEMO HERE!!!!!!
});



//Query String parameters
app.get('/dogs/', async (req, res, next) => {
  //DEMO HERE!!!!!!
});

//YOU TRY//



const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Dogs are ready at http://localhost:${PORT}`);
});
