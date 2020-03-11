"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");

class Order extends S.Model { }
Order.init(
    {
        deliveryAddress: {
            type: S.STRING,
            defaultValue: null
        },
        paymentType: {
            type: S.ENUM({
                values: ['card']
            })
        },
        date: {
            type: S.DATE,
            defaultValue: S.NOW
          
        },
        status: {
            type: S.ENUM({
                values: ['draft', 'confirmed', 'cancelled', 'fulfilled']
            })
        },
        total: {
            type: S.STRING,
            defaultValue: null
        }


    },
    { sequelize, modelName: "order" }
);


module.exports = Order;

