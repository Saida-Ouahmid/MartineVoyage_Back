var express = require("express");
var router = express.Router();
const productController = require("../controllers/products");

/* GET users listing. */
router.get("/:product", productController.product);
router.post("/reservation", productController.reservation);
router.get("/more/:product", productController.more);

module.exports = router;
