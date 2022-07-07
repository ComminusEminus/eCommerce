function List(){
  this.list = []
}

List.prototype.add = function(object){
  this.list.push(object)
  return this.list
}

List.prototype.remove = function(id, type){
  let index = this.list.findIndex((elem) => elem[type] == id)
  this.list.splice(index, 1)
  return this.list
}

List.prototype.clearList = function(key, value){
  this.list = []
  return this.list
}

List.prototype.getItem = function(key, value){
  let element = this.list.find((elem) => elem[key] === value)
  return element
}

List.prototype.update = function(array){
  this.list = array
}

List.prototype.returnList = function(){
  return this.list
}
export default List;
