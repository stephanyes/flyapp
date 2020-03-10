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
router.post("/addtocart", (req, res) => {
  // console.log(req.body, "req.user");
  if (req.user) {
    Cart.findOrCreate({
      where: { userId: req.user.dataValues.id},
      // include: [{model: Product}],
      defaults: {
      quantity: 1,
      total: req.body.producto.price,
      userId: req.user.dataValues.id
      }
    }).then(algo => { 
      let carro = algo[0]
      // console.log(algo,"algo")
      carro.addProduct(req.body.producto.id);
      res.status(201).send("Carrito creado y tabla Intermedia llena")
    })
  }
      //Product.findByPk(req.body.producto.id)
    // });
  // } else {
  //   Cart.create({
  //     quantity: 1,
  //     total: req.body.producto.price
  //   }).then(algo => res.status(201).send(algo));
  // }

  // User.findOrCreate({
  //   where: { username: 'sdepold' },
  //   defaults: {
  //     job: 'Technical Lead JavaScript'
  //   }
  // });
  // .then(creado => {
  //   Product.findByPk(req.params.id).then(found => creado.addProduct(found));
  //   res.status(201).send(creado);
  // });
});

router.post("/delete", (req,res)=>{
  console.log(req.body,"post delete")
  Cart.findOne({
    where: { userId: req.user.dataValues.id}
  }).then((data)=>{
    let kartId = data.dataValues.userId
    model.Product_Cart.destroy({
     
      where: { productId: req.body.e,
      cartId: kartId}     
   
})
  })
  .then(() => res.json("destruido"));
})


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

router.post("/order", (req,res,next)=>{
 console.log("Soy Order")
  Order.create({

    deliveryAddress: "Castillo 1332 Caba",
    paymentType: "card",
    status: "draft",
    total:  9000,
    userId: 1

  }).then(algo => {
    algo.addProduct(1,2);
    res.status(201).send("Orden creada con el products id")})

})

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