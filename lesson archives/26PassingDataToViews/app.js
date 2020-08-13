const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.listen(3000);

app.get('/', (req, res) =>{
                            // 4. add an object as a second paramater that will be passed into the index.ejs file
                            // 8 copy and paste in this blogs value
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
                            //   9. add blogs to the object
                            res.render("index", { title: "Home", blogs:blogs });
                          })

// 6. add titles to about and create and 404
// 7. add those titles to your ejs pages and reload your localhost
app.get("/about", (req, res) => {
   
  res.render('about', {title: "About"})
});

app.get('/blogs/create' , (req, res) => {
    res.render('create', {title: "Create a new Blog"});
})


app.use((req, res) => {
    res.status(404).render('404',  {title: "404"})
})
