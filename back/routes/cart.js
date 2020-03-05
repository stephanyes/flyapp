"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const user = require("../models/users");
const order = require("../models/order");
const Product = require("../models/productos");
const Cart = require("../models/carrito");

router.get("/create", (req, res) => {
  Cart.create({
    quantity: 4,
    total: 4,
    userId: null
  }).then(creado => {
    console.log(req.user);

    res.status(201).send(creado);
  });
});

router.get("/cookie", (req, res) => {
  let algo = localStorage.getItem("testing");
  console.log(JSON.parse(algo));

  res.send(req.cookies);
});

module.exports = router;
