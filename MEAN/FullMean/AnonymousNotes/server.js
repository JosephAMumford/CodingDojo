var express = require("express");

var app = express();

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');

mongoose.connect('mongodb://localhost/AnonymousNotes');
mongoose.Promise = global.Promise;

//Schema
var Schema = mongoose.Schema;
var NoteSchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 3 },
    created_on: { type: Date, default: Date.now },
}, { timestamps: true });


mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note');

app.use(express.static(__dirname + '/angular-app/dist'));

app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>");
})

app.get('/notes', (req,res)=> {

    Note.find({}, function(err, notes) {
        if(err){
            res.send('error getting user')
        }
        else{
            res.send(notes);
            //res.render('users', {users: users, main: main_user});
        }
    })
})

app.post('/notes', (req,res)=> {
    var note = new Note({
        text: req.body.text,
    });
    user.save(function (err) {
        if (err) {
            res.send('error creating note: saving');
        }
        else {
            res.redirect('/');
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})