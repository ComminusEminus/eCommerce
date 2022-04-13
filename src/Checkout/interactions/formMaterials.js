import {checkoutFormSchema} from '../../common/index'


function formMaterials(){
  this.formMaterials = {};
}

formMaterials.prototype.returnBlankMaterials = function(){
  this.formMaterials = {
    initialValues: {
      firstname: '',
      lastname: '',
      streetaddress: '',
      aptnumber: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      cardfirstname: '',
      cardlastname: '',
      cardaddress: '',
      cardaptnumber: '',
      cardcity: '',
      cardstate: '',
      cardzip: '',
      cardnumber: '',
      cardsecuritycode: '',
      cardexp: '',
    },
    validationSchema: checkoutFormSchema,
    buttonText: 'Submit'
  }
  return this.formMaterials
}

formMaterials.prototype.returnEditMaterials = function(formData){
  this.formMaterials = {
    initialValues: {
      firstname: formData.customerInformation[0].firstname,
      lastname: formData.customerInformation[0].lastname,
      streetaddress: formData.customerInformation[0].streetaddress,
      aptnumber: formData.customerInformation[0].aptnumber,
      city: formData.customerInformation[0].city,
      state: formData.customerInformation[0].state,
      zip: formData.customerInformation[0].zip,
      phone: formData.customerInformation[0].phone,
      email: formData.customerInformation[0].email,
      cardfirstname: formData.customerInformation[0].cardfirstname,
      cardlastname: formData.customerInformation[0].cardlastname,
      cardaddress: formData.customerInformation[0].cardaddress,
      cardaptnumber: formData.customerInformation[0].cardaptnumber,
      cardcity: formData.customerInformation[0].cardcity,
      cardstate: formData.customerInformation[0].cardstate,
      cardzip: formData.customerInformation[0].cardzip,
      cardnumber: formData.customerInformation[0].cardnumber,
      cardsecuritycode: formData.customerInformation[0].cardsecuritycode,
      cardexp: formData.customerInformation[0].cardexp,
    },
    validationSchema: checkoutFormSchema,
    buttonText: 'Submit'
  }
  return this.formMaterials
}

export default formMaterials;
