
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestfulTaskAPI');
mongoose.Promise = global.Promise;

//Schema
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now },
},{timestamps: true });

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

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

// Restful Routes
// Root retreive all tasks
app.get('/tasks', function(req, res) {
    Task.find({}, function(err, tasks) {
        if(err){
            res.send('error', {errors: err})
        }
        else{
            res.json( tasks );
        }
    })
})

//Retrieve single task
app.get('/task/:id', function(req, res){
    Task.findOne({_id: req.params.id}, function(err, task) {
        if(err){
            res.send('error', {errors: err})
        }
        else{
            res.json({ tasks });
        }
    })
})

//Create Task
app.post('/tasks', function(req, res) {
    var task = new Task(req.body);
    console.log(task);
    /*
    var task = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,    
        });
    */

    task.save(function(err){
        if(err){
            res.send('error', {errors: err})
        }
        else {
            res.redirect('/tasks');
        }
    })
})  

//Update Task
app.put('/tasks/:id', function(req, res){
    Task.findOne({_id: req.params.id}, function(err, task) {
        if(err){
            res.send('error', {errors: err})
        }
        else{
            res.json({ task });
        }
    })
})

//Delete Task
app.delete('/tasks/:id', function(req, res){
    Person.remove({_id: req.params.id }, function(err){
        res.redirect("/");
    })
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
