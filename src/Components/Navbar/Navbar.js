import React, { useState } from 'react';
import {
  Container
} from 'reactstrap';
import './Navbar.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import back from './corona.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
    //setStyle({...style, backgroundImage: 'none'});
  };

  const closeDrawer = () => {
    setIsOpen(false);
    //setStyle({...style, backgroundImage: `url(${back})`});
  };

  const style = ({
    position: 'absolute',
    width: '19rem',
    height: '100%',
    backgroundImage: `url(${back})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat'
  });

  return (
    <>
      <Container fluid className='navbar' style={style}>
        {/* {isOpen && <BackDrop onClick={closeDrawer} />} */}
        <button onClick={openDrawer} className='navbut'>
          <div/>
          <div/>
          <div/>
        </button>
        <SideDrawer show={isOpen} onClick={closeDrawer}>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      </Container>
    </>
  );
};

export default NavBar;