import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navbar.css'

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar sticky='left' light expand=''>
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
      </div>
      <Component/>
    </>
  );
}


export default NavBar;