import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import composeURL from '../../firebase/composeFirebaseURL';
import firebaseConfig from '../../firebase/firebaseConfig';
import PropTypes from "prop-types";
import {useState, useEffect} from 'react';



const Product = ({productTitle, productPrice}) => {
  const [urlState, setUrlState] = useState(undefined);
  console.log('products')
  useEffect(() => {
    const imgUrl = async () => {
      const url = await composeURL(firebaseConfig, productTitle);
      setUrlState(url)
    }
    imgUrl()
    return () => {
      setUrlState(undefined)
    }
  }, [])


  return (
    <>
      {!urlState && <Typography variant = 'h3'>...Loading</Typography>}
      {
        urlState && <>
          <Paper elevation = {3} sx = {{ boxSizing: 'border-box', borderRadius: 8, height: '100%', p:5, display: 'flex', flexDirection:'column', justifyContent: 'flex-end', alignContent: 'flex-start' }}>
            <img src = {urlState} alt = {productTitle} height={ '90%'} width={'auto'} sx = {{ height: 140}} />
            <Typography underline="none" variant = 'h4' component= 'h4'sx ={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 900}}>
              {productTitle}
            </Typography>
            <Typography underline="none" variant = 'h6' component= 'h4' sx ={{ fontWeight: 600, textAlign: 'center'}}>
              ${productPrice}.00
            </Typography>
          </Paper>
        </>
      }
    </>
  )
}

Product.propTypes = {
  productTitle: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired
}

export default Product;