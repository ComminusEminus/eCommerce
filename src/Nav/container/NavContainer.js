import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {CartButton, ExpandedNav} from '../index'
//create Collapsed nav after hooking everything up
//use array of links for now change when I create dynamic page filter and will import context from products Page filter
  //conider making products globally available?
//Nav UI only needed for Collapsed Nav will make later when I make Collapsed Nav
const tempNavLinks = ['Mens', 'Womens', 'Sale'];


const NavContainer = () => {
  return(
    <>
      <AppBar position="static">
        <Box sx = {{width: '100%', px: 10, border: 1}}>
          <Toolbar >
            <ExpandedNav navLinks = {tempNavLinks} />
            <Box sx = {{width:'100%', height:'100%', display: 'flex', justifyContent: 'flex-end'}}>
              <CartButton />
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  )
}

export default NavContainer;
