const ProductModel = require("../model/products.model");
const { all } = require("../../users/routes/user.routes");

exports.createProduct = async (req, res, next) => {
  try {
    const createModel = await ProductModel.create(req.body);
    res.status(201).json(createModel);
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}

exports.getProducts = async (req, res, next) => {
  try {
    const allProducts = await ProductModel.find({});
    if (allProducts) {
      res.status(200).json(allProducts);
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

exports.getProductItem = async (req, res, next) => {
  try {
    const getProductId = await ProductModel.findById(req.params.productId);
    if (getProductId) {
      res.status(200).json(getProductId);
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