const db = require("../models");
const Order = db.order;
const mongoose = require("mongoose");

const createNewOrder = (order, customerInformation) => {
  const {
      firstname,
      lastname,
      streetaddress,
      aptnumber,
      city,
      state,
      zip,
      phone,
      email,
      cardfirstname,
      cardlastname,
      cardaddress,
      cardaptnumber,
      cardcity,
      cardstate,
      cardzip,
      cardnumber,
      cardsecuritycode,
      cardexp,
      id
    } = customerInformation;
  const newCustomerOrder = new Order({
    shippingInformation: {
      firstname: firstname,
      lastname: lastname,
      streetaddress: streetaddress,
      aptnumber: aptnumber,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      email: email,
    },
    billingInformation: {
      cardfirstname: cardfirstname ,
      cardlastname: cardlastname ,
      cardaddress: cardaddress ,
      cardaptnumber: cardaptnumber ,
      cardcity: cardcity ,
      cardstate: cardstate ,
      cardzip: cardzip ,
      cardnumber: cardnumber ,
      cardsecuritycode: cardsecuritycode ,
      cardexp: cardexp
    },
    orderItems: order.map((product) => {
      return{
        product:product.productId,
        option: product.option,
        qty: product.qty
      }
    })
  });
  return newCustomerOrder;
}

module.exports = {
  createNewOrder
}
