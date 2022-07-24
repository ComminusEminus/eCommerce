const mongoose = require("mongoose");
const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    shippingInformation: {
      firstname: {type: String},
      lastname: {type: String},
      streetaddress: {type: String},
      aptnumber: {type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: String},
      phone: {type: String},
      email: {type: String},
    },
    orderItems : [
      new mongoose.Schema({
        product: {type:String},
        option: {type:String},
        qty: {type: String}
      })
    ],
    billingInformation: {
      cardfirstname: {type: String},
      cardlastname: {type: String},
      cardaddress: {type: String},
      cardaptnumber: {type: String},
      cardcity: {type: String},
      cardstate: {type: String},
      cardzip: {type: String},
      cardnumber: {type: String},
      cardsecuritycode: {type: String},
      cardexp: {type: String}
    }
  })
);
module.exports = Order;
