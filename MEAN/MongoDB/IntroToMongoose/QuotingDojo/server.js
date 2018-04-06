
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String},
    created_on : {type: Date, default: Date.now },
},{timestamps: true });

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root Request
app.get('/', function(req, res) {

    res.render('index');
})


//Get Quotes
app.get('/quotes', function(req, res){
    User.find({}, function(err, users) {
        if(err){
            console.log("an error");
            res.render('error', {errors: err})
        }
        else{
            res.render('quotes', { users });
        }
    })
})

//Add Quotes
app.post('/quotes', function(req, res) {
    
    var user = new User({name: req.body.name, quote: req.body.quote});

    user.save(function(err){
        if(err){
            res.render('error', {errors: err})
        }
        else {
            res.redirect('/quotes');
        }
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
