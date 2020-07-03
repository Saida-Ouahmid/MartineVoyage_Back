var express = require("express");
const productController = require("../controllers/products");
var router = express.Router();
const productController = require("../controllers/products");

/* GET users listing. */
router.get("/:product", productController.product);
router.post("/reservation", productController.reservation);
router.get("/more/:product", productController.more);

router.get("/new-travels", productController.getProduct);
router.get("/category/:category", productController.categoryProduct);
module.exports = router;
