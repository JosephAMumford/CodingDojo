var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'hj4h3fr498fh'}));  // string for encryption

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    //Intialize session data if not done already
    if(req.session.random_number == null){
        req.session.random_number = Math.floor(Math.random() * 100);
    }
    if(req.session.number_of_guesses == null){
        req.session.number_of_guesses = 0;
    }
    if(req.session.state == null){
        req.session.state = "empty";
    }
    if(req.session.user_guess == null){
        req.session.user_guess = 0;
    }
    if(req.session.current_guesses == null){
        req.session.current_guesses = "";
    }

    //Set session data to pass to view
    var current_data = {
        random_number: req.session.random_number,
        number_of_guesses: req.session.number_of_guesses,
        state: req.session.state,
        user_guess: req.session.user_guess,
        current_guesses: req.session.current_guesses,
    }

    res.render("index", {data: current_data});
})

app.post('/process', function(req,res){

    //Add one to for each guess
    req.session.number_of_guesses += 1;

    //Format guessed numbers as a string
    if(req.session.number_of_guesses > 1){
        req.session.current_guesses += "," + req.body.user_guess.toString();
    }
    else{
        req.session.current_guesses += req.body.user_guess.toString();
    }
    req.session.user_guess = req.body.user_guess;

    //Check if guess is equal, higher, or lower to random number
    if(Number(req.session.user_guess) == req.session.random_number){
        req.session.state = "won";
    }
    if(Number(req.session.user_guess) < req.session.random_number){
        req.session.state = "low";
    }
    if(Number(req.session.user_guess) > req.session.random_number){
        req.session.state = "high";
    }

    res.redirect('/');
})


app.post('/reset', function(req,res){

    //Reset all data to default values, get new random number
    req.session.random_number = Math.floor(Math.random() * 100);
    req.session.number_of_guesses = 0;
    req.session.state = "empty";
    req.session.user_guess = 0;
    req.session.current_guesses = "";
    
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});