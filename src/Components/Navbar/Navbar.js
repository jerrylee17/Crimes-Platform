import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Col,
  Row
} from 'reactstrap';
import './Navbar.css'

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container fluid style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Row>
          <Col md='3' style={{overflow:'hidden'}}>
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
          <Col>
            <Component />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default NavBar;