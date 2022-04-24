import React from "react";
import "./Section1.css";
import Header from "./Header";
import Background from "./Background";
import Card from "./Card";

const Section1 = () => {
  return (
    <div className="MainDiv">
      <Header />
      <div className="Content">
        <div className="Text">
          <h1>Welcome to wsa.js</h1>
          <p>We are a team of broke mfs lookin for work</p>
        </div>
        <p>Scroll down to learn more</p>
      </div>
      <Background />
    </div>
  );
};

export default Section1;
