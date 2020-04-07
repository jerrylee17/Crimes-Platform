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
import './Navbar.css';
import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap";

function VanillaBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/stats" className="nav-link">
            <span className="link-text">Statistics</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/posts" className="nav-link">
            <span className="link-text">Posts</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

function NavBar({
  component: Component
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const containerStyles = { paddingLeft: '0px', paddingRight: '0px', overflow: 'hidden' };

  return (
    <>
      <Container fluid style={containerStyles}>
        <Row>
          <Col style={containerStyles}>
            <VanillaBar />
            <Component />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default NavBar;