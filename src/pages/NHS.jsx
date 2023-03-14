import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import "./NHS.css";

const Home = () => {
    return (
      <Fragment>
        <Header />
        <h3>A Shortcut to the NHS website to the relevant information you might need </h3>
        <div className="container" id="NHS">
        <div className="box-container" id="NHS">
          <h2>Covid Pass</h2>
        <div className="box"> 
        </div>
        </div>
        <div className="box-container" id="NHS">
          <h2>Covid Test</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container" id="NHS">
          <h2>Covid Vaccine</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container" id="NHS">
          <h2>Symptoms</h2>
        <div className="box">
        </div>
        </div>
          
        
      </div>
      </Fragment>
    );
  };
  
  export default Home;