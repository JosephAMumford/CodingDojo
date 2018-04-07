
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ArrakisSandworms');
mongoose.Promise = global.Promise;

var SandwormSchema = new mongoose.Schema({
    name: {type: String},
    region: {type: String},
    age: {type: Number},
    mass: {type: Number},
    length: {type: Number},
    created_on : {type: Date, default: Date.now },
},{timestamps: true });

mongoose.model('Sandworm', SandwormSchema);
var Sandworm = mongoose.model('Sandworm');

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
    Sandworm.find({}, function(err, sandworms) {
        if(err){
            res.render('error', {errors: err})
        }
        else{
            res.render('index', { sandworms });
        }
    })
})

//Add Sandworm Info
app.get('/sandworms/new', function(req, res){
    res.render('new');
})

//Get Sandworm ID
app.get('/sandworms/:id', function(req, res){
    var worm_id = req.params.id;
    Sandworm.findOne({_id: worm_id}, function(err, sandworm) {
        if(err){
            res.render('error', {errors: err})
        }
        else{
            res.render('view',{ sandworm } );
        }
    })
})

//Process sandworm info
app.post('/sandworms', function(req, res) {
    var sandworm = new Sandworm({
        name: req.body.name, 
        region: req.body.region,
        age: req.body.age,
        mass: req.body.mass,
        length: req.body.length,
    });

    sandworm.save(function(err){
        if(err){
            res.render('error', {errors: err})
        }
        else {
            res.redirect('/');
        }
    })
})  

//Edit sandworm info
app.get('/sandworms/edit/:id', function(req, res){
    var worm_id = req.params.id;
    Sandworm.findOne({_id: worm_id}, function(err, sandworm) {
        if(err){
            res.render('error', {errors: err})
        }
        else{
            res.render('edit',{ sandworm } );
        }
    })
})

//Process sandworm edit
app.post('/sandworms/:id', function(req, res){
    var worm_id = req.params.id;
    Sandworm.findOne({_id: worm_id}, function(err, sandworm) {
        if(err){
            res.render('error', {errors: err})
        }
        else{
            sandworm.name = req.body.name;
            sandworm.region = req.body.region;
            sandworm.age = req.body.age;
            sandworm.mass = req.body.mass;
            sandworm.length = req.body.length;
            sandworm.save(function(err){
                if(err){
                    res.render('error', {errors: err})
                }
                else {
                    res.redirect('/');
                }
            })
        }
    })
})

//Delete sandworm
app.post('/sandworms/destroy/:id', function(req, res){
    var worm_id = req.params.id;
    Sandworm.remove({_id: worm_id }, function(err){
        res.redirect("/");
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
