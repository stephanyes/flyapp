var models = require("./models/index");
let Comments = models.Comment;
Comments.bulkCreate([
  {
    userId: 1,
    comment: "muy bueno lo recomiendo",
    rating: 4,
    productId: 1
  },
  {
    userId: 1,
    comment:
      "Muy lindo el lugar, mucha paz, la verdad pasamos 4 días fabulosos con mi familia. Lo recomiendo",
    rating: 5,
    productId: 1
  },
  {
    userId: 2,
    comment: "Bastante lindo el lugar. Sólo poco mantenido.",
    rating: 3.8,
    productId: 1
  },
  {
    userId: 4,
    comment: "Muy lindo lugar y exelente atencion del dueño. ",
    rating: 5,
    productId: 2
  },
  {
    userId: 3,
    comment:
      "Exelente la atención sumamente profesional, fue una experiencia única los recomiendo todos tienen que poder vivirlo es una de esas cosas que hay que hacer en la vida y si tenés la oportunidad de ir acompañado mejor, gracias a todo el equipo de vuelo.",
    rating: 4.5,
    productId: 2
  },
  {
    userId: 2,
    comment:
      "Muy bueno en todos los aspectos, desde la atención hasta el paseo.",
    rating: 5,
    productId: 2
  },
  {
    userId: 4,
    comment:
      "Excelente servicio y atención Si. Totalmente. Porque fue excelente. Lo que esperaba y más!.",
    rating: 4,
    productId: 3
  },
  {
    userId: 6,
    comment: " Excelente servicio. Muy recomendable. Gracias.",
    rating: 3.8,
    productId: 3
  },
  {
    userId: 6,
    comment: "Muy bueno Excelente el servicio. Recomiendo.",
    rating: 4,
    productId: 4
  },
  {
    userId: 6,
    comment: "Muy buena Recomendable el lugar.",
    rating: 8,
    productId: 4
  },
  {
    userId: 7,
    comment: "Muy buena atención, y los paquetes son muy buenos",
    rating: 3.8,
    productId: 4
  },
  {
    userId: 7,
    comment: "Muy lindo lugar y Excelente  seguro , amabilidad etc. ",
    rating: 9,
    productId: 5
  },
  {
    userId: 7,
    comment:
      "Excelente agencia, enorme calidez y el mejor de los resultados.  Volvería a viajar sin dudarlo. Muy agradecida :sonrojo:",
    rating: 4.5,
    productId: 5
  },
  {
    userId: 8,
    comment:
      "Muy bueno en todos los aspectos, desde la atención hasta el paseo.",
    rating: 5,
    productId: 6
  },
  {
    userId: 8,
    comment: "Muy bien",
    rating: 3.4,
    productId: 7
  },
  {
    userId: 5,
    comment: "Nice",
    rating: 3.8,
    productId: 7
  },
  {
    userId: 10,
    comment:
      "Muy bueno en todos los aspectos, desde la atención hasta el paseo.",
    rating: 5,
    productId: 8
  },
  {
    userId: 9,
    comment: "excelente servicio",
    rating: 3.4,
    productId: 8
  },
  {
    userId: 3,
    comment: "Nice",
    rating: 3.8,
    productId: 8
  },
  {
    userId: 1,
    comment: "Excelente atención y servicio!",
    rating: 5,
    productId: 9
  },
  {
    userId: 2,
    comment: "Es un parque divino, se pasa muy bien el rato",
    rating: 3.4,
    productId: 9
  },
  {
    userId: 3,
    comment:
      "Super recomendable! Estuvieron en cada detalle de nuestro viaje para q no tengamos que preocuparnos por nada. Solo disfrutar, Gracias!",
    rating: 5,
    productId: 10
  },
  {
    userId: 5,
    comment:
      "Excelente atención y servicio! Salió todo tal cual lo planeado. Súper recomendable!",
    rating: 3.0,
    productId: 11
  },
  {
    userId: 2,
    comment: "Muy buena atención",
    rating: 4.2,
    productId: 12
  },
  {
    userId: 10,
    comment: "Nada especial",
    rating: 4,
    productId: 13
  },
  {
    userId: 6,
    comment: "Excelente atención. Buenisimo todo el viaje.",
    rating: 3.4,
    productId: 14
  },
  {
    userId: 1,
    comment: "genial",
    rating: 2,
    productId: 15
  },
  {
    userId: 7,
    comment: "good service",
    rating: 5,
    productId: 16
  },
  {
    userId: 10,
    comment: "Es divino, se pasa muy bien el rato",
    rating: 3.4,
    productId: 17
  },
  {
    userId: 7,
    comment: "Super recomendable!",
    rating: 4.8,
    productId: 18
  }
]);
