const express = require("express"),
  router = express.Router(),
  url = require("url"),
  fetch = require("node-fetch-json"),
  Prism = require("prismjs"),
  products = require("../../stubs/products.json");
  QVO_API_URL = 'https://playground.qvo.cl'; //Change it to https://api.qvo.cl on production

// GET /examples/checkout
router.get('/', (req, res, next) => {
  res.render("examples/checkout/index", {
    title: "Botón de pago y Checkout",
    product: products[1],
    public_key: process.env.QVO_PUBLIC_KEY
  });
});

// POST /examples/checkout/register_transaction/:transactionID
router.post('/register_transaction/:transactionID', (req, res, next) => {

  fetch(`${QVO_API_URL}/transactions/${req.params.transactionID}`, {
    headers: {
      Authorization: `Bearer ${process.env.QVO_API_KEY}`
    }
  })
    .then(response => {
      console.info("QVO API Response:", response);

      // Here you can insert your own logic to check and store the transaction, update accounting, order status or whatever.

      // Simple check example
      if (response.status == "successful") {
        res.send({ status: 'ok' });
      } else {
        res.send({ status: "fail" });
      }
    })
    .catch(response => {
      console.error(response);
    });
});

module.exports = router;
