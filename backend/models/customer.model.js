const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    streetaddress: {type: String},
    aptnumber: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
    phone: {type: String},
    email: {type: String},
    billing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CustomerBilling'
    },
    orders: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CustomerOrder'
    }
  })
);
module.exports = Customer;
