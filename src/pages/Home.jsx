import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./Home.css";

import { CasesAPI } from '../components/CasesAPI';
import { DeathsAPI } from '../components/DeathsAPI';
import { NewsAPI } from '../components/NewsAPI';
import { VaccinationAPI } from '../components/VaccinationAPI';
import { SearchAPI } from '../components/SearchAPI';
import { ChatGPTAPI } from '../components/ChatGPTAPI';
function Home() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      setSearchQuery("Coronavirus");
    } else {
      setSearchQuery(query);
    }
  };

  const casesChart = CasesAPI();
  const deathsChart = DeathsAPI();
  const vaccinationChart = VaccinationAPI();
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <Fragment>
      <Header />
      <h3>
        A web application with all the information and data you need to know
        regarding COVID-19 in the UK
      </h3>
      <div className="container" id="Home1">
        <div className="box-container" id="Home">
          <h2>Deaths</h2>
          <div className="box" id="Home">
            {deathsChart}
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Cases</h2>
          <div className="box" id="Home">
            {casesChart}
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Vaccinations</h2>
          <div className="box" id="Home">
            {vaccinationChart}
          </div>
        </div>
        </div>
        
        <div className="box-container" id="Search">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            </div>
        <div className="container" id="Home2">
        <div className="box-container" id="Home">
          <h2>News</h2>
          <div className="box" id="HomeNews">
            <NewsAPI query={searchQuery}/>
          </div>
        </div>
        
        <div className="box-container" id="Home">
          <h2>BingSearch</h2>
          <div className="box" id="HomeNews">
            <SearchAPI query={searchQuery} />
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Chatgpt</h2>
          <div className="box">
          <ChatGPTAPI/>
          </div>
        </div>
        </div>

    </Fragment>
  );
}

export default Home;
