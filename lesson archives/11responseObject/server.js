
const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // 1. set header content type being sent back to the browser
    // res.setHeader('Content-type', 'text/plain')

    // 4. Change the res.setHeader to take HTML
    res.setHeader('Content-type', 'text-html')

    // 2. Send response
    // res.write('Hello class!')

    // 6. Note that node auotmaically puts in a head and body tag, but we can replace those. Lets give it a try
    res.write('<head><link rel="stylesheet" href="#"> </head>')
    // 7. We're going to learn better ways to serve up HTML using the file sytem!

    // 5. replace res.write with the below html
    res.write('<p>Hello class!</p>')
    res.write('<p>hello again class</p>')


    // 3. end response
    res.end();
});

// 4. now look at your inspect tool and refresh while looking at the netWork tab

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

// first step to making a response is a response header