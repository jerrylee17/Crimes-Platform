import React from 'react';
import { NavLink } from 'react-router-dom';

//import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  //const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts" exact>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to="/stats" exact>
          Statistics
        </NavLink>
      </li>
      {/* {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/posts`}>My posts</NavLink>
        </li>
      )} */}
      {/* {auth.isLoggedIn && (
        <li>
          <NavLink to="/posts/new">My Posts</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )} */}
    </ul>
  );
};

export default NavLinks;
