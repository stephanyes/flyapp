"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const user = require("../models/users");
const order = require("../models/order");
const Product = require("../models/productos");
const Cart = require("../models/carrito");
const Order = require("../models/order")
const model = require("../models/index")
//creado.addProduct(found)
// el axios post del add to cart viene aca con toda la info del producto en el req body
router.post("/create", (req, res) => {

    if (req.user) {
        Cart.findOne({
            where: {
                userId: req.user.dataValues.id,
                status: "pending"
            }
        }).then((data) => {
            let kartId = data.dataValues.id
            Order.create({

                deliveryAddress: req.user.dataValues.address1 + " " + req.user.dataValues.address2 + " " + req.user.dataValues.address3,
                paymentType: "card",
                status: "draft",
                total: "9898",
                userId: req.user.dataValues.id,
                cartId: kartId

            })
        }).then(() => {
            Cart.update(
                { status: "fulfilled" },
                {
                    returning: true, where: {
                        userId: req.user.dataValues.id,
                        status: "pending"
                    }
                }
            )
        })
            .then(algo => {
                res.status(201).send(algo)
            })
    }

});

router.get("/all", (req, res) => {
    Order.findAll({
        include: [
            {
                model: Cart,
                include: [
                    {
                        model: model.Product
                    }
                ]
            }
        ]
    })
        .then((found) => res.status(200).json(found))
})

router.get("/cancel", (req, res) => {
    Order.update(
        { status: "cancelled" },

        { returning: true, plain: true, where: { id: req.body.orderId } }
    ).then((data) => res.status(201).send(data[1]))
})

router.get("/pay", (req, res) => {
    // let orderId = req.body.orderId
    Order.update(
        { status: "confirmed" },

        { returning: true, plain: true, where: { id: 3 } }
    )
        .then((data) => res.status(201).send(data[1]))
        .then(() => {
            setTimeout(function () {
                Order.update(
                    { status: "fulfilled" },

                    { returning: true, plain: true, where: { id: 3 } }
                )
            }, 20000)
        })
})

//Traemos todas las orders de un cliente que no sean draft
router.get("/history", (req, res) => {
    let statusCondition = "draft"
    Order.findAll({
        include: [{
            model: Cart,
            include: [{
                model: model.Product
            }]
        }],
        where: {
            userId: req.user.dataValues.id,
            status: statusCondition
        }
    })
        .then(orders => res.status(200).json(orders))
        .catch(err => res.send("NO ORDERS FOUND"))
})


module.exports = router;