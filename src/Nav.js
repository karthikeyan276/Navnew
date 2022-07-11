import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Button } from '@mui/material';
import './Slider.css';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "	#cfcfce",
     
    },
  },
  link1:{
    textDecoration: "none",
    color:"white",
    background:"black",
    fontSize: "15px",
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "black",
      background:"white",
      border: "1px solid white",
    },
  }
}));

function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    
    <AppBar  position="static">
        <div style={{backgroundColor:"black",color:"white"}}>
           <CssBaseline />
      <Toolbar >
        <Typography variant="h5" className={classes.logo}>
        REVERY AI
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              About
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
            Pricing
            </Link>
            <Link to="/faq" className={classes.link}>
            Contact
            </Link>
            <Link to="/faq" className={classes.link}>
            IOS App
            </Link>
            <Link to="/faq" className={classes.link1}>
            <Button  variant='outlined' fontSize="inherit">Demo</Button>
            
            </Link>
            <Link to="/faq" className={classes.link1}>
            <Button variant='outlined'>Get started</Button>
            </Link>
          </div>
        )}
      </Toolbar> 
        </div>
      
    </AppBar>
  );
}
export default Nav;