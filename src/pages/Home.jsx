import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import "./Home.css";

const Home = () => {
    return (
      <Fragment>
        <Header />
        <h3>A web application with all the information and data you need to know regarding COVID-19 in the UK </h3>
        <div className="container"id="Home">
        <div className="box-container"id="Home">
          <h2>Deaths</h2>
        <div className="box"> 
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Cases</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Recovery Rates</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>News</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>NHS</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Laws</h2>
        <div className="box">
        </div>
        </div>
      </div>
      </Fragment>
    );
  };
  
  export default Home;