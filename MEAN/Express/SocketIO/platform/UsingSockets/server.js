// Import express and path modules.
var express = require( "express");
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
    //server socket code goes here

    // If you don't know where this code is supposed to go reread the above info 
    socket.on( "button_clicked", function (data){
        console.log( 'Someone clicked a button!  Reason: '  + data.reason);
        socket.emit( 'server_response', {response:  "sockets are the best!"});
    })

    //  EMIT:
    //socket.emit( 'my_emit_event');
    
    //  BROADCAST:
    //socket.broadcast.emit( "my_broadcast_event");
    
    //  FULL BROADCAST:
    //io.emit( "my_full_broadcast_event");
})

