function product(productEntry){
  this.id = productEntry._id;
  this.title = productEntry.title;
  this.description = productEntry.description;
  this.options = productEntry.options;
  this.price = productEntry.price;
  this.tags = productEntry.tags;
}

product.prototype.returnProduct = function(){
  return {
    id: this.id,
    title: this.title,
    description: this.description,
    options: this.options,
    tags: this.tags,
    price: this.price,

  }
}

product.prototype.addImageUrl = function(url){
  this.url = url;
}

export default product;
