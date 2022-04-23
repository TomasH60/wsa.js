import React from "react";
import "./Header.css";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderLogo"></div>
      <div className="HeaderItemContainer">
        <HeaderItem title="Contact"/>
        <HeaderItem title="About"/>
        <HeaderItem title="GitHub"/>
      </div>
    </header>
  );
};

export default Header;
