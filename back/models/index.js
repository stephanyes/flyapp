const Product = require("./productos");
const User = require("./users");
const Cart = require("./carrito");
const Role = require("./roles");
const Order = require("./order");
const Category = require("./category");
const Comment = require("./comment_product");
const S = require("sequelize");
const sequelize = require("../db/db");

//Tablas intermedias
class Product_Cart extends S.Model {}
Product_Cart.init(
  {
    productId: {
      type: S.INTEGER,
      references: {
        model: Product,
        key: "id"
      }
    },
    cartId: {
      type: S.INTEGER,
      references: {
        model: Cart,
        key: "id"
      }
    },
    quantity: {
      type: S.INTEGER,
      defaultValue: 0
    },
    leftComment: {
      type: S.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize, modelName: "product_cart" }
);

class Order_product extends S.Model {}
Order_product.init(
  {
    quantity: {
      type: S.INTEGER,
      defaultValue: 0
    }
  },
  { sequelize, modelName: "order_product" }
);

//Relaciones
Cart.belongsToMany(Product, { through: "product_cart" });
Product.belongsToMany(Cart, { through: "product_cart" });
//order_product
// Order.belongsToMany(Product, { through: "order_product" });
Order.belongsTo(Cart);
// Product.belongsToMany(Order, { through: "order_product" });

User.hasOne(Cart); // esta cheequeado?
// Cart.hasMany(Product)

Category.hasOne(Product);
User.hasOne(Order);
User.hasMany(Comment);
Product.hasMany(Comment);

module.exports = {
  Product,
  User,
  Cart,
  Role,
  Category,
  Order,
  Product_Cart,
  Comment
};
