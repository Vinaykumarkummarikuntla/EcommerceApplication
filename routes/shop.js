const path  = require('path');
const express = require("express");
const rootDir = require('../util/path')

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','shop.html'));
  // res.send("<html><h1>Welcome to Express.js</h1></html>");
});
module.exports = router;
