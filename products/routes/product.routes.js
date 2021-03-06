const express = require('express');
const productController = require("../controller/products.controller");
const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:productId', productController.getProductItem);

module.exports = router;