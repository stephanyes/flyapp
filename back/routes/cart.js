"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const user = require("../models/users");
const order = require("../models/order");
const Product = require("../models/productos");
const Cart = require("../models/carrito");
const Order = require("../models/order");
const model = require("../models/index");
//creado.addProduct(found)
// el axios post del add to cart viene aca con toda la info del producto en el req body
router.post("/addtocart", (req, res) => {
  // console.log(req.body, "req.user");
  if (req.user) {
    Cart.findOrCreate({
      where: { userId: req.user.dataValues.id, status: "pending" },

      defaults: {
        quantity: 1,
        total: req.body.producto.price,
        userId: req.user.dataValues.id
      }
    }).then(algo => {
      let carro = algo[0];
      if (carro.dataValues.status == "pending") {
        carro.addProduct(req.body.producto.id);

        res.status(201).send("Sumo al carrito pending");
      } else {
        Cart.create({
          quantity: 1,
          total: req.body.producto.price,
          userId: req.user.dataValues.id
        }).then(algo => {
          let carro = algo[0];
          carro.addProduct(req.body.producto.id);

          res.status(201).send("Nuevo carrito, ya hay uno fulfilled");
        });
      }
    });
  }
});

router.post("/delete", (req, res) => {
  console.log(req.body, "post delete");
  Cart.findOne({
    where: { userId: req.user.dataValues.id, status: "pending" }
  })
    .then(data => {
      let kartId = data.dataValues.id;
      model.Product_Cart.destroy({
        where: { productId: req.body.e, cartId: kartId }
      });
    })
    .then(() => res.json("destruido"));
});

router.get("/products", (req, res) => {
  if (req.user) {
    Product.findAll({
      include: [
        {
          model: Cart,
          where: { userId: req.user.dataValues.id, status: "pending" }
        }
      ]
    }).then(found => res.json(found));
  }
});

router.post("/order", (req, res, next) => {
  console.log("Soy Order");
  Order.create({
    deliveryAddress: "Castillo 1332 Caba",
    paymentType: "card",
    status: "draft",
    total: 9000,
    userId: 1
  }).then(algo => {
    algo.addProduct(1, 2);
    res.status(201).send("Orden creada con el products id");
  });
});

module.exports = router;

// deliveryAddress: req.body.address1 + " " + req.body.address2 + " " + req.body.address3,
// paymentType: "card",
// status: "draft",
// total:  req.body.total

// if (req.user) {
//   Cart.create({
//     quantity: 1,
//     total: req.body.producto.price,
//     userId: req.user.dataValues.id
//   }).then(algo => {
//     algo.addProduct(req.body.producto.id);
//     res.status(201).send("Carrito creado y tabla Intermedia llena");
//     //Product.findByPk(req.body.producto.id)
//   });
// } else {
//   Cart.create({
//     quantity: 1,
//     total: req.body.producto.price
//   }).then(algo => res.status(201).send(algo));
// }
