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
    stock: 20,
    categoryId: 2
  },
  {
    name: "Bridge jump",
    description:
      "If you are reckless, you can not miss this experience that combines rigor, adrenaline and courage!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-jump-image-x3.png",
    img_2: "",
    price: 1400,
    stock: 10,
    categoryId: 2
  },
  {
    name: "Flyboard in Miami",
    description:
      "There is no other sport that allows you to cross the water at high speed and also jump up to 23 meters and do stunts through the air?",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-flyboard-image-x3.png",
    img_2: "",
    price: 1570,
    stock: 1
    ,
    categoryId
      : 2
  },
  {
    name: "Bungee jumping in Hong Kong",
    description: "jump from hong kong and live that incredible experience",
    img_1:
      "https://kampbros.com/file/2018/01/bungee-jumping-over-a-mountain-lake_1920x1080_792-hd-700x394.jpg",
    img_2: "",
    price: 800,
    stock: 23,
    categoryId: 2
  },
  {
    name: "Rafting in Amazonas",
    description:
      "The descent of rivers, known worldwide as rafting, is an excellent activity to enjoy with the family",
    img_1:
      "https://images.adventures.is/assets/uploads/2019/04/24063337/types-of-iceland-rafting-tour.jpg",
    img_2: "",
    price: 940,
    stock: 10,
    categoryId: 2
  },
  {
    name: "Wingsuiting Flying in Dubai",
    description: "fly through the air with the beautiful views of Dubai",
    img_1:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/s82d4d8ec9926b261/image/ida8eaa9d662a3cc3/version/1506532320/image.jpg",
    img_2: "",
    price: 1200,
    stock: 10,
    categoryId: 2
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
    ,
    categoryId
      : 1
  },
  {
    name: "Trip to London",
    description:
      "Get to know the historical monuments of London, it is beautiful architecture and views of the Big Ben.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-london-image3-x3.png",
    img_2: "",
    price: 3800,
    stock: 15,
    categoryId: 1
  },
  {
    name: "Fly to Tokyo",
    description: "Get to know the historical monuments of Tokyo.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-tokio-image-x3.png",
    img_2: "",
    price: 4800,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Fly to Australia",
    description: "Get to know the historical monuments of Australia.",
    img_1:
      "https://cdn1.gttwl.net/attachments/global/1472606832_original.jpeg?w=original&h=&fit=crop&crop=entropy&auto=format,enhance&q=60",
    img_2: "",
    price: 3260,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Fly to Iceland",
    description: "Get to know the historical monuments of Iceland.",
    img_1:
      "https://www.azamara.com/sites/default/files/heros/husavik-iceland.jpg",
    img_2: "",
    price: 2800,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Fly to Germany",
    description: "Get to know the historical monuments of Germany.",
    img_1:
      "https://www.hola.com/imagenes/viajes/2017022091764/carnaval-colonia-alemana/0-424-507/Colonia-Alemania-carnaval-t.jpg?filter=ds75",
    img_2: "",
    price: 3200,
    stock: 20,
    categoryId: 1
  },
  {
    name: "Gourmet experience",
    description:
      "Very nice food with good taste, you will need to repeat twice!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-gourmet-image-x3.png",
    img_2: "",
    price: 260,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Feal Italian food",
    description:
      "Spaggetti with beef boal are the best, dont worry and eat them all.",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-italian-image-x3.png",
    img_2: "",
    price: 80,
    stock: 20,
    categoryId: 3
  },
  {
    name: "New York best hamburguers",
    description:
      "How many hamburguers can you eat? Meet the best beacon of the world!",
    img_1:
      "https://insideone.s3-sa-east-1.amazonaws.com/experience-burger-image-x3.png",
    img_2: "",
    price: 120,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Greece battered cheese",
    description: "Greece and its delicious cheeses, you need to try them!",
    img_1:
      "https://i2.wp.com/viajerainquieta.com/wp-content/uploads/2019/05/Comida-tipica-de-grcia.jpg?w=500",
    img_2: "",
    price: 70,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Paella in Spain",
    description: "the rice is cooked with other foods, delicious ",
    img_1:
      "https://i.pinimg.com/originals/3e/27/e7/3e27e7079a9a5f5ac861c60431383c68.png",
    img_2: "",
    price: 90,
    stock: 20,
    categoryId: 3
  },
  {
    name: "Arepas in Venezuela",
    description: "best food in the world",
    img_1:
      "https://www.viajejet.com/wp-content/viajes/las-arepas-un-plato-extendido-en-colombia.jpg",
    img_2: "",
    price: 100,
    stock: 20,
    categoryId: 3
  }
]);
