"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const User = require("../models/users");
const Product = require("../models/productos");
const Comment = require("../models/comment_product");


//Generamos un comentario para determinado producto
//Los commnments estan siendo levantados en la ruta del producto individual
router.post('/rateProduct', (req, res) => {
    Comment.create({
        comment: "Este es el SJEGUNDO comentario",
        rating: 3,
        userId: 1,
        productId: 2
    })
        .then(review => {
            //console.log(`Se creo el comentario para el producto ${review}`);
            console.log(review);
            res.status(200).send(review)
        })
})



module.exports = router;
