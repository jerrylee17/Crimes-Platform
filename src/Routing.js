import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Posts from './Pages/Posts/Posts.js';
import Statistics from './Pages/Statistics/Statistics.js';
import NavBar from './Components/Navbar/Navbar'


export default function Routing() {
  let routes;//these are the logged out routes

  routes = (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/posts' exact>
        <Posts/>
      </Route>
      <Route path='/stats' exact>
        <Statistics/>
      </Route>
      <Redirect to='/'/>
    </Switch>
  )

  return (
    <Router>
      <NavBar/>
      <main>{routes}</main>
    </Router>
  );
}
