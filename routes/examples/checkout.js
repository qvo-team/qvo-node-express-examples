const express = require("express"),
  router = express.Router(),
  url = require("url"),
  fetch = require("node-fetch-json"),
  Prism = require("prismjs"),
  QVO_API_URL = "https://playground.qvo.cl"; //Change it to https://api.qvo.cl on production

// GET /examples/checkout
router.get("/", (req, res, next) => {
  res.render("examples/checkout/index", {
    title: "Botón de pago y Checkout"
  });
});

module.exports = router;
