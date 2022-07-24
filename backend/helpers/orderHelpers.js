
const orderService = require('../services/orderServices')



const createNewOrder = async (customerInformation, order) => {
  const newOrder = await orderService.createNewOrder(order, customerInformation);
  newOrder.save()
  .then((savedOrder) => {
    console.log(savedOrder)
  }).catch((err) => {
    console.log(err)
  })
  return('Order Successfully Added')
}

module.exports = {
  createNewOrder
}
