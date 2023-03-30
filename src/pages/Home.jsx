import React, { Fragment} from "react";
import Header from "../components/Header/Header";
import "./Home.css";

import {CasesAPI} from '../components/CasesAPI'
import {DeathsAPI} from '../components/DeathsAPI'
import {NewsAPI} from '../components/NewsAPI'
import {VaccinationAPI} from '../components/VaccinationAPI'
import {SearchAPI} from '../components/SearchAPI'

function Home() {
const casesChart = CasesAPI();
const deathsChart = DeathsAPI();
const NewsInfo = NewsAPI();
const vaccinationChart = VaccinationAPI();
  return (
    <Fragment>
      <Header />
      <h3>
        A web application with all the information and data you need to know
        regarding COVID-19 in the UK
      </h3>
       <div className="container" id="Home">
        <div className="box-container" id="Home">
          <h2>Deaths</h2>
          <div className="box" id="Home">
          {deathsChart}
          </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Cases</h2>
        <div className="box"id="Home">
          {casesChart}
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Vaccinations</h2>
        <div className="box"id="Home">
        {vaccinationChart}
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
          <h2>Bing Search</h2>
        <div className="box"id="HomeNews">
        <SearchAPI />

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
