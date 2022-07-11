import React, { Component } from 'react'
import { withRouter } from '../Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from 'reactstrap';

 class Jwel extends Component {
    constructor(props){
        super(props)
    }

  render() {
    console.log(this.props.router.location.state)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    console.log(this.props.router.location.state)
    const data = this.props.router.location.state
    console.log("data",data)
    return (
      <div> <div>
      <Box sx={{ flexGrow: 1,mt:2,ml:1,mr:1 }}>
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {data.map((d, index) => (
      <Grid key={index} item xs={6} sm={6} md={6} >
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
      </div></div>
    )
  }
}
export default withRouter(Jwel)
