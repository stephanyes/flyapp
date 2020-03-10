"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const user = require("../models/users");
const order = require("../models/order");
const Product = require("../models/productos");
const Cart = require("../models/carrito");
const Category = require("../models/category");

//Trae todas las categorias
router.get('/', (req, res) => {
    Category.findAll().then(found => res.status(200).json(found))
})

//Trae los productos que contengan la categoria deseada
router.get('/:id', (req, res) => {
    Product.findAll({
        where: {
            categoryId: req.params.id
        }
    }).then(found => res.status(200).json(found))
})

//EDIT CATEGORIES
router.post('/', (req, res) => {
    Category.create(req.body).then(createdCategory => res.status(200).send(createdCategory))
})

router.delete('/:id', (req, res) => {
    Category.destroy({ where: { id: req.params.id } })
        .then(response => {
            if (response) return res.json(response)
            else return res.sendStatus(404)
        })
})

module.exports = router;
