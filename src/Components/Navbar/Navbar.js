import React, { useState } from 'react';
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

  const toggle = () => {
    setIsOpen(!isOpen); 
    console.log('hi');
    if(isOpen === true){
      setStyle({...style, backgroundImage: 'none'});}
      else
      setStyle({...style, backgroundImage:`url('http://getwallpapers.com/wallpaper/full/8/f/d/1127804-free-download-pretty-wallpapers-hd-1920x1200-for-iphone-7.jpg')`});
 
  };
  const [style, setStyle] = useState({height:'100vh', backgroundImage:`url('http://getwallpapers.com/wallpaper/full/8/f/d/1127804-free-download-pretty-wallpapers-hd-1920x1200-for-iphone-7.jpg')`});
  return (
    <>
      <Container fluid className='navbar' style={style}>
       <NavbarToggler onClick={toggle}/>
        <SideDrawer show={isOpen} click={toggle} style={{width:'100%'}}>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      </Container>
    </>
  );
}


export default NavBar;