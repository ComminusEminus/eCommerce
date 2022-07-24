const mongoose = require("mongoose");
const CustomerOrderItem = mongoose.model(
  "CustomerOrderItem",
  new mongoose.Schema({
    customerId: {type:String},
    product: {type:String},
    option: {type:String},
    qty: {type: String}
  })
);
module.exports = CustomerOrderItem;
