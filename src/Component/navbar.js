import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";


function Example(args) {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <div className='navbar'>
      <div className='text'>
        <h1>Product site</h1>
      </div>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navlinks">
        <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(!openMenu)}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Example;