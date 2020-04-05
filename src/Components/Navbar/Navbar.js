import React, { useState } from 'react';
import {
  NavbarToggler,
  Container
} from 'reactstrap';
import './Navbar.css'
import BackDrop from '../UIComponents/Backdrop'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const containerStyles={ paddingLeft: '0px', paddingRight: '0px', overflow:'hidden' };

  return (
    <>
      <Container fluid style={containerStyles}>
      {isOpen && <BackDrop onClick={toggle}/>}
    
      {/* <button
          onClick={toggle}
        >
          <span style={color='white'}/>
          <span style={color='white'}/>
          <span style={color='white'}/>
        </button> */}
        <NavbarToggler onClick={toggle}/>
        <SideDrawer show={isOpen} onClick={toggle}>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks/>
          </nav>
        </SideDrawer>
      
      {/* <Col style={containerStyles}>
        <Component />
      </Col>  */}
        {/*<Row>
          <Col md='3' style={
            {overflow:'hidden', height:'100vh', backgroundColor:'blue'}
            }>
            <Navbar light expand=''>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav tabs vertical>
                  <NavItem>
                    <NavLink href='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/posts'>Posts</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/stats'>Statistics</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
          
          </Row>*/}
      
      </Container>
    </>
  );
}


export default NavBar;