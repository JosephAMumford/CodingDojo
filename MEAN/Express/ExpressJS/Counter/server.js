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
    if(req.session.count == null){
        req.session.count = 0;
    }
    var data = {
        count: req.session.count,
    }
 res.render("index", {counter: data});
})

app.get('/one', function(req, res) {
    req.session.count += 1;
    res.redirect('/');
})

app.get('/two', function(req, res) {
    req.session.count += 2;
    res.redirect('/');
})

app.get('/reset', function(req, res) {
    req.session.count = 0;
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});