"use strict";
const express = require("express");
const router = express.Router();
const passport = require('passport')

const { User } = require('../models/index')

const isClient = (req, res, next) => {

    if (req.isAuthenticated()) {
        res.json(req.user)
    } else {
        res.json("")
    }
}

const isAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.dataValues.rol_id === 'admin') {
            next()
        }
    } else {
        res.redirect('/login')
    }
}

const isSuperAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.dataValues.rol_id === 'superAdmin') {
            next()
        }
    } else {
        res.redirect('/login')
    }
}


router.post('/logout', (req, res) => {
    var a = req.logout()
    // req.logout();
    res.json(req.user)
})

router.post('/login', passport.authenticate("local"), (req, res, next) => {
    res.status(201).json(req.user)
})

router.post('/register', (req, res, next) => {
    User.create(req.body)
        .then(user => res.send(user))
        .catch((err) => res.status(400).send(err))
})

//Esto levanta la info del cliente isloggdIn es el middleware que esta arriba
//para busqueda x axios (con esto levantamos la info del user , pasamos info del back al front)
router.get('/user', isClient)

router.put('/superAdmin', isSuperAdmin, (req, res, next) => {
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

router.get('/userList', (req, res) => {
    User.findAll().then((users) => res.send(users))
})

router.delete('/delete/:id', function (req, res, next) {
    User.destroy({ where: { id: req.params.id } })
        .then(response => {
            if (response) return res.json(response)
            else return res.sendStatus(404)
        })
})

router.put('/changeRole/:id', isSuperAdmin, function (req, res, next) {
    User.update(req.body, { where: { id: req.params.id }, returning: true, plain: true })
        .then(response => {
            if (response) return res.json(response[1])
            else return res.sendStatus(404)
        })
})


//PARA HACER SUPERADMINS EN POSTMAN
router.put('/makeSuperAdmin/:id', function (req, res, next) {
    User.update({ rol_id: 'superAdmin' }, { where: { id: req.params.id }, returning: true, plain: true })
        .then(response => {
            if (response) return res.json(response[1])
            else return res.sendStatus(404)
        })
})

module.exports = router;