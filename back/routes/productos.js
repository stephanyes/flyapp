'use strict';
const express = require('express');
const router = express.Router();

const { Product } = require('../models/productos')


router.get('/', (req, res) => {
    Product.findAll().then(product => res.status(200).send(product))
})

router.get('/:id', (req, res) => {
    Product.findByPk({
        where: {
            id: req.params.id
        }
    }).then(product => res.status(200).send(product))
})

router.post('/', (req, res) => {
    Product.create(req.body).then(created => res.status(201).send(created))
})

router.put('/:id', (req, res) => {
    Product.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true,
        plain: true
    }).then(result => {
        let producto = result[1]
        res.status(202).send(result)
    })
})

router.delete('/:id', (req, res) => {
    Favorite.destroy({
        where: {
            id: req.params.id
        }
    })
})


module.exports = router;

