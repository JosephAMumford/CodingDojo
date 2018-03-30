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

var old_messages = [];

io.sockets.on('connection', function(socket){
    
    console.log("Client/socket is connected!");
    console.log("Client/socked id is: ", socket.id);

    socket.on("user_login", function (data){
        io.emit("user_joined", data);
        socket.emit("display_old",old_messages);
    })

    socket.on("message_submitted", function(data){
        old_messages.push(data);
        io.emit("display_message", data);
    })

    
})