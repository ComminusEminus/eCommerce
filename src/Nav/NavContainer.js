import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ExpandedNav from './ExpandedNav'
import CartButton from './CartButton'
import navLinks from '../common/Constants/navLinks'


const NavContainer = () => {
  return(
    <>
      <AppBar position="static">
        <Box sx = {{width: '100%', px: 10, border: 1}}>
          <Toolbar >
            <ExpandedNav navLinks = {navLinks} />
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
