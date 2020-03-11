"use strict";
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Product = require("../models/productos");
const Comment = require("../models/comment_product");

//Trae todos
router.get("/all", (req, res) => {
  Product.findAll().then(products => res.status(200).json(products));
});

//Trae uno en particular
router.get("/:id", (req, res) => {
  Product.findOne({
    include: [{
      model: Comment
    }],
    where: {
      id: req.params.id
    }
  })
    .then(product => {
      res.status(200).send(product)
    })

});


//Crea un producto
router.post("/", (req, res) => {
  console.log(req.body)
  Product.create(req.body).then(created => res.status(201).send(created));
});
//Trae Busquedas del Navbar
router.use("/searchBar", (req, res) => {
  console.log("entre al search");

  const Op = Sequelize.Op;
  Product.findAll({
    limit: 10,
    where: {
      name: {
        [Op.iLike]: "%" + req.body.search + "%"
      }
    }
  }).then(products => {
    res.status(200).json(products);
  });
});
//Modifica un producto
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  }).then(result => {
    let producto = result[1];
    res.status(202).send(result);
  });
});

//Elimina un producto
// router.delete("/:id", (req, res) => {
//   Product.destroy({
//     where: {
//       id: req.params.id
//     }
//   });
// });

router.delete('/:id', function (req, res, next) {
  Product.destroy({ where: { id: req.params.id } })
    .then(response => {
      if (response) return res.json(response)
      else return res.sendStatus(404)
    })
})
module.exports = router;
