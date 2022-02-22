const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('./models/user');
const csurf = require('csurf');
const cookieParser = require('cookie-parser')

/*
const { func } = require('joi');
const { deleteOne } = require('./models/user');
const { urlencoded } = require('express');
*/

mongoose.connect('mongodb://localhost/AtelierBlogue');

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({username: username}, function(err, user){
            if(err) { return done(err);}
            if(!user) {return done(null, false);}
            if(!user.checkPassword(password)) {return done(null, false);}
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, callBack){
    callBack(null, user.id);
});

passport.deserializeUser(function(id, callBack){
    User.findOne({id: id}, function(err, user){
        if(err){return callBack(err);}
        callBack(null, user);
    });
});


let app = express();
app.use(express.json());
app.use(cookieParser());
app.use(csurf({cookie:true}), function(req, res, next){
    res.cookie('XSRF_TOKEN', req.csrfToken(), {httpOnly: false});
    next();
});

app.use(session({
    secret: 'eqbfcyeqb$$cheuqnv', 
    resave: false, saveUninitialized: true,
    store: mongoStore.create({mongoUrl: 'mongodb://localhost/AtelierBlogue', collection:'sessions'})
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(router)

app.listen(3000);