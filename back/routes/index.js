'use strict';
const express = require('express');
const router = express.Router();
const passport = require('passport')

const { User, Favorite } = require('../models/index')

const isLogedIn = (req, res, next) => {
    console.log('se ejecuta');
    if (req.isAuthenticated()) {
        console.log('pase el middleware');
        next()
    } else {
        console.log('entre aca porque no pase el md!');
        res.redirect('/login')
    }
}

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/")
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    console.log('USER', req.user)
    console.log('Autentico OK')
    res.status(201).json(req.user)
})

router.post('/addFav', (req, res) => {
    Favorite.create({
        Title: req.body.fav.Title,
        Year: req.body.fav.Year,
        Rated: req.body.fav.Rated,
        Director: req.body.fav.Director,
        imdbRating: req.body.fav.imdbRating,
        Poster: req.body.fav.Poster,
        Plot: req.body.fav.Plot,
        imdbID: req.body.fav.imdbID,
        userId: req.user.dataValues.id
    })
        .then(created => res.status(201).json(created))
})

router.get('/tabla', (req, res) => {
    Favorite.findAll({
        where: {
            userId: req.user.dataValues.id
        }
    })
        .then(algo => res.json(algo))
})

// router

router.post('/register', (req, res) => {
    User.create({
        username: req.body.user.userName,
        email: req.body.user.email,
        password: req.body.user.password
    })
        .then(creado => console.log(creado))
})

// router.delete('/deleteFav', (req,res) => {
//     Favorite.destroy({
//         where: {
//             imdbID: 
//         }
//     })
// })


module.exports = router;