import React, { Component } from 'react'
import axios from 'axios'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from 'reactstrap';
import Mens_cloth from './Cloth/Mens_cloth';

export default class Poducts extends Component {
    constructor(){
        super()
        this.state={
            product_data:[],
            All_data:[]
        }
    }
    componentDidMount=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            console.log(response.status);
            console.log(response.data)
            this.setState({product_data:response.data})
        
          })
      }
  render() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const data = this.state.product_data
    const t_shirt = data.filter(d=>d.category=="men's clothing")
    console.log("men's clothing",t_shirt)
    return (
      <div style={{backgroundColor:"lightblue"}}>

<Box sx={{ flexGrow: 1,mt:2,ml:1,mr:1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((d, index) => (
          <Grid key={index} item xs={2} sm={4} md={4} >
            <Item >id:{d.id}</Item>
            <Item > category:{d.category}</Item>
            <Item >   Desc:{d.description.slice(0,20)}</Item>
            <Item > <h4> Price:{d.price} </h4></Item>
            <Item >  {<img style={{height:"150px"}} src={d.image}/>}</Item>
            <Item><Button variant="contained" color='success'>Add</Button></Item>
        
          </Grid>
        ))}
      </Grid>
    </Box>
   
      </div>
    )
  }
}
