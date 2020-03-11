"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");
const User = require('./users')


class Cart extends S.Model { }
Cart.init(
    {
        status: {
            type: S.ENUM({
                values: ['pending', 'fulfilled']
            }),
            defaultValue: "pending"
        },
        total: {
            type: S.STRING,
            defaultValue: null
        }

    },
    { sequelize, modelName: "cart" }
);


module.exports = Cart;

