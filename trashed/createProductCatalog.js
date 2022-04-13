import productEntity from './productEntity.js'
import fetchData from '../fetch/fetchProducts'

function createProductCatalog(){
  let formattedProducts = []
  const raw = fetchData();
  raw.data.forEach(product => {
    formattedProducts.push(productEntity(products))
  })
  return formattedProducts;
}

export default createProductCatalog;
