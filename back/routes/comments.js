"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const User = require("../models/users");
const Product = require("../models/productos");
const Comment = require("../models/comment_product");


//Generamos un comentario para determinado producto
//Los commnments estan siendo levantados en la ruta del producto individual
router.get('/getAll', (req, res) => {
    Comment.findAll()
        .then(found => res.status(200).send(found))

})

router.post('/rateProduct', (req, res) => {
    Comment.create({
        comment: req.body.comment,
        rating: req.body.rating,
        userId: req.user.dataValues.id,
        productId: 2
    })
        .then(review => {
            res.status(200).send(review)
        })
})



module.exports = router;
