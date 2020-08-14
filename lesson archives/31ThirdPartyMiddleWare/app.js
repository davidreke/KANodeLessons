const express = require('express');
const app = express();
// 2. require morgan
const morgan = require('morgan')

app.set('view engine', 'ejs');

// 1. npm install morgan
// https://www.npmjs.com/package/morgan
// morgan is named after a character in Dexter


app.listen(3000);

// 3. get rid of the middleware
// 4.  use morgan, pass in the dev option

app.use(morgan('dev'))


app.get('/', (req, res) =>{

  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet:
        "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet:
        "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet:
        "Lorem ipsum dolor sit amet consectetur",
    },
  ];
                          
  res.render("index", { title: "Home", blogs:blogs });
})


app.get("/about", (req, res) => {
   
  res.render('about', {title: "About"})
});

app.get('/blogs/create' , (req, res) => {
    res.render('create', {title: "Create a new Blog"});
})

// 1.5 remember that res.status is middleware that happens before the render.
app.use((req, res) => {
    res.status(404).render('404',  {title: "404"})
})
