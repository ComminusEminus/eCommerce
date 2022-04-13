import {useContext, useEffect, useState} from 'react'
import { Link as RouterLink } from "react-router-dom";
import * as React from 'react';
import Link from '@mui/material/Link'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import ProductContext from '../../contexts/ProductContext';

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref = {ref} {...props} />
));




const NavBar = () => {
  const {state: {productPageFilters}} = useContext(ProductContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Box sx = {{width: '100%', px: 10 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {productPageFilters.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around'}}>
            {productPageFilters.map((page) => (
              <Link
                variant = 'h5'
                component = {LinkBehavior}
                underline="none"
                key={page}
                to = {`/${page}`}
                sx = {{ mx:3, textTransform: 'uppercase', color:'white', fontWeight: 900}}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx = {{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton
              aria-label="shopping-cart"
              component = {LinkBehavior}
              underline="none"
              to = {'/cart'}
              sx = {{color: 'white'}}
            >
              <ShoppingCartIcon
                fontSize = 'large'
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default NavBar;
