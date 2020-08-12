// 1. create views folder and place an index.html file in that view
const http = require('http');
// 4. require fs
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)



    res.setHeader('Content-type', 'text-html')
    // 3. get rid of all of the writes and ends. We are going to serve up a file this time.

    // 5. send an html file with fs.readfile
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
            // 6.replace the above with the following
            // res.end(data)
            // 6... we only need to use write if we are doing multiple things, but if we aren't doing multiple things, we can put the data in inside of end
        }
    }
    )
});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

