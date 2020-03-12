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
const email = require("../mailDispatcher");
//creado.addProduct(found)
// el axios post del add to cart viene aca con toda la info del producto en el req body
router.post("/create", (req, res) => {
  if (req.user) {
    Cart.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "pending"
      }
    })
      .then(data => {
        let kartId = data.dataValues.id;
        Order.create({
          deliveryAddress:
            req.user.dataValues.address1 +
            " " +
            req.user.dataValues.address2 +
            " " +
            req.user.dataValues.address3,
          paymentType: "card",
          status: "draft",
          total: "9898",
          userId: req.user.dataValues.id,
          cartId: kartId
        });
      })
      .then(() => {
        Cart.update(
          { status: "fulfilled" },
          {
            returning: true,
            where: {
              userId: req.user.dataValues.id,
              status: "pending"
            }
          }
        );
      })
      .then(algo => {
        res.status(201).send(algo);
      });
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
    ],
    order: [["createdAt", "DESC"]]
  }).then(found => res.status(200).json(found));
});

router.post("/cancelorder", (req, res) => {
  console.log("entre al cancel");

  Order.update(
    { status: "cancelled" },

    { returning: true, plain: true, where: { id: req.body.e } }
  ).then(data => res.status(201).send(data[1]));
});

router.get("/orderpayment/:id", (req, res) => {
  Order.findOne({
    include: [
      {
        model: Cart,
        include: [
          {
            model: model.Product
          }
        ]
      }
    ],
    where: {
      id: req.params.id,
      userId: req.user.dataValues.id
    }
  })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

router.post("/pay", (req, res) => {
  console.log(req.body, "bodyyyyyyyyyyyyy");
  Order.update(
    { status: "confirmed" },

    { returning: true, plain: true, where: { id: req.body.e } }
  )
    .then(() => email.sendTemplateConfirmation())
    .then(data => res.status(201).send(data[1]))
    .then(() => {
      setTimeout(function() {
        Order.update(
          { status: "fulfilled" },

          { returning: true, plain: true, where: { id: req.body.e } }
        );
      }, 25000);
    });
});

router.get("/ultimaorden", (req, res) => {
  Order.findOne({
    include: [
      {
        model: Cart,
        include: [
          {
            model: model.Product
          }
        ]
      }
    ],
    where: {
      userId: req.user.dataValues.id
    },
    order: [["createdAt", "DESC"]]
  })
    .then(orders => res.status(201).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

//Traemos todas las orders de un cliente que no sean draft
router.get("/draft", (req, res) => {
  let statusCondition = "draft";
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
    ],
    where: {
      userId: req.user.dataValues.id,
      status: statusCondition
    },
    order: [["createdAt", "DESC"]]
  })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

router.get("/confirmed", (req, res) => {
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
    ],
    where: {
      userId: req.user.dataValues.id,
      status: "confirmed"
    },
    order: [["createdAt", "DESC"]]
  })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

router.get("/cancelled", (req, res) => {
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
    ],
    where: {
      userId: req.user.dataValues.id,
      status: "cancelled"
    }
  })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

router.get("/fulfilled", (req, res) => {
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
    ],
    where: {
      userId: req.user.dataValues.id,
      status: "fulfilled"
    },
    order: [["createdAt", "DESC"]]
  })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

router.get("/lala/:id", (req, res) => {
  console.log("soy buscar order");
  console.log(req.params, "params");

  Order.findOne({
    include: [
      {
        model: Cart,
        include: [
          {
            model: model.Product
          }
        ]
      }
    ],
    where: {
      id: req.params.id,
      userId: req.user.dataValues.id
    }
  })
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send("NO ORDERS FOUND"));
});

// router.get("/getProdCart", (req, res) => {
//     Order.findAll({
//         include: [{
//             model: Cart,
//             include: [{
//                 model: model.Product
//             }]
//         }],
//         where: {
//             userId: req.user.dataValues.id,
//         }

//            id: req.params.id,
//            userId:  req.user.dataValues.id
//         },
//         order: [ [ 'createdAt', 'DESC' ]]

//     })
//         .then(orders => res.status(200).json(orders))
//         .catch(err => res.send("NO ORDERS FOUND"))
// })

module.exports = router;
