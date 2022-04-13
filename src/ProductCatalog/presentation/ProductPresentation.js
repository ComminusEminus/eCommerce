import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Skeleton from '@mui/material/Skeleton';

import PropTypes from "prop-types";

import {SelectOrderContainer} from '../../SelectOrder/index'
import {LinkBehavior} from '../../Nav/index'
import {useImageGrabUI} from '../index'

const ProductPresentation = (props) => {
  const {product: {title, price, description}, view} = props;
  const {imageURL} = useImageGrabUI(title)
  return (
    <>
      <Box sx ={{ height:'100%',width: '100%', display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Paper elevation = {3} sx ={{height:'100%',width: '100%', px:5, pt:5, pb:8, borderRadius: 8}}>
          <Link
            component = {LinkBehavior}
            underline="none"
            to = {`/details/${title}`}
          >
            <Box sx = {{ height: '100%',width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center' }}>
              <Box sx ={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',minHeight: '100%', height: '100%', width: '100%'}}>
                {imageURL && <img src = {imageURL} alt = {title} height={ '100%'} width={'100%'}  />}
                {!imageURL && <Skeleton variant="rectangular" height={600} width={300} />}
              </Box>
              <Box sx = {{display: 'inline-flex',justifyContent:'space-around',borderRadius: 3, bgcolor: 'primary.main', p:2}}>
                <Typography underline="none" variant = 'h4' component= 'h4'sx ={{color:'white', textAlign: 'center', textTransform: 'uppercase', fontWeight: 900}}>
                  {title}
                </Typography>
                <Typography underline="none" variant = 'h4' component= 'h4' sx ={{color: 'white', fontWeight: 300, textAlign: 'center'}}>
                  ${price}.00
                </Typography>
              </Box>
            </Box>
          </Link>
        </Paper>
      {
        view && <Box sx = {{ml:2,width: '100%', height: '100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <Box sx = {{p:4, flexGrow:1, display: 'flex', width:'100%'}}>
            <Typography underline="none" variant = 'h6' component= 'h4'sx ={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 900}}>
              {description}
            </Typography>
            <Divider />
          </Box>
          <SelectOrderContainer product = {props.product} />
        </Box>
      }
      </Box>
    </>
  )
}


ProductPresentation.propTypes = {
  product:
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      price: PropTypes.number.isRequired,
      tags: PropTypes.array.isRequired,
    }),
  view: PropTypes.bool.isRequired
}

export default ProductPresentation;
