const OrderModel = require("../model/orders.model");

exports.createOrder = async (req, res, next) => {
  try {
    const createModel = await OrderModel.create(req.body);
    res.status(201).json(createModel);
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}

exports.cancelOrder = async (req, res, next) => {
  try {
    const deleteOrder = await OrderModel.findByIdAndDelete(req.params.orderId);
    res.status(200).json(deleteOrder);
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}

exports.getOrderItem = async (req, res, next) => {
  try {
    const getOrderId = await OrderModel.findById(req.params.orderId);
    if (getOrderId) {
      res.status(200).json(getOrderId);
    } else {
      res.status(404).json({ err: true, msg: "Data not found." });
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}