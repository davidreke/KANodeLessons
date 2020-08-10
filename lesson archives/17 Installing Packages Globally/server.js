const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('Content-type', 'text-html')

    let path = './views/'
    switch (req.url) {
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
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    }
    )
});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

