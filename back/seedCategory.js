var models = require("./models/index")

let Category = models.Category

Category.bulkCreate([
    { name: "Flights", img: 'https://data.whicdn.com/images/240129186/original.jpg' },

    { name: "Extreme", img: 'https://data.whicdn.com/images/240129186/original.jpg' },
    { name: "Food", img: 'https://data.whicdn.com/images/240129186/original.jpg' },
])