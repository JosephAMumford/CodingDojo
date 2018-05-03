
// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// CORS
const cors = require('cors');
app.use(cors());

// Static Directory
app.use(express.static(__dirname + '/angular-app/dist'));

// Body Parser 
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Morgan (optional)
let morgan = require("morgan");
app.use(morgan('dev'));

var bcrypt = require('bcrypt-as-promised');

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bike-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const userSchema = new Schema({
    user_id: {
        type: Number,
        required: [true, "must have id assigned"],
    },
    first_name: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        minlength: [4, 'first name length must be greater than 4'],
    },
    last_name: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        minlength: [4, 'first name length must be greater than 4'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        minlength: [4, 'email length must be greater than 4'],
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        minlength: [4, 'email length must be greater than 4'],
    },
}, {
    timestamps: true
});

const listingSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'title is required'],
        minlength: [4, 'title length must be greater than 4'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'description is required'],
        minlength: [4, 'description length must be greater than 4'],
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    location: {
        type: String,
        trim: true,
        required: [true, 'location is required'],
        minlength: [4, 'location length must be greater than 4'],
    },
    image: {
        type: String,
        trim: true,
        required: [true, 'image is required'],
    },
    user_id: {
        type: Number,
        required: [true, 'user id is required'],
    }
}, {
        timestamps: true
    });

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
listingSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const User = mongoose.model('User', userSchema);
const Listing = mongoose.model('Listing', listingSchema);


// - - - - = = = = Controller = = = = - - - - 
const bikeController = {
    index: (request, response) => {
    },
    create: (request, response) => {
        Listing.create(request.body)
            .then(listing => response.json(listing))
            .catch(error => console.log(error));
    },
    browser: (request, response) => {
        console.log("getting listings");
        Listing.find({})
            .then(listings => response.json(listings))
            .catch(error => console.log(error));
    },
    current: (request, response) => {
        console.log("getting current listings");
        Listing.find({user_id: request.params.id})
            .then(listings => {
                console.log(listings);
                response.json(listings);
            })
            .catch(error => console.log(error));
    },
    update: (request, response) => {
        console.log("updating listing");
        Listing.update({_id : request.body._id},{
            title: request.body.title,
            description: request.body.description,
            price: request.body.price,
            image: request.body.image,
            location: request.body.location,
        })
            .then(listing => response.json(listing))
            .catch(error => console.log(error));
    },
    destroy: (request, response) => {
        console.log("deleting");
        console.log(request.params.id);
        Listing.deleteOne({_id: request.params.id})
            .then(listing => response.json(listing))
            .catch(error => console.log(error));
    },
    random: (request, response) => {
        Listing.aggregate( [ { $sample: { size: 1 } }] )
            .then(listing => {
                response.json(listing);
            })
            .catch(error => console.log(error));
            }
        };
        
const userController = {
    add_user: (request, response) => {
        bcrypt.hash(request.body.password, 10)
        .then(hashed_password => {
            var new_user = new User({
                user_id: request.body.user_id,
                first_name: request.body.first_name,
                last_name: request.body.last_name,
                email: request.body.email,
                password: hashed_password,
            });
            User.create(new_user)
                .then(user => {
                    console.log(user);
                    response.json(user);
                })
                .catch(error => console.log(error))
        })
    },
    get_user: (request, response) => {

    },
    login_user: (request, response) => {
        User.findOne({ email: request.body.email }, function (err, user) {
            if (err) {
                response.send('error logging in');
            }
            else {
                if (user != null) {
                    bcrypt.compare(request.body.password, user.password)
                        .then(success => {
                            response.json(user);
                        })
                        .catch(fail => {
                            response.send('error logging in: password');
                        })
                }
                else {
                    response.redirect("/");
                }
            }
        })
    }
}

// - - - - = = = = Routes = = = = - - - - 
app
    .get('/index', bikeController.index)
    .get('/listings', bikeController.browser)
    .get('/listings/:id', bikeController.current)
    .get('/destroy/:id', bikeController.destroy)
    .get('/random', bikeController.random)
    .put('/update', bikeController.update)
    .post('/listings', bikeController.create)
   .get('/users', userController.get_user)
   .post('/users', userController.add_user)
   .post('/login', userController.login_user)
    .all("*", (req, res, next) => {
        res.sendFile(path.resolve("./angular-app/dist/index.html"))
    });

// - - - - = = = = Server Listener = = = = - - - - 
const port = 9200;
app.listen(port, () => console.log(`Express server listening on port ${port}`));