const Favorite = require('./favoritos')
const User = require('./users')


User.hasMany(Favorite);

module.exports = {
    Favorite, User
}