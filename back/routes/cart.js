"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const user = require("../models/users");
const order = require("../models/order");
const Product = require("../models/productos");
const Cart = require("../models/carrito");
//creado.addProduct(found)
// el axios post del add to cart viene aca con toda la info del producto en el req body
router.post("/addtocart", (req, res) => {
  console.log(req.user, "req.user");
  if (req.user) {
    Cart.create({
      quantity: 1,
      total: req.body.producto.price,
      userId: req.user.dataValues.id
    }).then(algo => {
      algo.addProduct(req.body.producto.id);
      res.status(201).send("Carrito creado y tabla Intermedia llena");
      //Product.findByPk(req.body.producto.id)
    });
  } else {
    Cart.create({
      quantity: 1,
      total: req.body.producto.price
    }).then(algo => res.status(201).send(algo));
  }
  // .then(creado => {
  //   Product.findByPk(req.params.id).then(found => creado.addProduct(found));
  //   res.status(201).send(creado);
  // });
});

router.get("/products", (req, res) => {
  if(req.user){
  Product.findAll({
    include: [
      {
        model: Cart,
        where: { userId: req.user.dataValues.id }
      }
    ]
  }).then(found => res.json(found));
}})

module.exports = router;
