import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from "react-router-dom";
import {useEffect, useContext} from 'react'

import ProductContext from '../../contexts/ProductContext'

const ProductDrawer = ({catagoryTitle}) => {
  const {state: {refineFilter}, productDispatch: {createRefinedFilters}} = useContext(ProductContext);

  useEffect(() => {
    createRefinedFilters(catagoryTitle)
  }, [catagoryTitle])

  return (
    <>
     <Box sx={{ display: 'flex' }}>
      <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
        <Box>
          <Box>
            <Typography variant = "h4">
              {catagoryTitle}
            </Typography>
          </Box>
          {
            refineFilter && refineFilter.map((filter) => {
              return(
                <Link
                  key = {`id-${filter}`}
                  to = {`/refine/${catagoryTitle}/${filter}`}

                >
                  <Typography variant = "h5">
                    {filter}
                  </Typography>
                </Link>
              )
            })
          }
          {!refineFilter && <Typography variant = "h6"> ...Loading </Typography>}
        </Box>
      </Drawer>
     </Box>
    </>
  )
}

export default ProductDrawer;
