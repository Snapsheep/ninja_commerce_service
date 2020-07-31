const ProductModel = require("../model/products.model");

exports.createProduct = async (req, res, next) => {
  const createModel = await ProductModel.create(req.body);
  res.status(201).json(createModel);
}