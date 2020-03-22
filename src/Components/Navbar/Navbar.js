import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Crimes Against Asians</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/stories'>Stories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/news'>News</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Statistics
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/charts'>
                  Charts and Graphs
                </DropdownItem>
                <DropdownItem href='/map'>
                  Map
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Component />
    </>
  );
}


export default NavBar;