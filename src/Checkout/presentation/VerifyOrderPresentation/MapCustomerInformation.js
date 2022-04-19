import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import PropTypes from "prop-types";

/*
  Cusomer information is mapped to page using a switch statement and object.entries. The reason is that I wanted both the keys and values of
  each property for display and since there were alot of fields to display it would be faster and decrease errors from writing a bunch of
  the same values over and over. To get the grid sizes for each field I used a switch statement which has an array of each key and if the key
  matches then the gridLogic switch statement will return the appropriate grid size dynamically added in the grid item component. 
*/

const gridLogic = (entry) => {
  switch(true){
    case ['firstname', 'lastname', 'city', , 'state', 'cardfirstname', 'cardlastname', 'cardcity', 'cardstate'].includes(entry):
      return 6 ;
      break;
    case ['streetaddress', 'cardaddress', 'cardnumber'].includes(entry):
      return 9;
      break;
    case ['aptnumber','cardaptnumber','cardsecuritycode'].includes(entry):
      return 3;
      break;
    case ['zip' ,'phone' ,'email' ,'info' ,'cardzip' ,'cardexp'].includes(entry):
      return 12;
      break;
  }
}

const MapCustomerInformation = ({customerInformation}) => {
  const detailsVariant = 'h5';
    return(
      Object.entries(customerInformation[0]).map((item, index) => {
        return(
          <>
            <Grid key = {`${item[0]}-customerData`} xs = {gridLogic(item[0])} item>
              <Typography variant = {detailsVariant}>
                {item[1]}
              </Typography>
            </Grid>
          </>
        )
      })
    )
}

MapCustomerInformation.propTypes = {
  customerInformation: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      streetaddress: PropTypes.string.isRequired,
      aptnumber: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      cardfirstname: PropTypes.string.isRequired,
      cardlastname: PropTypes.string.isRequired,
      cardaddress: PropTypes.string.isRequired,
      cardaptnumber: PropTypes.string.isRequired,
      cardcity: PropTypes.string.isRequired,
      cardstate: PropTypes.string.isRequired,
      cardzip: PropTypes.string.isRequired,
      cardnumber: PropTypes.string.isRequired,
      cardsecuritycode: PropTypes.string.isRequired,
      cardexp: PropTypes.string.isRequired,
    })
  )
}

export default MapCustomerInformation;
