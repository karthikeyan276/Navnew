import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import "./Slider.css"
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Nav_1(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
 
  const handleClose = () => {
    setAnchorEl(null);
  };
 
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
      color: theme.palette[color].main,
      backgroundColor: 'white',
      color:"black"
    },
  }));
  const StyledButton_1 = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
      color: theme.palette[color].main,
      backgroundColor: '#727172',
      color:"black"
    },
  }));

  const StyledButton_2 = styled(Button)(({ theme, color = 'primary' }) => ({
    ':hover': {
      color: theme.palette[color].main,
      backgroundColor: '#939295',
      color:"black"
    },
  }));


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        home
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ bgcolor: "black" , color:"white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }  }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          REVERY AI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' },background:"black" }}>
          <StyledButton_1  sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant='contained'>Get started</StyledButton_1>
          <StyledButton  sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black',border:1 }} variant='outlined'>Demo</StyledButton>
          <StyledButton_1 sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant='contained'>IOS App</StyledButton_1>
          <StyledButton_1 sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant='contained'>Contact</StyledButton_1>
          <StyledButton_1 sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant='contained'>Pricing</StyledButton_1>
          {/* <StyledButton_1  sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant='contained'>About</StyledButton_1> */}
          <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleClick}
        variant="contained"
       sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }}
     
      >
        About
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onMouseMove={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        sx={{color:"white",mt:4}}
      >
        <MenuItem onClick={handleClose}>How is it works </MenuItem>
        <MenuItem onClick={handleClose}>case studies</MenuItem>
       
      </Menu>
          <StyledButton_1 sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} variant='contained'>Home</StyledButton_1>
        
       
          
        
         
     


          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

Nav_1.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav_1;
