var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req,res){
    res.render('index', {title: "my Express project"});
});

app.post('/users', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.listen(8000, function(){
    console.log("listening on port 8000");
})