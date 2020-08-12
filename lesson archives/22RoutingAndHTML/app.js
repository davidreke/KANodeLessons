const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  // res.send('<p>homepage</p>')
  res.sendFile("./views/index.html", { root: __dirname });
  // the path is not meant to be a relative path, by default it looks for an absolute value. WE have to use a second parameter that is an object that sets a new root directory that is this directory's name
});

// 1. add another get request

app.get("/about", (req, res) => {
  //   res.send("<p>about</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// 2. how could we send html files instead of p tags?
// 2... replace the p tags with sendFile.

// 4 lets add navs to our home and about page
