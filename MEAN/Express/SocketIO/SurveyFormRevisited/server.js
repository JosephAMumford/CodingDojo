// Import express and path modules.
var express = require("express");
var path = require( "path");
// Create the express app.
var app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Root route to render the index.ejs view.
app.get('/', function(req, res) {
    res.render("index");
})

var server = app.listen(8000,function(){
    console.log("listening on port 8000");
})

var io = require("socket.io").listen(server);

io.sockets.on('connection', function(socket){
    
    console.log("Client/socket is connected!");
    console.log("Client/socked id is: ", socket.id);

    socket.on("posting_form", function (data){
        let message = "You emitted the following information to the server: { name: " + data.name +
        ", location: " + data.location + ", language: " + data.language + ", comment: " + data.comment + " }";
        socket.emit('updated_message', {response: message});
        
        let num = Math.floor(Math.random() * 1000);
        socket.emit('random_number', {response: num.toString() });
    })
})

