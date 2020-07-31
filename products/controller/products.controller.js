const ProductModel = require("../model/products.model");

exports.createProduct = async (req, res, next) => {
  const createModel = await ProductModel.create(req.body);
  res.status(201).json(createModel);
}

exports.getProducts = async (req, res, next) => {
  const allProducts = await ProductModel.find({});
  res.status(200).json(allProducts);
}

exports.getProductItem = async (req, res, next) => {
  const getProductId = await ProductModel.findById(req.params.productId);
  res.status(200).json(getProductId);
}