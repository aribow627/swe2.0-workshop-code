const crypto = require('crypto'); //native to node
const bcrypt = require('bcrypt'); //npm install
const { sequelize } = require('./db');
const { User } = require('./models');

const SALT_COUNT = 2; //defined by us

const run = async () => {
  try {

    /* *************** SETUP *************** */
    await sequelize.sync({force: true});

    const user = {username: 'johnDoe', password: 'test123'};
    const user2 = {username: 'user_2', password: 'test123'};

    console.log("Let's start hashing some passwords!");

    /* *************** START DEMO *************** */
    
    //hashing without salting - see what this looks like in our db [crypto]
    const hashedNoSalt = await crypto.createHash('sha256').update(user.password).digest('base64') //

    //hashing with salting - see what this looks like in our db [bcrypt]
    const hashedNoSalt2 = await crypto.createHash('sha256').update(user2.password).digest('base64')

    console.log('USER1 hashed =', hashedNoSalt)
    console.log('USER2 hashed =', hashedNoSalt2)

    //hashing with salting for user1 - bcrypt
    const hashedWithSalt = await bcrypt.hash(user.password, SALT_COUNT)

    //hashing with salting for user2 - bcrypt
    const hashedWithSalt2 = await bcrypt.hash(user2.password, SALT_COUNT)

    console.log('USER1 hashed + SALT =', hashedWithSalt)
    console.log('USER2 hashed + SALT=', hashedWithSalt2)

    //storing our user information (username + hashedpassword) in our database
    await User.create({username: user.username, password: hashedWithSalt})
    await User.create({username: user2.username, password: hashedWithSalt2})
    
    //Where is the best place to implement this concept?
      //Within your endpoints that checks to see if a user has logged in with the right credentials.
      


  } catch (error) {
    console.error(error)
  } finally {
    sequelize.close();
  }
}


run();
