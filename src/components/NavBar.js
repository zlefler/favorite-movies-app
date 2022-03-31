import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="nav-title">Movie Database</h1>
      <NavLink
        className="navlink"
        to="/"
        exact
        activeStyle={{
          color: 'darkblue',
        }}
      >
        Home
      </NavLink>
      <NavLink
        className="navlink"
        to="/list"
        exact
        activeStyle={{
          color: 'darkblue',
        }}
      >
        Movies
      </NavLink>
      <NavLink
        className="navlink"
        to="/form"
        exact
        activeStyle={{
          color: 'darkblue',
        }}
      >
        Add
      </NavLink>
    </div>
  );
}

export default NavBar;
