"use strict";

const sequelize = require("../db/db");
const S = require("sequelize");

class Role extends S.Model { }
Role.init(
    {
        role_name: {
            type: S.ENUM({
                values: ['superAdmin', 'admin', 'client']
            }),
        }

    },
    { sequelize, modelName: "role" }
);


module.exports = Role;

