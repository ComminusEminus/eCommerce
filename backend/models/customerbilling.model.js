const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerBilling = mongoose.model(
  "CustomerBilling",
  new mongoose.Schema({
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: 'Customer'
    },
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
  })
);
module.exports = CustomerBilling;
