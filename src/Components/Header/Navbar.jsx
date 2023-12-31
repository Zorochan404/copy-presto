import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'



function Navbar() {

  const Navigate = useNavigate()


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <div className='navbar'>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
            textDecoration='none'
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontfamily: 'Poppins',

                // fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black', // Change PRESTOCLEAN color to green
                textDecoration: 'none',
              }}
            >
              <Link to ="/" style={{textDecoration: "none"}}>PRESTOCLEAN</Link>
            </Typography>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="green"
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

                <MenuItem onClick={handleCloseNavMenu}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button sx={{ color: 'green' }} > <Link to='/' style={{ textDecoration: 'none', color: 'black' }} />Home</Button>
                    </Link>
                    <Button sx={{ color: 'green' }}><Link to='/services' style={{ textDecoration: 'none', color: 'black' }}> Services</Link></Button>
                    <Button sx={{ color: 'green' }}><Link to='/contactus' style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link></Button>
                    <Button sx={{ color: 'green' }}><Link to='/items' style={{ textDecoration: 'none', color: 'black' }}>Pricing</Link></Button>

                  </Box>
                </MenuItem>


              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'green', // Change text color to black
                textDecoration: 'none',
              }}
            >
              <Link to="/" style={{textDecoration:"none"}}>PRESTOCLEAN</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link>

              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link to="/contactus" style={{ textDecoration: "none", color: 'black' }}>Contact Us</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link to="/items" style={{ textDecoration: "none", color: 'black' }}>Pricing</Link>
              </Button>
            </Box>

            <Button
              variant="outlined"
              onClick={() => {
                Navigate('/schedule')
              }}
              className='schedule'
              sx={{
                color: 'green', // Apply green color to the button text
                borderColor: 'green', // Apply green color to the button border
                "&:hover":{backgroundColor:"rgb(72, 163, 110)", color: "white"} 
              }}
            // }

            >
              Schedule
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </div >
  );
}
export default Navbar;

