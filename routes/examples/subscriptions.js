const express = require("express"),
  router = express.Router(),
  url = require("url"),
  fetch = require("node-fetch-json"),
  Prism = require("prismjs"),
  plans = require("../../stubs/plans.json");
  QVO_API_URL = "https://playground.qvo.cl"; //Change it to https://api.qvo.cl on production

// GET /examples/subscriptions
router.get("/", (req, res, next) => {
  res.render("examples/subscriptions/index", {
    title: "Planes y suscripciones",
    plans: plans
  });
});

module.exports = router;
