const controller = require("../controllers/products.controller");

const getProduct = (app) => {
  app.get("/api/products", controller.getProducts);

};

const postOrder = (app) => {
  app.post("/api/products", controller.postOrder);
}

module.exports = {
  getProduct,
  postOrder
}
