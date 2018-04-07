
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MessageBoard');
mongoose.Promise = global.Promise;

//Schema
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    text: {type: String, required: true},
    comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
},{timestamps: true });

var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    name: {type: String, required: true, minlength: 4},
    text: { type: String, required: true},
},{timestamps: true});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema)

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

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
    Post.find({}).populate('comments').exec(
        function(err,post){
            console.log(post);
            res.render('index', {posts: post});
        }
    )
})

//Process Message
app.post('/message', function(req, res) {
    var post_message = new Post({
        name: req.body.name, 
        text: req.body.text,
    });

    console.log(post_message);

    post_message.save(function(err){
        if(err){
            res.render('error', {errors: err})
        }
        else {
            res.redirect('/');
        }
    })
})  

//Process Comment 
app.post('/posts/:id', function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment({name: req.body.name, text: req.body.text,});

        comment._post = post._id;

        comment.save(function(err){
            post.comments.push(comment);
            post.save(function(err){
                if(err){
                    console.log("An error occurred");
                }
                else {
                    res.redirect('/');
                }
            })
        })
    });
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
