const express = require("express"),
  router = express.Router(),
  url = require("url"),
  fetch = require("node-fetch-json"),
  Prism = require("prismjs"),
  QVO_API_URL = "https://playground.qvo.cl"; //Change it to https://api.qvo.cl on production

// GET /examples/subscriptions
router.get("/", (req, res, next) => {
  res.render("examples/subscriptions/index", {
    title: "Botón de pago y subscriptions"
  });
});

module.exports = router;
