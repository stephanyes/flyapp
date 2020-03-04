var models = require("./models/index");

let Product = models.Product;

Product.bulkCreate([
  {
    name: "Parachute jump in Dubai",
    description: "Meet Dubai from the sky, and feel the air. Are you ready?",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 6500,
    stock: 20
  },
  {
    name: "Bridge jump",
    description:
      "If you are reckless you can not miss this experience that combines rigor, adrenaline and courage!",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 600,
    stock: 10
  },
  {
    name: "Flyboard in Miami",
    description:
      "There is no other sport that allows you to cross the water at high speed and also jump up to 23 meters and do stunts through the air.?",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 650,
    stock: 1
  },
  {
    name: "Trip to Paris",
    description:
      "MGet to know the historical monuments of Paris, its beautiful architecture and views of the Eiffel Tower",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 3000,
    stock: 3
  },
  {
    name: "Trip to London",
    description:
      "Get to know the historical monuments of London, its beautiful architecture and views of the Big Ben",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 3500,
    stock: 15
  },
  {
    name: "Fly to Tokyo",
    description:
      "Get to know the historical monuments of Tokyo, its beautiful architecture and views of the ",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 4800,
    stock: 20
  },
  {
    name: "Gourmet experience",
    description:
      "Very nice food with big plates and small food, you will need to repeat twice",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 250,
    stock: 20
  },
  {
    name: "Feal Italian food",
    description:
      "Spaggetti with meet boal are the best, dont worry and eat them all",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 80,
    stock: 20
  },
  {
    name: "New York best hamburguers",
    description:
      "How many hamburguers can you eat? Meet the best beacon of the world!!",
    img_1:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg",
    img_2: "",
    price: 180,
    stock: 20
  }
]);
