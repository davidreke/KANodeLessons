// 1. Note: when we refresh the browser on localHost 3000, it iwll log "request made"
// 2. Lets replace request made with the req Object
// 3. then restart the process and reload.
const http = require('http');


const server = http.createServer((req, res) => {
    
    // console.log( req);
    // 4 replace console.log(req) with console.log(req.url and req.method)
    // try going to localhost:3000/about
    console.log(req.url , req.method)
});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

