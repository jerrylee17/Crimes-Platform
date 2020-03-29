import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { 
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@material-ui/icons';
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

const drawerWidth = '100vw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NavBar({
  component: Component
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const drawerOpen = () => {
    setIsOpen(true);
  };

  const drawerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container fluid style={{ paddingLeft: '0px', paddingRight: '0px', overflow:'hidden' }}>
        <Row>
          <Col md='3' style={{overflow:'hidden', height:'100vh'}
            }>
            {/* <Navbar light expand=''>
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
            </Navbar> */}
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={isOpen}
              classe={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={drawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <List>
                {['Home'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['Posts', 'Statistics'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['About Us'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: isOpen,
              })}
            >

            </main>
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