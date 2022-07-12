import React, { Component } from 'react'
import Navbar_new from './Navbar_new'
import { withRouter } from './Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

 class Bynow extends Component {
    // console.log(this.props)
  render() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border:"none"
      }));
    // console.log(this.props.router.location.state)
    const datas = this.props.router.location.state
    console.log("datas",datas)
    return (
      <div>
        <div>
            <Navbar_new/>
        </div>

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {datas.map((val, index) => (
          <Grid item xs={2} sm={4} md={12} key={index}>
            <h1 style={{margin:"0 auto"}}>{val.title}</h1>
            <Item sx={{border:"none"}}><img style={{width:"350px",float:"left"}} src = {val.image}/></Item>
            <Box sx={{position:"relative",mt:10}}><h3> {val.description} </h3> 
            
            <h3 style={{color:"green"}}> Price:<CurrencyRupeeRoundedIcon/>   {val.price} </h3>
            <Link to="/Checkout">
            <Button sx={{float:"left",mt:1}} variant='contained' color="success">Checkout</Button>
            </Link>
            
             </Box>  
          </Grid>
        ))}
      </Grid>
    </Box>

      </div>
    )
  }
}
export default withRouter(Bynow)
