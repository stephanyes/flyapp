"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");
const crypto = require('crypto')

class User extends S.Model { }
User.init(
    {
        firstName: {
            type: S.STRING,
            allowNull: false,
        },
        lastName: {
            type: S.STRING,
            allowNull: false,
        },
        email: {
            type: S.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        address1: {
            type: S.STRING,
            allowNull: false,
        },
        address2: {
            type: S.STRING,
            allowNull: false,
        },
        address3: {
            type: S.STRING,
            allowNull: false,
        },
        postCode: {
            type: S.STRING,
            allowNull: false,
        },
        phone: {
            type: S.STRING,
            allowNull: false,
        },
        rol_id: {
            type: S.STRING,
            defaultValue: 'client'
        },
        password: {
            type: S.STRING,
            allowNull: false
        },
        salt: {
            type: S.STRING,
        }
    },
    { sequelize: sequelize, modelName: "user" }
);

User.addHook('beforeCreate', (user) => {
    user.salt = crypto.randomBytes(20).toString('hex');
    user.password = user.hashPassword(user.password); // never saving true password
})

User.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

User.prototype.validPassword = function (password) {
    return this.password === this.hashPassword(password);
}



module.exports = User;
