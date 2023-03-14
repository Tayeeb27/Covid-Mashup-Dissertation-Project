import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import "./RR.css"
const RR = () => {
    return (
      <Fragment>
        <Header />
        <h3>On this page you will be able to see the Recovery Rates of Covid-19 and through the dropdown where it says Region, you can change the graph to specify the region</h3>
        <li className="dropdown" id="region">
              <a href="#" id="region">Regions </a> 
              <div className="dropdown-content" id="region">
                <a href="UK">UK</a>
                <a href="Wales">Wales</a>
                <a href="England">England</a>
                <a href="Scotland">Scotland</a>
                <a href="Northern Ireland">Northern Ireland</a>
              </div>
        </li>
        <div className="container">
          <h2>Recovery Rates</h2>
        <div className="box"> 
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default RR;