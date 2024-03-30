import React from "react";
import { NavLink } from "react-router-dom";
import {
  Getintouchbtn,
  NavContainer,
  NavLeftContainer,
  NavRightContainer,
} from "./navbarstyle";
import logo1 from "../assets/main-logo.png";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLeftContainer>
        <img src={logo1} alt="logo1" />
      </NavLeftContainer>
      <NavRightContainer>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/solutions">
          <p>Solutions</p>
        </NavLink>
        <p>Cases</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <Getintouchbtn>Get in Touch</Getintouchbtn>
      </NavRightContainer>
    </NavContainer>
  );
};

export default Navbar;
