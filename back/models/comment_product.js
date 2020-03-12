"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");

class Comment_product extends S.Model { }
Comment_product.init(
    {
        comment: {
            type: S.TEXT,
            defaultValue: null
        },
        rating: {
            type: S.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }

    },
    { sequelize, modelName: "comment_product" }
);


module.exports = Comment_product;

