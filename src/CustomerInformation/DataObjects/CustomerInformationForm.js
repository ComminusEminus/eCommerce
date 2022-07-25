import FormInstance from '../../common/BaseObjects/FormInstance'


function CustomerInformationForm(schema){
  FormInstance.call(this, schema)
  this.firstname = 'Mikael'
  this.lastname = 'Mirza'
  this.streetaddress = '800 Fairway Rd.'
  this.aptnumber = '12'
  this.city = 'Lake Oswego'
  this.state = 'OR'
  this.zip = '97034'
  this.phone = '5038966400'
  this.email = 'mikaelmirza123@gmail.com'
  this.cardfirstname = 'Mikael'
  this.cardlastname = 'Mirza'
  this.cardaddress = '800 Fairway Rd.'
  this.cardaptnumber = '12'
  this.cardcity = 'Lake Oswego'
  this.cardstate = 'OR'
  this.cardzip = '97034'
  this.cardnumber = '4456552877896643'
  this.cardsecuritycode = '522'
  this.cardexp = '12/8/22'
}

CustomerInformationForm.prototype = Object.create(FormInstance.prototype)
CustomerInformationForm.prototype.constructor = CustomerInformationForm;

export default CustomerInformationForm
