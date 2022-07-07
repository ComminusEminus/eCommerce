import CustomerInformationForm from './CustomerInformationForm'
import customerInformationSchema from '../Schemas/customerInformationSchema'

const CustomerInformationInstance = (function (){
    var instance

    function _createInstance(){
      var customerInfo = new CustomerInformationForm(customerInformationSchema)
      return customerInfo
    }

    function _getFormValues(inst){
      let firstname = inst.firstname
      let lastname = inst.lastname
      let streetaddress = inst.streetaddress
      let aptnumber = inst.aptnumber
      let city = inst.city
      let state = inst.state
      let zip = inst.zip
      let phone = inst.phone
      let email = inst.email
      let cardfirstname = inst.cardfirstname
      let cardlastname = inst.cardlastname
      let cardaddress = inst.cardaddress
      let cardaptnumber = inst.cardaptnumber
      let cardcity = inst.cardcity
      let cardstate = inst.cardstate
      let cardzip = inst.cardzip
      let cardnumber = inst.cardnumber
      let cardsecuritycode = inst.cardsecuritycode
      let cardexp = inst.cardexp
      return {
          firstname,
          lastname,
          streetaddress,
          aptnumber,
          city,
          state,
          zip,
          phone,
          email,
          cardfirstname,
          cardlastname,
          cardaddress,
          cardaptnumber,
          cardcity,
          cardstate,
          cardzip,
          cardnumber,
          cardsecuritycode,
          cardexp,
      }
    }
    return {
      getFormInstance: function(){
        if(!instance){
          instance = _createInstance()
        }
        return instance
      },
      updateFormInstance: function(customerInput){
        if(!instance){
          instance = _createInstance()
        }
        instance = Object.assign(instance, customerInput)
        return instance
      },
      returnFormValues: function(){
        if(!instance){
          instance = _createInstance()
        }
        return _getFormValues(instance)
      },
      returnFormSchema: function(){
        if(!instance){
          instance = _createInstance()
        }
        return instance.getSchema()
      }
    }

})()

export default CustomerInformationInstance
