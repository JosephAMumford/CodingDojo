const   fs = require('fs');

module.exports = function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);

    var str = request.url;

    //Check urls
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.write(contents); 
            response.end();
        });
    } 
    else if(request.url === '/pics'){
        fs.readFile('views/pics.html', 'utf8', function (errors, contents) {
            response.write(contents); 
            response.end();
        });
    } 
    //Handles any .css file
    else if(str.search(/css/i) != -1){
        fs.readFile('.' + request.url, 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    //Handles any .jpg file
    else if(str.search(/jpg/i) != -1){
        fs.readFile('.'+ request.url, function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        fs.readFile('views/error.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
}