//  1. create app.js and require express
const express = require("express");
const { Server } = require("http");

// 2. invoke express which creates an instance of an express app
const app = express();

// 3. listen for requests

// listen for requests
app.listen(3000);

// 4. Set up a  list for get request. It takes two arguments
// a) What we're listening for
// b) The callback function to fire when we get that request
app.get("/", (req, res) => {
  // 5. use res.send. Express auto handles the header and status code
  res.send("<p>homepage</p>");
});

// 6. run nodemon app
