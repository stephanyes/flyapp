"use strict";
const express = require("express");
const router = express.Router();
const passport = require('passport')

const { User } = require('../models/index')

const isClient = (req, res, next) => {
    
    if (req.isAuthenticated()) {
        console.log('pase el middleware');
        res.json(req.user)
    } else { res.json("")
    }
}

const isAdmin = (req, res, next) => {
    console.log('se ejecuta');
    if (req.isAuthenticated()) {
        console.log('pase el middleware');
        if (req.user.dataValues.rol_id === 'admin') {
            next()
        }
    } else {
        console.log('entre aca porque no pase el md!');
        res.redirect('/login')
    }
}

const isSuperAdmin = (req, res, next) => {
    console.log('se ejecuta');
    if (req.isAuthenticated()) {
        console.log('pase el middleware');
        if (req.user.dataValues.rol_id === 'superAdmin') {
            console.log('verifique superAdmin')
            next()
        }
    } else {
        console.log('entre aca porque no pase el md!');
        res.redirect('/login')
    }
}


router.post('/logout', (req, res) => {
    console.log(req.user)
    var a = req.logout()
    // req.logout();
    console.log(a)
    res.json(req.user)
})

router.post('/login', passport.authenticate("local"), (req, res, next) => {
    // console.log(req.user,'entre al login')
    res.status(201).json(req.user)
})

router.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => console.log(user))
        .then((user) => res.send(user))
        .then(() => console.log("usuario creado"))
})

//Esto levanta la info del cliente isloggdIn es el middleware que esta arriba
//para busqueda x axios (con esto levantamos la info del user , pasamos info del back al front)
router.get('/user', isClient)

router.put('/superAdmin', isSuperAdmin, (req, res, next) => {
    console.log('entre a /superAdmin')
    User.update({ rol_id: req.body.rol }, { //acordarse de que el req.body tenga el rol y el ID
        where: {
            id: req.body.id
        },
        returning: true,
        plain: true
    }).then(resultado => {
        let usuario = resultado[1]
        res.status(202).send(usuario)
    })
})


module.exports = router;