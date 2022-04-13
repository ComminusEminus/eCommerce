import product from './productEntity'
import filterProducts from './filterProducts'

function productList(){
  this.list = []
}

productList.prototype.addProducts = function(rawProductList){
  console.log(rawProductList)
  rawProductList.forEach((listItem) => {
    const newFormattedProduct = new product(listItem);
    this.list.push(newFormattedProduct);
  })
  return this.list
}

productList.prototype.findProduct = function(products, filter){
  const formatProducts = this.addProducts(products)
  const findShirt = formatProducts.filter(element => element.title == filter)
  this.list = findShirt;
  return this.list;
}

productList.prototype.filterList = function(allProducts, filterArray){
  const formattedProducts = this.addProducts(allProducts)
  console.log(formattedProducts)
  const newFilterdProductsArray = filterProducts(formattedProducts, filterArray)
  console.log(newFilterdProductsArray)
  this.list = newFilterdProductsArray;
  return this.list
}

export default productList;
