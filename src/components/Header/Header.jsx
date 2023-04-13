import React from 'react';
import "./Header.css";
import logo from "./Logo.png";
function Banner() {
    return (
      <div className="banner">
        <div className="logo">
        <img src={logo} alt="COVID Mashup Project" />
      </div>
        <div className="navigation">
          <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="Contact">Contact</a></li>
            <li><a href="About">About</a></li>
            
          </ul>
        </div>
      </div>
    );
  }
  
  export default Banner;