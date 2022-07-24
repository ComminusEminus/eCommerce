const mongoose = require("mongoose");
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String},
    options: {type: [String]},
    sale: {type: String},
    tags: {type: [String]}, 
  })
);
module.exports = Product;
