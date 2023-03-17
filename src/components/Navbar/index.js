import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/courses' activeStyle>
            Events
          </NavLink>
          <NavLink to='/teams' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/login' activeStyle>
            go here
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;