import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

import * as React from 'react';

import { Link as RouterLink } from "react-router-dom";
import {useEffect, useContext} from 'react'

import ProductContext from '../../contexts/ProductContext'

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref = {ref} {...props} />
));


const ProductDrawer = ({catagoryTitle}) => {
  const {state: {refineFilter}, productDispatch: {createRefinedFilters}} = useContext(ProductContext);

  useEffect(() => {
    createRefinedFilters(catagoryTitle)
  }, [])

  return (
    <>
     <Box elevation={1} sx={{display: 'flex', flexDirection: 'column', justifyContent:'flex-start', height: "100%", p:4, width: '30%'}}>
        <Box sx = {{mb: 1}}>
          <Typography variant = "h4" sx = {{fontWeight: 900}}>
            {catagoryTitle}
          </Typography>
        </Box>
        <Divider sx = {{mb: 4}} />
        <Stack spacing={2}>
          {
            refineFilter && refineFilter.map((filter) => {
              return(
                <Link
                  variant = 'h6'
                  component = {LinkBehavior}
                  underline="none"
                  key = {`id-${filter}`}
                  to = {`/refine/${catagoryTitle}/${filter}`}
                  sx = {{ textTransform: 'uppercase', color:'theme.primary', fontWeight: 900}}
                >
                  {filter}
                </Link>
              )
            })
          }
        </Stack>
        {!refineFilter && <Typography variant = "h6"> ...Loading </Typography>}
     </Box>
    </>
  )
}

export default ProductDrawer;
