var models = require("./models/index");

let Product = models.Product;

Product.bulkCreate([
  {
    name: "Parachute jump in Dubai",
    description: "Meet Dubai from the sky, and feel the air. Are you ready?",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-parachute-image-x3.png",
    img_2: "",
    price: 1350,
    stock: 20
  },
  {
    name: "Bridge jump",
    description:
      "If you are reckless, you can not miss this experience that combines rigor, adrenaline and courage!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-jump-image-x3.png",
    img_2: "",
    price: 200,
    stock: 10
  },
  {
    name: "Flyboard in Miami",
    description:
      "There is no other sport that allows you to cross the water at high speed and also jump up to 23 meters and do stunts through the air?",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-flyboard-image-x3.png",
    img_2: "",
    price: 130,
    stock: 1
  },
  {
    name: "Trip to Paris",
    description:
      "Get to know the historical monuments of Paris, it is beautiful architecture and views of the Eiffel Tower.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-paris-image-x3.png",
    img_2: "",
    price: 3400,
    stock: 3
  },
  {
    name: "Trip to London",
    description:
      "Get to know the historical monuments of London, it is beautiful architecture and views of the Big Ben.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-london-image3-x3.png",
    img_2: "",
    price: 3800,
    stock: 15
  },
  {
    name: "Fly to Tokyo",
    description: "Get to know the historical monuments of Tokyo.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-tokio-image-x3.png",
    img_2: "",
    price: 4800,
    stock: 20
  },
  {
    name: "Gourmet experience",
    description:
      "Very nice food with good taste, you will need to repeat twice!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-image-x3.png",
    img_2: "",
    price: 260,
    stock: 20
  },
  {
    name: "Feal Italian food",
    description:
      "Spaggetti with beef boal are the best, dont worry and eat them all.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-italian-image-x3.png",
    img_2: "",
    price: 80,
    stock: 20
  },
  {
    name: "New York best hamburguers",
    description:
      "How many hamburguers can you eat? Meet the best beacon of the world!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-burger-image-x3.png",
    img_2: "",
    price: 120,
    stock: 20
  }
]);
