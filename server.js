const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
  res.redirect("/produto/1321/checkout/6544");
});

app.get("/produto/:productId/checkout/:checkoutId", function(req, res) {
  res.sendFile("checkout.html", { root: __dirname });
});

const coupon = {
  id: 3,
  title: "black friday",
  discount: 35
};

const product = {
  id: 1321,
  title: "vestido floral",
  price: 100,
  image:
    "https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_398,q_70,w_375/qzancxcixtocajlrgztv.jpg"
};

const checkout = {
  id: 6544,
  productId: 1321,
  shippingPrice: 20,
  availableCoupons: [coupon]
};

app.get("/api/checkouts/:checkoutId", function(req, res) {
  checkout.totalPrice = product.price + checkout.shippingPrice;

  if (parseInt(req.query.couponId, 10) === coupon.id) {
    checkout.totalPrice -= coupon.discount;
  }

  res.json({ product: product, checkout: checkout });
});

app.post("/api/checkouts/:checkoutId", function(req, res) {
  res.json({ status: "success" });
});

app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`);
});
