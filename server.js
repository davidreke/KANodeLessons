const http = require('http');
const fs = require('fs');
// 6 require lodash
const _ = require('lodash')
// node will know to look for lodash inside the node modules foler.


const server = http.createServer((req, res) => {
    // 7 remove console.log and use lodash

    // lodash
    const num = _.random(0,20);
    console.log(num)

    res.setHeader('Content-type', 'text-html')
    // 7... now load the page and look at the nodemon console.log inside node

    // 8. add greet and then put it inside a once method as a callback function. It will now only be able to run once.

    const greet = _.once(() => {
      console.log("hello");
    }); 

greet();
greet();
    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            // 1. If I change about to about-us, I would have to save the file,  cancel node, and run again. That's really annoying. Lets fix that with Nodemon!.
            // 2. cancel the process and get ready to install nodemon
            // https://www.npmjs.com/package/nodemon
            // according to the directions its $nodemon -g nodemon
            // 3 run nodemon server, and then make a change to your project save, and reload the page
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;

            res.setHeader('Location', './about')
            res.end();
            break;
        default:
            path+='404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    }
)});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

