import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Posts from './Pages/Posts/Posts.js';
import Statistics from './Pages/Statistics/Statistics.js';
import NavBar from './Components/Navbar/Navbar.js';



export default function Routing() {
  const allRoutes = [
    {
      Component: Home,
      path: '/'
    },
    {
      Component: Posts,
      path: '/posts'
    },
    {
      Component: Statistics,
      path: '/stats'
    },

  ];
  return (
    <Router>
      {allRoutes.map(({ path, Component }, index) => {
        return (
          <Route
            key={index}
            exact
            path={path}
            render={props => (
              <NavBar component={Component} {...props} />
            )}
          />
        )
      })

      }
    </Router>
  );
}
