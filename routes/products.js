var express = require("express");
const productController = require("../controllers/products");
var router = express.Router();

/* GET users listing. */

router.get("/new-travels", productController.getProduct);
router.get("/category/:category", productController.categoryProduct);
module.exports = router;
