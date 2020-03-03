"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");

class Category extends S.Model { }
Category.init(
    {
        name: {
            type: S.STRING,
            allowNull: false
        }

    },
    { sequelize, modelName: "category" }
);


module.exports = Category;

