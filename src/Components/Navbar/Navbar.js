import React, { useState } from 'react';
import {
  NavbarToggler,
  Container
} from 'reactstrap';
import './Navbar.css';
import BackDrop from '../UIComponents/Backdrop';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const containerStyles = { paddingLeft: '0px', paddingRight: '0px', overflow: 'hidden' };

  return (
    <>
      <Container fluid style={containerStyles}>
        {isOpen && <BackDrop onClick={toggle} />}

        <NavbarToggler onClick={toggle} />
        <SideDrawer show={isOpen} onClick={toggle}>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>

      </Container>
    </>
  );
}


export default NavBar;