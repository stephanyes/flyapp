"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");

class Product extends S.Model { }
Product.init(
    {
        name: {
            type: S.STRING,
            allowNull: false,
        },
        description: {
            type: S.TEXT,
            allowNull: false
        },
        img_1: {
            type: S.STRING, //public/imgs
            allowNull: false
        },
        img_2: {
            type: S.STRING,
            allowNull: true //que no sea obligatoria la segunda img
        },
        price: {
            type: S.INTEGER,
            allowNull: false
        },
        stock: {
            type: S.INTEGER,
            allowNull: false
        },

    },
    { sequelize, modelName: "product" }
);


module.exports = Product;

