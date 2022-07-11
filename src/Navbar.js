import { Button } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "./Slider.css"



class Navbar_1 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return <Fragment>
      <Navbar  color="faded" light expand="md">
        <NavbarBrand href="/">REVERY AI</NavbarBrand>
        <NavbarToggler  onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="navbar-right"  navbar>
            <NavItem style={{float:"right"}}>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              About
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
               How is woks
                  </DropdownItem>
                <DropdownItem>
                Case studies
                  </DropdownItem>
             
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink >Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >IOS App</NavLink>
            </NavItem>
            <NavItem>
              <Button variant='contained'>Demo</Button>
            </NavItem>
            <NavItem>
            <Button variant='contained'>Get started</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  }
}

export default Navbar_1