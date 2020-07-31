const express = require('express');
const productController = require("../controller/orders.controller");
const router = express.Router();

router.post('/', productController.createOrder);
router.delete('/:orderId', productController.cancelOrder);
router.get('/:orderId', productController.getOrderItem);

module.exports = router;