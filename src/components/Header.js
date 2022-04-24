import React from "react";
import "./Header.css";
import HeaderItem from "./HeaderItem";
import Logo from "../svg/logo.svg";
const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderLogo">
        <img src={Logo} alt="React Logo" style={{height: '80%'}} />
      </div>
      <div className="HeaderItemContainer">
        <HeaderItem title="Contact" />
        <HeaderItem title="About" />
        <HeaderItem title="GitHub" />
      </div>
    </header>
  );
};

export default Header;
