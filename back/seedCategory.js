var models = require("./models/index");

let Category = models.Category;

Category.bulkCreate([
  {
    name: "Flights",
    img:
      "https://insideone.s3-sa-east-1.amazonaws.com/category-trips-image2-x3.png"
  },
  {
    name: "Extreme",
    img:
      "https://insideone.s3-sa-east-1.amazonaws.com/category-extreme-image2-x3.png"
  },
  {
    name: "Food",
    img:
      "https://insideone.s3-sa-east-1.amazonaws.com/category-gourmet-image2-x3.png"
  }
]);
