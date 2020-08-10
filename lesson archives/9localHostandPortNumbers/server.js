// 127.0.0.1 is the address of our local host
// a port number is a specific port on our computer that our software communicates through.
const http = require('http');


const server = http.createServer((req, res) => {
    console.log('request made');
});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

// 1 run node server and see the console.log
// you would have to hit ctrl + c to cancel the server from listening