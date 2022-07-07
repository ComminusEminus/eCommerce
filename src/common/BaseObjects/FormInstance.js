export default function FormInstance(schema){
  this.schema = schema
  this.formId = Math.floor(100000 + Math.random() * 900000)
}

FormInstance.prototype.getSchema = function(){
  return this.schema
}
