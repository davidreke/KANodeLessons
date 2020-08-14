const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.listen(3000);

// 1. add next to the argumetns, and end of funciton
app.use((req, res, next) => {
  console.log('new request made')
  console.log('host: ', req.hostname)
  console.log('path: ', req.path)
  console.log('method: ', req.method)
  next();
})

// 2. Lets add more middleware
app.use((req, res, next) => {
  console.log('new request made')
 console.log('second middleware')
  next();
})
// exmaple (don't code along, move this below the home page and run again)

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
