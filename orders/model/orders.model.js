const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    require: true
  }
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;