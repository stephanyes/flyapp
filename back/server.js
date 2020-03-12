"use strict";
const express = require("express");
const session = require("express-session");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const db = require("./db/db");
const passport = require("passport");
const productos = require("./routes/productos");
const users = require("./routes/users");
const { User } = require("../back/models/index");
const path = require("path");
const LocalStrategy = require("passport-local").Strategy;
const cart = require("./routes/cart");
const app = express();
const categories = require("./routes/categories");
const order = require("./routes/order");

const email = require("./mailDispatcher");
//email.sendTemplateConfirmation();
//email.sendTemplateSent();
//email.sendTemplateCompleted();
const comments = require("./routes/comments");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.use(
  session({
    secret: "tuMadre",
    resave: true,
    saveUninitialized: true
  })
);

//usar passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findByPk(id).then(user => {
    done(null, user);
  });
});

app.use("/products", productos);
app.use("/auth", users);
app.use("/cart", cart);
app.use("/categories", categories);
app.use("/order", order);
app.use("/review", comments);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },

    (username, password, done) => {
      User.findOne({
        where: { email: username }
      })
        .then(user => {
          if (!user || !user.validPassword(password)) {
            return done(null, false, {
              message: "User or Password are incorrect!"
            });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);

app.use("/products", productos);
app.use("/auth", users);
//serealizar y deserializar el passport
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

db.sync({ force: false }).then(con => {
  console.log(
    `${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`
  );
  app.listen(3000, () => console.log("SERVER LISTENING AT PORT 3000"));
});
module.exports = app;
