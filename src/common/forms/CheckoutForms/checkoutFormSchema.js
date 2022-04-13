import * as yup from 'yup';
//add more to form later just use below until logic is set up
const checkoutFormSchema = yup.object({
  firstname: yup
    .string()
    .trim()
    .required(),
  lastname: yup
    .string()
    .trim()
    .required(),
  streetaddress: yup
    .string()
    .trim()
    .required(),
  aptnumber: yup
    .string()
    .ensure(),
  city: yup
    .string()
    .trim()
    .required(),
  state: yup
    .string()
    .trim()
    .required(),
  zip: yup
    .string()
    .min(5)
    .max(5)
    .trim()
    .required(),
  phone: yup
    .number()
    .required(),
  email: yup
    .string()
    .email('Please Enter a Valid Email')
    .trim()
    .required(),
  cardfirstname: yup
    .string()
    .trim()
    .required(),
  cardlastname: yup
    .string()
    .trim()
    .required(),
  cardaddress: yup
    .string()
    .trim()
    .required(),
  cardaptnumber: yup
    .string()
    .trim()
    .ensure(),
  cardcity: yup
    .string()
    .trim()
    .required(),
  cardstate: yup
    .string()
    .min(2)
    .max(2)
    .trim()
    .required(),
  cardzip: yup
    .string()
    .trim()
    .required(),
  cardnumber: yup
    .string()
    .trim()
    .required(),
  cardsecuritycode: yup
    .string()
    .trim()
    .required(),
  cardexp: yup
    .string()
    .trim()
    .required(),
})

export default checkoutFormSchema;
