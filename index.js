const express = require('express');
const app = express();

// Define routes and application logic here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })