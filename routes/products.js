var express = require("express");
var router = express.Router();
const productController = require("../controllers/products");
const authentification = require("../middlewares/authentif");

/* GET users listing. */
router.get("/new-travels", productController.getProduct);
router.get("/category/:category", productController.categoryProduct);
router.get("/:product", productController.product);
router.post("/reservation", authentification, productController.reservation);
router.get("/more/:product", productController.more);

module.exports = router;
