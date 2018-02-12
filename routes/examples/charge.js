const express = require('express'),
  router = express.Router(),
  url = require('url'),
  fetch = require("node-fetch-json"),
  Prism = require('prismjs'),
  QVO_API_URL = 'https://playground.qvo.cl'; //Change it to https://api.qvo.cl on production

// Product example stub
const products = [
  {
    id: 1,
    name: "Camiseta",
    price: 79990,
    rating: 5,
    offer: true,
    imgURL: "/images/basketball-jersey.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque asperiores illum, dolores totam nostrum eum ducimus facilis, fuga possimus, temporibus ipsa quia nobis consequuntur voluptas libero? Amet, nam magnam."
  }, {
    id: 2,
    name: "Zapatillas",
    price: 39900,
    rating: 4,
    offer: false,
    imgURL: "/images/shoe.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque asperiores illum, dolores totam nostrum eum ducimus facilis, fuga possimus, temporibus ipsa quia nobis consequuntur voluptas libero? Amet, nam magnam."
  }
];

// GET /examples/charge
router.get('/', (req, res, next) => {
  res.render("examples/charge/index", {
    title: "Cobrar a tarjeta",
    product: products[0] // Try with 0 or 1
  });
});

// POST /examples/charge/pay
router.post("/pay", (req, res, next) => {
  let productID = req.body.productID;
  let product = products.find((product) => { return product.id == productID });

  let returnURL = `${req.protocol}://${req.header("host")}/examples/charge/return`;

  fetch(`${QVO_API_URL}/webpay_plus/charge`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.QVO_API_KEY}`
    },
    body: {
      amount: product.price,
      return_url: returnURL,
      description: `Orden Cód. ${generateOrder()} - ${product.name}`
    }
  })
    .then(response => {
      console.info("QVO API Response:", response);

      res.redirect(response.redirect_url);
    })
    .catch(response => {
      console.error(response);
    });
});

// GET /examples/charge/return
router.get('/return', (req, res, next) => {
  let transactionID = req.query.transaction_id;

  fetch(`${QVO_API_URL}/transactions/${transactionID}`, {
    headers: {
      Authorization: `Bearer ${process.env.QVO_API_KEY}`
    }
  })
    .then(response => {
      console.info("QVO API Response:", response);

      if(response.status == 'successful') {
        res.render("examples/charge/success", {
          title: "Éxito - Cobrar a tarjeta",
          transaction: response
        });
      } else {
        res.render("examples/charge/failure", {
          title: "Fracaso - Cobrar a tarjeta",
          transaction: response
        });
      }
    })
    .catch(response => {
      console.error(response);
    });
});

function generateOrder() {
  return Math.random().toString(36).substr(2, 5);
}

module.exports = router;
