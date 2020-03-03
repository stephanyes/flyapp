const Sequelize = require('sequelize')

module.exports = new Sequelize('postgres://postgres:password@localhost:5432/omdb_db', { logging: false });