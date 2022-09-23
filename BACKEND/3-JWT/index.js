const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser"); // you need this to access req.cookies
const port = 8080;

//Make sure you require dotenv and envoke the config method
//Let's move the JWT_SECRET into an new .env file
//Finally, let's make sure we move the secrte to the .env file
const jwt = require('jsonwebtoken');

const { JWT_SECRET = '234709asefiaserh181349' } = process.env;
require('dotenv').config();



const bcrypt = require('bcrypt');
const SALT_COUNT = 5;

const {User} = require('./db/User');
const { sequelize } = require('./db/db');

sequelize.sync({ force: false });

app.use(cookieParser()); //to be able to access req.cookies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

///////////////////////// routes /////////////////////////
app.get('/', async (req, res, next) => {
  res.send("ROUTE IS WORKING!")
})


//registering a user - attaching a token
app.post('/register', async (req, res, next) => {
  try {

  } catch (error) {
    console.error(error);
    next(error)
  }
})


//login - always use post for the sake of demoing we can use get
// app.get('/user', async (req, res, next) => {
//   try {
    
//     } else {
      
//     }
//   }   
//    catch (error) {
//     console.error(error);
//     next(error)
//   }
// })


//route that will only be accessbile to a user that is logged in and has a valid JWT
// app.get('/subscribers', async (req, res, next) => {
//   try {

//   } catch (err) {
//     console.error(err)
//   }
// })

///////////////////////// routes /////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
