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
    res.render("index");
})

app.get('/results', function(req, res) {

    var data = {
        name: req.session.name,
        location: req.session.location,
        langauge: req.session.langauge,
        comment: req.session.comment
    }
    res.render("result", {user: data});
})

app.post('/submit', function(req, res) {
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;

    res.redirect('/results');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});