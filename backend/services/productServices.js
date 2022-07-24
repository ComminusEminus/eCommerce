const db = require("../models");
const Product = db.product;

const findAllProducts = async () => {
  const allProducts = await Product.find({});
  if(!allProducts) {
    false
  } else {
    return allProducts;
  }
}


module.exports = {
  findAllProducts,
}
