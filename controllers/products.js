const Product = require("../model/Product");

const productDetails = {
  product: (req, res, next) => {
    const productName = req.params.product;
    Product.find({ productName }, (err) => {
      if (err) {
        res.status(500).send("Il y a une erreur");
      }
    });
    res.render("products", { love: pouic });
  },

  reservation: (req, res, next) => {
    console.log(req.body);
    res.send("Merci pour votre réservation");
  },

  more: (req, res, next) => {
    res.send("youpi");
  },
};

module.exports = productDetails;
