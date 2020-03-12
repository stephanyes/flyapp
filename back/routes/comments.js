"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const User = require("../models/users");
const models = require("../models/index");
const Comment = require("../models/comment_product");


//Generamos un comentario para determinado producto
//Los commnments estan siendo levantados en la ruta del producto individual
router.get('/getAll', (req, res) => {
    Comment.findAll()
        .then(found => res.status(200).send(found))

})

router.post('/rateProduct', (req, res) => {
    //Estoy recibiendo el CartId el prod ID y tengo el userId ya
    Comment.create({
        comment: req.body.comment,
        rating: req.body.rating,
        userId: req.user.dataValues.id,
        productId: req.body.productId
    })
        .then(review => {
            //Aca modifico la columna leftComment 
            models.Product_Cart.update({
                leftComment: true,
            },
                {
                    where: {
                        productId: req.body.productId,
                        cartId: req.body.cartId
                    }
                })
            res.status(200).send(review)
        })
})



module.exports = router;
