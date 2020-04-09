import React, { useState, useEffect } from 'react';
import {
  NavbarToggler,
  Container,
  Col
} from 'reactstrap';
import './Navbar.css';
import BackDrop from '../UIComponents/Backdrop';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
    setStyle({ ...style, backgroundImage: 'none' });
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setStyle({ ...style, backgroundImage: 'url(\'http://getwallpapers.com/wallpaper/full/8/f/d/1127804-free-download-pretty-wallpapers-hd-1920x1200-for-iphone-7.jpg\')' });
  };

  const [style, setStyle] = useState({backgroundImage: 'url(\'http://getwallpapers.com/wallpaper/full/8/f/d/1127804-free-download-pretty-wallpapers-hd-1920x1200-for-iphone-7.jpg\')' });

  return (
    <>
      <Container fluid className='navbar' style={style}>
        <NavbarToggler onClick={openDrawer}/>
        {isOpen &&
          <Col onClick={closeDrawer}>
            <nav>
              <NavLinks/>
            </nav>
          </Col>
        }
      </Container>
    </>
  );
}


export default NavBar;