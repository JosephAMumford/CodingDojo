// http server
const http = require('http');
const   fs = require('fs');
// the file below is the file you need to create for this assignment.
// NOTE!!!  The '.' in the filepath below just refers to the location of the current file, in this case
// the file is app.js.  Thus the path './static.js' just refers to a file called static.js
const static_contents = require('./static.js');

//creating a server
var server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
});

server.listen(6789);
console.log("Running in localhost at port 6789");