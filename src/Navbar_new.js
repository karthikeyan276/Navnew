import { Menu, MenuItem, TextField ,Button} from '@mui/material';
import React from 'react';
import { Link ,Navigate} from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import axios from 'axios';
import { withRouter } from './Withrouter';


class Navbar_new extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      open:false,
      anchorEl:false,
      product_data:[],
    jwel:[],
    electroincs:[],
    womens_clothing:[],
    anchorEl_1:false,
    user_id:[]
    };
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
        let datas = JSON.parse(localStorage.getItem("user_email")) || []
        console.log("datas",datas[0])
        this.setState({user_id:datas[0]})
    
      })
  }

  logout_1=()=>{
    let new_1 = localStorage.getItem('ecommerce')
     
    alert("are you sure")
    if(new_1!==null){
      localStorage.removeItem('ecommerce');
     this.setState({navigate:<Navigate to='/Login'></Navigate>})
      
    }
    else{
      alert("plz wait ")
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
 
  render() {
    const open = Boolean(this.state.anchorEl);
    const open_1 = Boolean(this.state.anchorEl_1)
    console.log(this.state.product_data)
    const datas = this.state.product_data
    // if(localStorage.getItem("ecommerce")==null){
    //     return <Navigate to="/Home"/>
    // }

    console.log("data",datas)
    return (
      <div>
        <div style={{float:"right",width:"100%",backgroundColor:"#2874f0",color:"white"}}> 
<Nav pills>
    <NavItem>

        <NavLink> <TextField fullWidth label="Search" id="fullWidth"  sx={{backgroundColor:"white",color:"blue",mt:1,m:"0 auto"}}/> </NavLink>
    </NavItem>
   
          <NavItem>
          <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={this.handleClick}
        variant="contained"
       
     
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
          </NavItem>

          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle style={{color:"white"}} nav caret>
              Get Products
            </DropdownToggle>
            <DropdownMenu>
                {/* <Link to="/Mens_cloth" state={this.state.product_data}>
                <DropdownItem header>Mens_cloth</DropdownItem>
                </Link> */}
                {/* <Link to="/Mens_cloth" state={this.state.product_data} >
        <MenuItem >men's clothing</MenuItem>
        </Link> */}
                <Link to="/Mens_cloth" state={this.state.product_data}>
              <DropdownItem>Mens_cloth</DropdownItem>
              </Link>
                <Link to="/womes_cloth" state={this.state.womens_clothing}>
              <DropdownItem>Womens_cloth</DropdownItem>
              </Link>
              <Link to="/jewelery" state={this.state.jwel}>
              <DropdownItem>jewelery</DropdownItem>
              </Link>
              <Link to="/electroics"  state={this.state.electroincs}>
              <DropdownItem>Electronics</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <Link to="/Home">
             <Button sx={{mr:2,ml:2}} variant="contained" >Back</Button>
            </Link>
           
          </NavItem>
          <NavItem>
<Link to="/Orders" state={this.state.user_id}>
   <Button variant='contained' sx={{backgroundColor:"white",color:"black" }} ><ShoppingCartTwoToneIcon />   </Button> 

</Link>
 
    </NavItem>
          <NavItem>
          <Link to="/Login">
          <NavLink style={{color:"white"}} onClick={this.logout_1}>Logout</NavLink>
          </Link>
            
          </NavItem>
        
         
        </Nav>

        </div>
        
      </div>
    );
  }
}

export default withRouter(Navbar_new)