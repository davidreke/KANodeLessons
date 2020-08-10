// 1. Status codes tell us the type of response
// just a few examples
// 200 - ok
// 301 - Resource moved
// 404 - Not Found
// 500 - Internal Server error

// 100 - Informational Responses
// 200 -Sucess Codes
// 300 -Codes for redirects
// 400 - user or client error codes
// 500 -server error codes

// more info https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('Content-type', 'text-html')


    // 3. add status codes to our switch statment
    // 4. save, run server, look at the Network tab under browser.
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
            // 2. send a 200 status code

            // 3. move the above to the switch statement
            res.end(data);
        }
    }
    )
});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

