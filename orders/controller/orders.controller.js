const OrderModel = require("../model/orders.model");

exports.createOrder = async (req, res, next) => {
  const createModel = await OrderModel.create(req.body);
  res.status(201).json(createModel);
}

exports.cancelOrder = async (req, res, next) => {
  const deleteOrder = await OrderModel.findByIdAndDelete(req.params.orderId);
  res.status(200).json(deleteOrder);
}

exports.getOrderItem = async (req, res, next) => {
  const getOrderId = await OrderModel.findById(req.params.orderId);
  res.status(200).json(getOrderId);
}