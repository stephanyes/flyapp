"use strict";
const express = require("express");
const router = express.Router();
const passport = require('passport')

const { User } = require('../models/index')

// const isLogedIn = (req, res, next) => {
//     console.log('se ejecuta');
//     if (req.isAuthenticated()) {
//         console.log('pase el middleware');
//         next()
//     } else {
//         console.log('entre aca porque no pase el md!');
//         res.redirect('/login')
//     }
// }


router.post('/logout', (req, res) => {
    req.logout();
    res.redirect("/")
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    console.log('USER', req.user)
    console.log('Autentico OK')
    res.status(201).json(req.user)
})




router.post('/register', (req, res) => {
    console.log('holis')
    User.create(req.body)
        .then(user => console.log(user))
        .then((user) => res.send(user))
})

router.get('/user', function chequeoLogin(req, res) {
    if (req.user) {
        res.send(`Estas en el perfil de ${req.user.dataValues.firstName}`)
    }
    else res.send('no ingreso como user wachin')


})


module.exports = router;