const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()
const dbAPI= process.env.mongoURI
const mongoDB = async () => {
    try {
      await mongoose.connect(dbAPI);
      console.log('Connected! ༼ つ ◕_◕ ༽つ');
      
    } catch (error) {
      console.log("error");
    }
  };

  module.exports= mongoDB;