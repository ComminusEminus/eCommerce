import Product from './Product'
import List from '../../common/BaseObjects/List'

function ProductList(){
  List.call(this)
}

ProductList.prototype = Object.create(List.prototype)

ProductList.prototype.constructor = ProductList

ProductList.prototype.addProducts = function(arr){
  for(let elem in arr){
    this.add(new Product(arr[elem]))
  }
}
ProductList.prototype.filterProducts = function(filter){
  if(filter === 'All Products'){
    return this.list
  }else{
    const filteredList = this.list.filter((product) =>{
      return product.tags.includes(filter)
    })
    return filteredList
  }
}
export default new ProductList()
