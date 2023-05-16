const path = require('path');
const express = require("express");
const rootDir = require('../util/path')

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
  console.log("Starting middleware");
});

router.post("/add-products", (req, res, next) => {
  console.log("products page loaded");
  console.log(req.body);

  res.redirect("/");
});
module.exports = router;
