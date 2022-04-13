import SelectOptionComponent from '../../index';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


const CheckoutFormFields = (props) => {
  return (
    <>
      <Grid spacing = {2} sx = {{p:4}} container>
        <Grid xs ={12} item>
          <Box sx = {{bgcolor: 'primary.main', p:2, borderRadius: 3}}>
            <Typography variant = 'h5' sx = {{color: 'white'}}>
              Shipping Information
            </Typography>
          </Box>
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-firstname-key`}
            id = {'firstname'}
            name = {'firstname'}
            label= {'FirstName'} //uppercase
            value = {props.formik.values.firstname}
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.firstname && Boolean(props.formik.errors.firstname)}
            helperText = {props.formik.touched.firstname && props.formik.errors.firstname}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-lastname-key`}
            id = {'lastname'}
            name = {'lastname'}
            label= {'LastName'} //uppercase
            value = {props.formik.values.lastname }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.lastname && Boolean(props.formik.errors.lastname)}
            helperText = {props.formik.touched.lastname && props.formik.errors.lastname}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={9} item>
          <TextField
            key = {`${props.index}-streetaddress-key`}
            id = {'streetaddress'}
            name = {'streetaddress'}
            label= {'StreetAddress'} //uppercase
            value = {props.formik.values.streetaddress }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.streetaddress && Boolean(props.formik.errors.streetaddress)}
            helperText = {props.formik.touched.streetaddress && props.formik.errors.streetaddress}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={3} item>
          <TextField
            key = {`${props.index}-apt-key`}
            id = {'apartmentnumber'}
            name = {'apartmentnumber'}
            label= {'ApartmentNumber'} //uppercase
            value = {props.formik.values.apartmentnumber }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.apartmentnumber && Boolean(props.formik.errors.apartmentnumber)}
            helperText = {props.formik.touched.apartmentnumber && props.formik.errors.apartmentnumber}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-city-key`}
            id = {'city'}
            name = {'city'}
            label= {'City'} //uppercase
            value = {props.formik.values.city }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.city && Boolean(props.formik.errors.city)}
            helperText = {props.formik.touched.city && props.formik.errors.city}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-state-key`}
            id = {'state'}
            name = {'state'}
            label= {'State'} //uppercase
            value = {props.formik.values.state }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.state && Boolean(props.formik.errors.state)}
            helperText = {props.formik.touched.state && props.formik.errors.state}
            sx = {{width: '50%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={12} item>
          <TextField
            key = {`${props.index}-zip-key`}
            id = {'zip'}
            name = {'zip'}
            label= {'Zip'} //uppercase
            value = {props.formik.values.zip }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.zip && Boolean(props.formik.errors.zip)}
            helperText = {props.formik.touched.zip && props.formik.errors.zip}
            sx = {{width: '20%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={12} item>
          <TextField
            key = {`${props.index}-phone-key`}
            id = {'phone'}
            name = {'phone'}
            label= {'Phone'} //uppercase
            value = {props.formik.values.phone }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.phone && Boolean(props.formik.errors.phone)}
            helperText = {props.formik.touched.phone && props.formik.errors.phone}
            sx = {{width: '30%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={12} item>
          <TextField
            key = {`${props.index}-email-key`}
            id = {'email'}
            name = {'email'}
            label= {'Email'} //uppercase
            value = {props.formik.values.email }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.email && Boolean(props.formik.errors.email)}
            helperText = {props.formik.touched.email && props.formik.errors.email}
            sx = {{width: '50%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={12} item>
          <Box sx = {{bgcolor: 'primary.main', p:2, borderRadius: 3}}>
            <Typography variant = 'h5' sx = {{color: 'white'}}>
              Billing Information
            </Typography>
          </Box>
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-cardfirstname-key`}
            id = {'cardfirstname'}
            name = {'cardfirstname'}
            label= {'Card FirstName'} //uppercase
            value = {props.formik.values.cardfirstname}
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardfirstname && Boolean(props.formik.errors.cardfirstname)}
            helperText = {props.formik.touched.cardfirstname && props.formik.errors.cardfirstname}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-cardlastname-key`}
            id = {'cardlastname'}
            name = {'cardlastname'}
            label= {'cardLastName'} //uppercase
            value = {props.formik.values.cardlastname }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardlastname && Boolean(props.formik.errors.cardlastname)}
            helperText = {props.formik.touched.cardlastname && props.formik.errors.cardlastname}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={9} item>
          <TextField
            key = {`${props.index}-cardaddress-key`}
            id = {'cardaddress'}
            name = {'cardaddress'}
            label= {'Card Address'} //uppercase
            value = {props.formik.values.cardaddress }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardaddress && Boolean(props.formik.errors.cardaddress)}
            helperText = {props.formik.touched.cardaddress && props.formik.errors.cardaddress}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={3} item>
          <TextField
            key = {`${props.index}-cardapt-key`}
            id = {'cardaptnumber'}
            name = {'cardaptnumber'}
            label= {'Card Apartment Number'} //uppercase
            value = {props.formik.values.cardaptnumber }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardaptnumber && Boolean(props.formik.errors.cardaptnumber)}
            helperText = {props.formik.touched.cardaptnumber && props.formik.errors.cardaptnumber}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-cardcity-key`}
            id = {'cardcity'}
            name = {'cardcity'}
            label= {'cardCity'} //uppercase
            value = {props.formik.values.cardcity }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardcity && Boolean(props.formik.errors.cardcity)}
            helperText = {props.formik.touched.cardcity && props.formik.errors.cardcity}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={6} item>
          <TextField
            key = {`${props.index}-cardstate-key`}
            id = {'cardstate'}
            name = {'cardstate'}
            label= {'cardState'} //uppercase
            value = {props.formik.values.cardstate }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardstate && Boolean(props.formik.errors.cardstate)}
            helperText = {props.formik.touched.cardstate && props.formik.errors.cardstate}
            sx = {{width: '50%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={12} item>
          <TextField
            key = {`${props.index}-cardzip-key`}
            id = {'cardzip'}
            name = {'cardzip'}
            label= {'cardZip'} //uppercase
            value = {props.formik.values.cardzip }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardzip && Boolean(props.formik.errors.cardzip)}
            helperText = {props.formik.touched.cardzip && props.formik.errors.cardzip}
            sx = {{width: '20%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={12} item>
          <TextField
            key = {`${props.index}-cardnumber-key`}
            id = {'cardnumber'}
            name = {'cardnumber'}
            label= {'Cardnumber'} //uppercase
            value = {props.formik.values.cardnumber }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardnumber && Boolean(props.formik.errors.cardnumber)}
            helperText = {props.formik.touched.cardnumber && props.formik.errors.cardnumber}
            sx = {{width: '40%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={3} item>
          <TextField
            key = {`${props.index}-cardsecuritycode-key`}
            id = {'cardsecuritycode'}
            name = {'cardsecuritycode'}
            label= {'cardsecuritycode'} //uppercase
            value = {props.formik.values.cardsecuritycode }
            onChange = {props.formik.handleChange}
            error = {props.formik.touched.cardsecuritycode && Boolean(props.formik.errors.cardsecuritycode)}
            helperText = {props.formik.touched.cardsecuritycode && props.formik.errors.cardsecuritycode}
            sx = {{width: '90%'}}
            disabled = {props.orderComplete}
          />
        </Grid>
        <Grid xs ={4} item>
          <input
            type="date"
            key = {`${props.index}-cardexp-key`}
            id = {'cardexp'}
            name = {'cardexp'}
            value={(props.formik.values.cardexp && new Date(props.formik.values.cardexp)) || null}
            onChange={props.formik.handleChange}
            helperText={props.formik.touched.cardexp && props.formik.errors.cardexp}
            error = {props.formik.touched.cardexp && Boolean(props.formik.errors.cardexp)}
            style = {{height: '100%'}}
          />
        </Grid>
        <Grid xs = {12} item sx = {{display: 'flex',justifyContent: 'flex-end', px: 2}}>
          <Button type = 'submit' variant = 'contained'>{props.formMaterials.buttonText}</Button>
        </Grid>
      </Grid>
    </>
  )
}
export default CheckoutFormFields;
