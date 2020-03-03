"use strict";
const express = require("express");
const router = express.Router();
// const models = require("../../db/models");
// const Album = models.Album;
// const path = require("path");
module.exports = router;




//Que va a levantar favorites?!!
router.get("/auth", function (req, res, next) {
    res.send("index")
});

