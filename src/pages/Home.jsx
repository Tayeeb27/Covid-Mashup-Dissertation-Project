import React, { Fragment} from "react";
import Header from "../components/Header/Header";
import "./Home.css";

import {CasesAPI} from '../components/CasesAPI'
import {DeathsAPI} from '../components/DeathsAPI'
import {NewsAPI} from '../components/NewsAPI'

function Home() {
const casesChart = CasesAPI();
const deathsChart = DeathsAPI();
const NewsInfo = NewsAPI();

  return (
    <Fragment>
      <Header />
      <h3>
        A web application with all the information and data you need to know
        regarding COVID-19 in the UK
      </h3>
       <div className="container" id="HomeDeath">
        <div className="box-container" id="HomeDeath">
          <h2>Deaths</h2>
          <div className="box" id="HomeDeath">
          {deathsChart}
          </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Cases</h2>
        <div className="box">
          {casesChart}
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Recovery Rates</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container" id="HomeNews">
          <h2>News</h2>
          <div className="box" id="HomeNews">
            <ul className="home-news-list">
            {NewsInfo.map(article => (
                <li key={article.id}>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <p>{article.sourceName}</p>
                </li>
              ))}
              
            </ul>
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
