const express = require('express');
// 1. npm install ejs
// 1... check packages.json
const app = express();

// 2. register EJS as view engine using app.set
// because we have a views folder we don't need to tell ejs that our views are in the views folder. However, if we used a different folder name, we would have to configure that.
app.set('view engine', 'ejs');
// 3. create an index.ejs in views


app.listen(3000);

app.get('/', (req, res) =>{
    // 5. replace the senFile method with the render method
    res.render('index');
    // 6. Create about.ejs
})

app.get("/about", (req, res) => {
    // 10. replace the rest of our sendFile()s with render methods
  res.render('about')
});

// 11. remove the redirect
// 12. add a get method for the create.ejs file
// 13. create the create.ejs file
app.get('/blogs/create' , (req, res) => {
    res.render('create');
})


app.use((req, res) => {
    // 10...
    res.status(404).render('404')

})
