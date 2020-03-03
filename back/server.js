"use strict";
const express = require("express");
const session = require('express-session')
const createError = require('http-errors')
const cookieParser = require('cookie-parser');
const db = require('./db/db')
const passport = require('passport')
const routes = require("./routes")
const { User } = require('../back/models/index')
const path = require('path')


const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser())



const LocalStrategy = require('passport-local').Strategy
app.use(session({
    secret: 'tuMadre'
}))


//usar passport
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', routes)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


//serealizar y deserializar el passport
passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser((id, done) => {
    User.findByPk(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({
            where: { username: username }
        })
            .then(user => {
                if (!user || !user.validPassword(password)) {
                    return done(null, false, { message: 'User or Password are incorrect!' })
                }
                return done(null, user)
            })
            .catch(done)
    }
))

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

db.sync({ force: true })
    .then((con) => {
        console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`)
        app.listen(3000, () => console.log('SERVER LISTENING AT PORT 3000'))
    })
module.exports = app;