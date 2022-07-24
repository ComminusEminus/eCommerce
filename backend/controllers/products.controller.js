const {findAllProducts} = require('../services/productServices')
const {createNewOrder} = require('../helpers/orderHelpers')

exports.getProducts = async (req, res) => {
    const products = await findAllProducts()
    res.send(JSON.stringify(products))
}

exports.postOrder = async (req, res) => {
  console.log(req.body)
  const newOrder = await createNewOrder(JSON.parse(req.body.orderDetails.customerInformation), JSON.parse(req.body.orderDetails.shoppingCart));
  if(newOrder == 'Order Successfully Added'){
    res.status('201').send(newOrder);
  }else{
    res.send('Error')
  }


}
