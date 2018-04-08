
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955API');
mongoose.Promise = global.Promise;

//Schema
var PersonSchema = new mongoose.Schema({
    name: {type: String},
},{timestamps: true });

mongoose.model('Person', PersonSchema);
var Person = mongoose.model('Person');

// Integrate body-parser with our App
app.use(bodyParser.json());

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
    Person.find({}, function(err, people) {
        if(err){
            res.send('error', {errors: err})
        }
        else{
            res.json( people );
        }
    })
})

//Process Message
app.get('/new/:name', function(req, res) {
    var person = new Person({
        name: req.params.name,
    });

    person.save(function(err){
        if(err){
            res.send('error', {errors: err})
        }
        else {
            res.redirect('/');
        }
    })
})  

//Process Comment 
app.get('/remove/:name', function(req, res){
    Person.remove({name: req.params.name }, function(err){
        res.redirect("/");
    })
})

app.get('/:name', function(req, res){
    Person.findOne({name: req.params.name}, function(err, person) {
        if(err){
            res.send('error', {errors: err})
        }
        else{
            res.json({ person });
        }
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
