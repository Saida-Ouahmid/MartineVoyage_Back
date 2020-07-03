const Product = require("../model/Product");
const Profil = require("../model/Profil");

const productDetails = {
  /*Affiche la fiche produit*/
  product: (req, res, next) => {
    const productName = req.params.product;
    Product.findOne({ travel_name: productName }, (err, data) => {
      if (err) {
        res.status(500).send("Il y a une erreur");
      }
      res.json(data);
    });
  },

  /*Valide la réservation*/
  reservation: (req, res, next) => {
    Profil.updateOne(
      { _id: "5efc73b79428a510485f9323" },
      {
        $push: {
          order: {
            travel_name: req.body.travel_name,
            travellers_number: req.body.travellers_number,
            total_price: req.body.total_price,
            travel_date: req.body.travel_date,
          },
        },
      },
      (err) => {
        if (err) {
          console.log(err);
          res.json({ message: "tu as fait des bétises" });
        } else {
          res.json({ message: "Merci pour votre réservation" });
        }
      }
    );
  },

  /*Affiche les 2 derniers produits*/
  more: (req, res, next) => {
    const productInfo = req.params.product;

    Product.find({
      travel_name: { $ne: productInfo },
      category: { $in: "mer" },
    })
      .limit(2)
      .exec((err, data) => {
        res.json(data);
      });
  },
};

module.exports = productDetails;
