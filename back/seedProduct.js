var models = require("./models/index");

let Product = models.Product;

Product.bulkCreate([
  {
    name: "Parachute jump in Dubai",
    description: "Meet Dubai from the sky, and feel the air. Are you ready?",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-parachute-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-extreme-parachute2.png",
    price: 650,
    stock: 20,
    categoryId: 2
  },
  {
    name: "Bridge jump",
    description:
      "If you are reckless, you can not miss this experience that combines rigor, adrenaline and courage!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-bridge-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-extreme-bridge2.png",
    price: 120,
    stock: 10,
    categoryId: 2
  },
  {
    name: "Flyboard in Miami",
    description:
      "There is no other sport that allows you to cross the water at high speed and also jump up to 23 meters and do stunts through the air?",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-flyboard-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-extreme-flyboard2.png",
    price: 370,
    stock: 1,
    categoryId: 2
  },
  {
    name: "Kitesurf in Mexico",
    description: "Jump from the sea and live that incredible experience.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-kiteboard-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-extreme-kiteboard2.png",
    price: 400,
    stock: 23,
    categoryId: 2
  },
  {
    name: "Ski at Everet",
    description: "Is an excellent activity to enjoy with the family.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-ski-x3.png",
    img_2: "https://insideone.s3-sa-east-1.amazonaws.com/img2-extreme-ski2.png",
    price: 340,
    stock: 10,
    categoryId: 2
  },
  {
    name: "Helicopter in Dubai",
    description: "Fly through the air with the beautiful views of Dubai.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-helicopter-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-extreme-helicopter2.png",
    price: 940,
    stock: 10,
    categoryId: 2
  },
  {
    name: "Trip to Paris",
    description:
      "Get to know the historical monuments of Paris, it is beautiful architecture and views of the Eiffel Tower.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-trip-paris-x3.png",
    img_2: "https://insideone.s3-sa-east-1.amazonaws.com/img2-trips-paris2.png",
    price: 3400,
    stock: 3,
    categoryId: 1
  },
  {
    name: "Trip to London",
    description:
      "Get to know the historical monuments of London, it is beautiful architecture and views of the Big Ben.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-trip-london-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-trips-london2.png",
    price: 3800,
    stock: 15,
    categoryId: 1
  },
  {
    name: "Fly to Tokyo",
    description: "Get to know the historical monuments of Tokyo.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-trip-tokio-x3.png",
    img_2: "https://insideone.s3-sa-east-1.amazonaws.com/img2-trips-tokio2.png",
    price: 4300,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Fly to Mountains",
    description: "Get to know the mountains of Australia.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-trip-mountains-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-trips-mountains2.png",
    price: 3960,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Fly to the Beach",
    description: "Get to know the beach Mexico.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-trip-beach-x3.png",
    img_2: "https://insideone.s3-sa-east-1.amazonaws.com/img2-trips-beach2.png",
    price: 2340,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Fly to Cataratas",
    description: "Get to know the Carataras in Argentina.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-trip-cataratas-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-trips-cataratas2.png",
    price: 2200,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Gourmet experience",
    description:
      "Very nice food with good taste, you will need to repeat twice!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-general-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-gourmet-general2.png",
    price: 260,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Feal italian food",
    description:
      "Spaggetti with beef boal are the best, dont worry and eat them all.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-italy-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-gourmet-italy2.png",
    price: 80,
    stock: 20,
    categoryId: 3
  },
  {
    name: "New York best hamburguers",
    description:
      "How many hamburguers can you eat? Meet the best beacon of the world!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-burger-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-gourmet-burger2.png",
    price: 120,
    stock: 20,
    categoryId: 3
  },
  {
    name: "The best breakfast",
    description: "Enjoy a good breakfast in London!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-breakfast-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-gourmet-breakfast2.png",
    price: 70,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Avocado explotion",
    description: "The avocado is cooked with other delicious foods.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-avocado-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-gourmet-avocado2.png",
    price: 70,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Meat in Venezuela",
    description: "Best food in the world!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-meat-x3.png",
    img_2:
      "https://insideone.s3-sa-east-1.amazonaws.com/img2-gourmet-meat2.png",
    price: 130,
    stock: 20,
    categoryId: 3
  }
]);
