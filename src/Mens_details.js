import React, { Component } from 'react'
import Navbar_1 from './Navbar'
import Navbar_new from './Navbar_new'
import { withRouter } from './Withrouter'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import axios from "axios"
import { Link } from 'react-router-dom';


 class Mens_details extends Component {
    constructor(){
        super()
        this.state={
            id_1:"",
            category:"",
            description:"",
            price:[],
            user_id:"",
            image:"",
            title:"",
            user_id:""
        }
    }
    componentDidMount=()=>{
       let a= localStorage.getItem("id")
       console.log("q",a)
       this.setState({id_1:a})
       let datas = JSON.parse(localStorage.getItem("user_email")) || []
         console.log("datas",datas[0])
        
         this.setState({user_id:datas[0]})
         const data = this.props.router.location.state
         console.log("data",data)
         console.log("idss",this.state.user_id)
       

    }
    // componentDidMount=()=>{
    //   let datas = JSON.parse(localStorage.getItem("user_email")) || []
    //   console.log("datas",datas[0])
     
    //   this.setState({user_id:datas[0]})
    // }
      Add_product=(id,category,description,price,image,title)=>{
     
        
    
        console.log("1111",id,category,description,price,image)
        console.log("catgory",category)
        let dd = category.slice(0,3)
        console.log("ddd",dd)
        const pricee = Math.round(price)
        console.log("prieeee",pricee)
        localStorage.setItem("id",id)
        this.setState({id:id,category:dd,description:description,price:pricee,image:image,title:title})
        axios.post(`http://localhost:7001/Product_men`,{
          
          category:this.state.category,
          description:this.state.description,
          price:this.state.price,
          title:this.state.title,
          user_id:this.state.user_id,
          image:this.state.image
    
        })
        
      }
  render() {
    const data = this.props.router.location.state
    console.log("data",data)
    console.log("idss",this.state.user_id)
    const id_get = this.state.id_1


    let details = data.filter(d=>d.id==id_get)
    console.log("details",details)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      
    return (
      <div>
        <div>

            <Navbar_new/>
        </div>


        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {details.map((d, index) => (
          <Grid item xs={2} sm={4} md={12} key={index}>
           
           
            <Item>
            <Typography  variant="h3" sx={{ml:3,color:"black"}}>  {d.title} </Typography>
             <img style={{width:"450px",float:"left"}} src={d.image}/> {d.rating.count[0]}</Item>
                <Item sx={{display:'table-cell'}}><h2>  {d.description}  </h2> <h1><CurrencyRupeeRoundedIcon/> {Math.round(d.price)}</h1>  </Item>
                <Button variant='contained' sx={{float:"left",mt:2}} color="success" onClick={()=>this.Add_product(d.id,d.category,d.description,d.price,d.image,d.title)}>Add to cart </Button>
               <Link to="/Bynow" state={details}> <Button variant='contained' sx={{float:"left",ml:2, mt:2}} color="info">Bynow</Button>  </Link> 
          </Grid>
        ))}
      </Grid>
    </Box>
    {/* <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        {
          details.map((d)=>(
            <CardMedia
            component="img"
            height="500px"
            width="100px"
            image={d.image}
            alt="green iguana"
          />
          
          ))
        }
       
        
      </CardActionArea>
    </Card> */}
      </div>
    )
  }
}
export default withRouter(Mens_details)