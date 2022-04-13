function CreateProduct(rawData){
  this.rawData = rawData;
  this.newProduct = {};
}
CreateProduct.prototype.createProduct = function(){
  return{
    id: this.rawData.id,
    title: this.rawData.title,
    image: '',
    price: this.rawData.price,
    option: this.rawData.options,
    description: this.rawData.description,
  }
}

CreateProduct.prototype.addImageURL = function(url){
  this.newProduct.image = url;
  return this.newProduct;
}

CreateProduct.prototype.setProduct = function(){
  const createdProduct = this.createProduct();
  this.newProduct = createdProduct
}

CreateProduct.prototype.getProduct = function(){
  this.setProduct();
  return this.newProduct;
}

CreateProduct.prototype.createInitialValues = function(initialQty, selectedOption = this.rawData.options[0]){
  this.setProduct();
  const target = {}
  const initVal = this.newProduct;
  initVal.qty = initialQty;
  initVal.selectOption = selectedOption;
  return initVal;
}
export default CreateProduct;
