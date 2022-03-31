import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar navbar-expand-med navbar-light bg-light">
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
        to="/form"
        exact
        activeStyle={{
          color: 'darkblue',
        }}
      >
        Add
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
    </div>
  );
}

export default NavBar;
