const express = require('express');
const app = express();
const port = process.env.PORT || 3000
// Define routes and application logic here

const mongoDB = require('./db')
mongoDB()
const cors = require("cors")
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  
  app.use(express.json());

  app.use('/api',require("./Routes/route"))
  
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.status(200).json({
      "Message":"server is ok"
    })
  })