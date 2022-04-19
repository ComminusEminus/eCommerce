import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'

import LinkBehavior from './LinkBehavior'
import CartButton from './CartButton'


/*
  Link behavior is a props forwarding component that allows for the use of both Material UI's
  Link button and React Routers Link component. Link Behavior is located in the same directory and
  this nav component. 
*/



const ExpandedNav = (props) => {
  return (
    <>
      <Box sx = {{flexGrow:1}}>
        <Link
          variant = 'h5'
          component = {LinkBehavior}
          underline="none"
          to = {`/`}
          sx = {{ mx:3, textTransform: 'uppercase', color:'white', fontWeight: 300}}
        >
          BT's
        </Link>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around'}}>
        {props.navLinks.map((linkTitle) => (
            <Link
              variant = 'h5'
              component = {LinkBehavior}
              underline="none"
              key={`link-${linkTitle}`}
              to = {`/${linkTitle}`}
              sx = {{ mx:3, textTransform: 'uppercase', color:'white', fontWeight: 900}}
            >
              {linkTitle}
            </Link>
        ))}
      </Box>
    </>
  )
}

export default ExpandedNav;
