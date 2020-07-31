const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  category: {
    type: Number,
    require: true
  }
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;