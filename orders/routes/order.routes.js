const express = require('express');
const orderController = require("../controller/orders.controller");
const router = express.Router();

router.post('/', orderController.createOrder);
router.delete('/:orderId', orderController.cancelOrder);
router.get('/:orderId', orderController.getOrderItem);

module.exports = router;