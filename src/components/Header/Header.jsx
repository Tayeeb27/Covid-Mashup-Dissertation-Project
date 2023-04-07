import React from 'react';
import "./Header.css";
function Banner() {
    return (
      <div className="banner">
        <div className="title">COVID Mashup Project</div>
        <div className="navigation">
          <ul>
            <li><a href="Home">Home</a></li>
            <li className="dropdown">
              <a href="#">Sections</a>
              <div className="dropdown-content">
                <a href="Deaths">Deaths</a>
                <a href="Cases">Cases</a>
                <a href="Vaccination">Vaccination</a>
                <a href="News">News</a>
                <a href="BingSearch">BingSearch</a>
                <a href="ChatGPT">ChatGPT</a>
              </div>
            </li>
            <li><a href="Contact">Contact</a></li>
            <li><a href="About">About</a></li>
            
          </ul>
        </div>
      </div>
    );
  }
  
  export default Banner;