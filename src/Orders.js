import React, { Component } from 'react'
import axios from "axios"
import { withRouter } from './Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Navbar_new from './Navbar_new';


class Orders extends Component {
  constructor(){
    super()
    this.state={
      order_data:[],user_id:''
    }
  }

  get_Order=()=>{

    console.log(this.state.user_id)
    axios.post(`http://localhost:7001/Orders`,{
      user_id:this.props.router.location.state
    }).then((response)=>{
      console.log(response.status);
      console.log(response.data.results)
      this.setState({order_data:response.data.results})
  
    })

  }

componentDidMount=()=>{
  // let datas = JSON.parse(localStorage.getItem("user_email")) || []
  // console.log("datas",datas[0])


  this.setState({user_id:this.props.router.location.state})
  this.get_Order()

 
}



  render() {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const data = this.state.order_data
    console.log(this.props.router.location.state)
    console.log("dhbfhbf",this.state.user_id)
    return (
      <div>

<div style={{marginTop:"-16px"}}>
          <Navbar_new/>
        </div>
        <div>
          <Box sx={{ flexGrow: 1,mt:2,ml:1,mr:1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((d, index) => (
          <Grid key={index} item xs={6} sm={6} md={6} >
            <Item >id:{d.id}</Item>
            <Item > category:{d.category}</Item>
            <Item >   Desc:{d.description.slice(0,20)}</Item>
            <Item > <h4> Price:{Math.round(d.price)} </h4></Item>
            <Item >  {<img style={{height:"150px"}} src={d.image}/>}</Item>
            {/* <Item><Button variant="contained" color='success' onClick={()=>this.Add_product(d.id,d.category,d.description,d.price,d.image,d.title)}>Add</Button>
            <Button variant="contained" color="error">Remove</Button>
            </Item> */}
        
          </Grid>
        ))}
      </Grid>
    </Box>
          </div>
      </div>
    )
  }
}
export default  withRouter(Orders)
