import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Stories from './Pages/Stories/Stories.js';
import News from './Pages/News/News.js';
import Statistics from './Pages/Statistics/Statistics.js';
import Charts from './Pages/Charts/Charts.js';
import Maps from './Pages/Maps/Maps.js';

import NavBar from './Components/Navbar/Navbar.js';



export default function Routing() {
  const allRoutes = [
    {
      Component: Home,
      path: '/'
    },
    {
      Component: Stories,
      path: '/stories'
    },
    {
      Component: News,
      path: '/news'
    },
    {
      Component: Statistics,
      path: '/statistics'
    },
    {
      Component: Charts,
      path: '/charts'
    },
    {
      Component: Maps,
      path: '/map'
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
