const Product = require("../model/Product");

const productController = {
  //enregistrement du product dans la base de donnée
  product: (req, res) => {
    const newProduct = new Product({
      travel_name: req.body.travel_name,
      short_description: req.body.short_description,
      long_description: req.body.long_description,
      main_picture: req.body.main_picture,
      picture: req.body.picture,
      price: req.body.price,
    });
    newProduct.save((err) => {
      if (err) {
        console.log(err);
        res.json({ message: "an error" });
      } else {
        res.json({ message: "produit enregistre" });
      }
    });
  },
  getProduct: (req, res) => {
    Product.find({}, (err, data) => {
      if (err) {
        res.status(500).send("error produite");
        return;
      }
      res.json(data);
    }).limit(4);
  },
  categoryProduct: (req, res) => {
    const categoryName = req.params.category;
    Product.find({ category: categoryName }, (err, data) => {
      if (err) {
        res.status(500).send("erreur");
        return;
      }
      res.json(data);
    });
  },
};
module.exports = productController;
