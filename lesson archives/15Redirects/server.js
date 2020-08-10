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
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // 1. Add a new case to your switch statement
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            // 301 is a redirect
            // 2. Think about how out of hand this can get in your code. A third party packages called express can help us out. We're going to start with learning NPM, and then we will go on to Express.
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

