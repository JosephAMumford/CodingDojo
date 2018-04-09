
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
var session = require('express-session')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');

mongoose.connect('mongodb://localhost/LoginRegistration');
mongoose.Promise = global.Promise;

//Schema
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 4},
    last_name: {type: String, required: true, minlength: 4},
    email: {type: String, required: true, minlength: 4, unqiue: true},
    password: {type: String, required: true, minlength: 4},
    birthday: {type: String, required: true},
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

app.use(session({
    key: 'user_sid',
    secret: "secretword",
    resave: true,
    saveUninitialized: false,
}));

// Routes
// Root Request
app.get('/', function(req, res) {
    if(req.session.userId){
        res.redirect("/users");
    }
    else {
        res.render("index");
    }
 
})

//Retrieve all users
app.get('/users', (req,res)=> {
    if(req.session.userId){
        let main_user = new User();
        User.findOne({_id: req.session.userId}, function(err, user) {
            if(err){
                res.send('error getting user')
            }
            else{
                main_user = user;
            }
        })
        User.find({}, function(err, users) {
            if(err){
                res.send('error getting user')
            }
            else{
                res.render('users', {users: users, main: main_user});
            }
        })
    }else {
        res.redirect('/');
    }
})

//Retrieve one user
app.get('/users/:id',(req,res) => {
    if(req.session.userId){
        let main_user = new User();
        User.findOne({_id: req.session.userId}, function(err, user) {
            if(err){
                res.sent('error')
            }
            else{
                main_user = user;
            }
        })
        User.findOne({_id: req.params.id}, function(err, user) {
            if(err){
                res.send('error');
            }
            else{
                res.render('view', {user: user, main: main_user});
            }
        })
    }else {
        res.redirect('/');
    }
})

app.post("/login", (req, res) =>{
    User.findOne({email: req.body.email}, function(err, user) {
        
        if(err){
            res.send('error logging in');
        }
        else {
            if(user != null){
                bcrypt.compare(req.body.password, user.password)
                .then(success =>{
                    req.session.userId = user._id;
                    res.redirect('/users');
                })
                .catch(fail => {
                    res.send('error logging in: password');
                })
            }
            else {
                res.redirect("/");
            }
        }
    })
})

app.get('/logout', (req, res) =>{
    if(req.session.userId){
        req.session.destroy();
        res.redirect('/');
    }
    else{
        res.redirect('/');
    }
})

//Create user
app.post('/users', (req,res)=> {
    if(req.body.password == req.body.confirm_password){
        bcrypt.hash(req.body.password, 10)
        .then(hashed_password => {
            var user = new User({
                first_name: req.body.first_name, 
                last_name: req.body.last_name,
                email: req.body.email,
                password: hashed_password,
                birthday: req.body.birthday,
            });
            user.save(function(err){
                if(err){
                    res.send('error creating user: saving');
                }
                else {
                    req.session.userId = user._id;
                    res.redirect('/users');
                }
            })
        })
        .catch(error => {
            res.send("password error");
        });
    }
    else {
        res.send("passwords don't match");
    }
})

//Render edit page
app.get('/edit/:id', (req,res)=>{

    if(req.session.userId){
        let main_user = new User();
        User.findOne({_id: req.session.userId}, function(err, user) {
            if(err){
                res.send('error getting user');
            }
            else{
                main_user = user;
            }
        })
        User.findOne({_id: req.params.id}, function(err, user) {
            if(err){
                res.send('error getting user');
            }
            else{
                res.render('edit', {user: user, main: main_user});
            }
        })
    }else {
        res.redirect('/');
    }
})

//Update user
app.post('/users/:id', (req,res)=> {
    User.findOne({_id: req.params.id}, function(err, user) {
        if(err){
            res.send('save error if');
        }
        else{
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.email = req.body.email;
            user.save(function(err){
                if(err){
                    res.send('save error else');
                }
                else {
                    res.redirect('/users');
                }
            })
        }
    })
})

//Delete user
app.post('/destroy/:id', (req,res) => {
    if(req.session.userId == req.params.id){
        User.remove({_id: req.params.id }, function(err){
            req.session.destroy();
            res.redirect("/");
        })
    }
    else{
        User.remove({_id: req.params.id }, function(err){
            res.redirect("/users");
        })
    }

})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})



/* TO ENCRYPT
bcrypt.hash('password_from_form', 10)
.then(hashed_password => {
})
.catch(error => {
});
*/


/* TO VALIDATE
bcrypt.compare('password_from_form', 'stored_password')
.then(callback)
.catch(callback)
*/