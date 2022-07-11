
import React, { Component } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

import { Button,  TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import axios from "axios"
import Slider from './Slider'
import Mens_cloth from './Cloth/Mens_cloth';
import { withRouter } from './Withrouter';
import Navbar_new from './Navbar_new';

 class Home extends Component {
    constructor(){
        super()
        this.state={
            open:false,
            anchorEl:false,
            product_data:[],
          jwel:[],
          electroincs:[],
          womens_clothing:[],
          anchorEl_1:false
        }
    }

    handleDrawerOpen =()=>{
        this.setState({open:true})
    }
    handleDrawerClose =()=>{
        this.setState({open:false})
    }
    handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget});
      };
      handleClose = (event) => {
        this.setState({anchorEl:null});
      };

      handleClick_anchorEl_1 = (event) => {
        this.setState({anchorEl_1:event.currentTarget});
      };
      handleClose_anchorEl_1 = (event) => {
        this.setState({anchorEl_1:null});
      };
      clicked=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            console.log(response.status);
            console.log(response.data)
        
          })
      }

      componentDidMount=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            console.log(response.status);
            console.log(response.data)
       
            const data = response.data
            const t_shirt = data.filter(d=>d.category=="men's clothing")
            console.log("men's clothing",t_shirt)
            this.setState({product_data:t_shirt})

            const jwel = data.filter(d=>d.category=="jewelery")
            // console.log("jewelery",jwel)
            this.setState({jwel:jwel})

            const womens_clothing=data.filter(d=>d.category=="women's clothing")
            // console.log("women's clothing",womens_clothing)
            this.setState({womens_clothing:womens_clothing})

            const electroincs = data.filter(d=>d.category=="electronics")
            this.setState({electroincs:electroincs})
            // console.log("electronics",electroincs)
        
          })
      }
  render() {
    const open = Boolean(this.state.anchorEl);
    const open_1 = Boolean(this.state.anchorEl_1)
    console.log(this.state.product_data)
    const datas = this.state.product_data

    console.log("data",datas)
 

    return (
       <div>
         <Navbar_new/>
        {/* <div style={{backgroundColor:"#2874f0",color:"white"}}>
       <Box
      sx={{
        width: 400,
        height:110,
        maxWidth: '100%',
        
        ml:2,
        alignItems:'center',
        display:'flex ',
        
      }}
    >

      <TextField fullWidth label="Search" id="fullWidth"  sx={{backgroundColor:"white",mt:1,m:"0 auto"}}/>
      </Box>
      <Box sx={{float:"right",mt:-5}}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={this.handleClick}
        sx={{color:"white",ml:2,mt:-3,backgroundColor:"white",color:"black"}}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={this.state.anchorEl}
        open={open}
        onMouseMove={this.handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        sx={{color:"white"}}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Login </MenuItem>
      </Menu>
      
      <Link to="/Login">
       <Button variant='contained'  sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}}>Login</Button>
      </Link>
      <Button
        id="demo-positioned-button"
        aria-controls={open_1 ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open_1 ? "true" : undefined}
        onMouseOver={this.handleClick_anchorEl_1}
        sx={{color:"white",ml:2,mt:-3,backgroundColor:"white",color:"black"}}
      >
        Get Products
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={this.state.anchorEl_1}
        open={open_1}
        onMouseMove={this.handleClose_anchorEl_1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        sx={{color:"white"}}
      >
       
      
        <Link to="/Mens_cloth" state={this.state.product_data} >
        <MenuItem >men's clothing</MenuItem>
        </Link>
        
        <Link to="/electroics"  state={this.state.electroincs}>
         <MenuItem >electronics</MenuItem>
        </Link>
       <Link to="/womes_cloth" state={this.state.womens_clothing}>
       <MenuItem >women's clothing </MenuItem>
       </Link>
        <Link to="/jewelery" state={this.state.jwel}>
        
        <MenuItem >jewelery </MenuItem>
        </Link>
        

      </Menu>
     
      <Button variant='contained'  sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}} >more</Button>
     <Button variant='contained' sx={{backgroundColor:"white",color:"black" ,ml:2,mt:-3}}><ShoppingCartTwoToneIcon />   </Button> 
    </Box>
    </div> */}
    <div style={{display:"flex"}}>
           {/* <Button variant='contained' color="success" onClick={this.clicked}>View Products</Button> */}
          

    </div>
    <div >


    </div>
    {/* {this.state.product_data?  <Mens_cloth data={this.state.product_data} /> : null} */}
    <div style={{marginTop:"70px"}}>

         <Slider/>
    </div>
     
     
       </div>
      
    )
  }
}

export default withRouter(Home)
