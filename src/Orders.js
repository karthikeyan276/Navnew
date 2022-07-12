import React, { Component } from 'react'
import axios from "axios"
import { withRouter } from './Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import Navbar_new from './Navbar_new';
import Button from '@mui/material/Button';


class Orders extends Component {
  constructor(){
    super()
    this.state={
      order_data:[],user_id:'',
      orginal:[]
    }
  }

  get_Order=()=>{

    console.log(this.state.user_id)
    axios.post(`http://localhost:7001/Orders`,{
      user_id:this.props.router.location.state
    }).then((response)=>{
      console.log(response.status);
      console.log(response.data.results)
this.setState({orginal:response.data.results})
      var uniqueArray = response.data.results.reduce((filter, current) => {
        var dk = filter.find(item => item.description === current.description);
        if (!dk) {
          return filter.concat([current]);
        } else {
          return filter;
        }
      }, []);
      console.log("uniqueArray",uniqueArray)

      let amount=response.data.results.map(e=>e.price).reduce((last,curr)=>last+curr)
      console.log("amount",amount)
      this.setState({order_data:uniqueArray})
  
    })
    

  }

componentDidMount=()=>{
  // let datas = JSON.parse(localStorage.getItem("user_email")) || []
  // console.log("datas",datas[0])


  this.setState({user_id:this.props.router.location.state})
  this.get_Order()
  let  orginal= this.state.orginal
  let mens_1=orginal.filter(d=>d.title==d.title)
    console.log("mens",mens_1)
    console.log("menslength",mens_1.length)

 
}

qty=(id)=>{
let qq=this.state.order_data.filter((x)=>x.id==id).length
console.log("qqqq",qq)

}
  

  




  render() {
    let occ=(id)=>this.state.order_data.filter((x)=>x.id==id).length
    // let cc=(id)=>this.state.orginal.filter((x)=>x.id==id).length
    // console.log("length",cc)
    console.log("length",this.state.orginal.length)
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const data = this.state.order_data
    console.log(this.props.router.location.state)
    console.log("dhbfhbf",this.state.orginal)
    let  orginal= this.state.orginal
    let mens_1=orginal.filter(d=>d.title=="Mens Casual Premium Slim Fit T-Shirts ")
    console.log("mens",mens_1)
    console.log("menslength",mens_1.length)
    return (
      <div>

<div style={{marginTop:"-16px"}}>

          <Navbar_new/>
        </div>
        <div>
          <h1 style={{float:"right"}}>Total Items: {this.state.orginal.length}</h1>
          <Box sx={{ flexGrow: 1,mt:2,ml:1,mr:1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((d, index) => (
          <Grid key={index} item xs={4} sm={4} md={6} >
            <Item >id:{d.id}</Item>
            <Item > category:{d.category}</Item>
            <Item >   Desc:{d.description.slice(0,20)}</Item>
            <Item > <h4> Price: <CurrencyRupeeIcon/>{Math.round(d.price)} </h4></Item>
            <Item >  {<img style={{height:"150px"}} src={d.image}/>}
            </Item>
            {/* <Item><Button onClick={()=>this.qty(d.id)}>Quantity </Button></Item> */}
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
