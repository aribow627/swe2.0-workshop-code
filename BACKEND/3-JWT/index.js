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
    //req.body = {username: "user123", password: "abc123"}
    const username = req.body.username
    const password = req.body.password
    //we want store this users information in our database
    // we want to hash a users password first 
    // bcrypt.hash(what you want to get hashed, saltcount)
    const hashed = await bcrypt.hash(password, SALT_COUNT) //hashing our new user's password and also salting the hashed password for extra security

    // creating a new user in our User table
    const user = await User.create({username, password: hashed})

    //We are going to attach a JSON web token to this new user
    //To create a json web token -> .sign(payload, secret)
    //you can create a secret by running a string through a hashing function ex: sha253
    //JSON web token -> xxx.yyy.zzz <-encoded you can decode your payload back to its original form
    const token = jwt.sign({id: user.id, username: user.username}, JWT_SECRET)

    res.send({message: "User successfuly created!!", token})

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
