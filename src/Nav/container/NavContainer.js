import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {CartButton, ExpandedNav} from '../index'

/*
  Nav container for responsive nav bar. Using Material UI's AppBar the component
  switches between two expanded nav bar and collapsede navbar. 
*/

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
