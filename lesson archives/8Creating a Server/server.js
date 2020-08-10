// in node we manually create the server that listens to requests from the browser
// now we are going to work on creating a local server

// 1. require the http method from node
const http = require('http')

// 2 create a server, that takes a callback function as an argument
// 2... the callback function takes two arguments, request and response
// 2... req is an object
const server = http.createServer((req, res) => {
    console.log('request made');
});

// 3. add a listen method so our server is listening for requests
// 3000 is the port number, local host is the hostname. local host is a default value, last is the callback function that fires when we start listening
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})