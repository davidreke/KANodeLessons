const express = require('express');
const app = express();
const morgan = require('morgan')

app.set('view engine', 'ejs');

// 1? Creat style.css
// 1.5 add a link to the header

app.listen(3000);

// 2. Middleware and static files
// express.static allows us to access static files from a folder
app.use(express.static('public'));
app.use(morgan('dev'));
// 3 create a public folder and move style.css to it
// load localhost and load localhost300/style.css
// 4. remove style from the header and add it to style.css






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


app.use((req, res) => {
    res.status(404).render('404',  {title: "404"})
})
