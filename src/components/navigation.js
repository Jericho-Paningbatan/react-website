import * as React from 'react';
import { Link } from 'react-router-dom';
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
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';

const pages = ['Home', 'Portfolio', 'Blog', 'About Me'];


const Head = () => {
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
  return (
    <AppBar position="static" sx={{ backgroundColor: '#4b4b4b' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo as a link */}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <img src="/img/mylogo.png" alt="Logo" style={{ marginRight: '10px', height: '80px', width: '150px' }} />
          </Link>

          {/* Menu items for larger screens (md and up) */}
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            marginRight: '40px',
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}` }
                sx={{
                  my: 2,
                  color: '#dcdde1',
                  display: 'block',
                 
                  '&:hover': {
                    backgroundColor: 'none',
                    color: 'red',
                  },
                }}
              >
                {page}
              </Button>
            ))}

              <Button
              component={Link}
              to="/portfolio"
              sx={{
                my: 2,
                color: '#dcdde1',
                display: 'none',
              
                '&:hover': {
                  backgroundColor: 'none',
                  color: 'red',
                },
              }}
              >
              </Button>

              <Button
              component={Link}
              to="/blog"
              sx={{
                my: 2,
                color: '#dcdde1',
                display: 'none',
              
                '&:hover': {
                  backgroundColor: 'none',
                  color: 'red',
                },
              }}
              >
              </Button>

              <Button
              component={Link}
              to="/about"
              sx={{
                my: 2,
                color: '#dcdde1',
                display: 'none',
                
                '&:hover': {
                  backgroundColor: 'none',
                  color: 'red',
                },
              }}
              >
              </Button>




            

            <Button style={{backgroundColor:'#ff3838', color:'whitesmoke', height:'40px', marginTop:'14px', marginLeft:'25px', padding:'15px',}}>
            <LocalPhoneTwoToneIcon/> Contact Me
               
            </Button>
          </Box>

          {/* Menu icon for smaller screens (xs) */}
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'flex-end',
          }}>
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
             {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="right">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Head;
