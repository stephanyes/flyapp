"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");

class Favorite extends S.Model { }
Favorite.init(
    {
        Title: {
            type: S.STRING,
            allowNull: false,
        },
        Year: {
            type: S.STRING,
            allowNull: false
        },
        Rated: {
            type: S.STRING,
            allowNull: false
        },
        Director: {
            type: S.STRING,
            allowNull: false
        },
        imdbRating: {
            type: S.STRING,
            allowNull: false
        },
        Poster: {
            type: S.STRING,
            allowNull: false,
        },
        Plot: {
            type: S.TEXT,
            allowNull: false
        },
        imdbID: {
            type: S.STRING,
            allowNull: false
        }
    },
    { sequelize, modelName: "favorite" }
);


module.exports = Favorite;

