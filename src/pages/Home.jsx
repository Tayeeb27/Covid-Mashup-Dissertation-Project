import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./Home.css";

import { CasesAPI } from '../components/CasesAPI';
import { DeathsAPI } from '../components/DeathsAPI';
import { NewsAPI } from '../components/NewsAPI';
import { VaccinationAPI } from '../components/VaccinationAPI';
import { BingSearchAPI } from '../components/BingSearchAPI';
import { ChatGPTAPI } from '../components/ChatGPTAPI';
function Home() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      setSearchQuery("COVID-19"||"Coronavirus");
    } else {
      setSearchQuery(query);
    }
  };

 
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
          <DeathsAPI region={'UK'}/>
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Cases</h2>
          <div className="box" id="Home">
          <CasesAPI region={'UK'}/>
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Vaccinations</h2>
          <div className="box" id="Home">
          <VaccinationAPI region={'UK'}/>
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
            <p id="Search"> Any queries made in the search will display in the news and Bing Search box</p>
        </div>
        <div className="container" id="Home2">
        <div className="box-container" id="Home">
          <h2>News</h2>
          <div className="box" id="HomeNews">
            <NewsAPI query={searchQuery}/>
          </div>
        </div>
        
        <div className="box-container" id="Home">
          <h2>Bing Search</h2>
          <div className="box" id="HomeNews">
            <BingSearchAPI query={searchQuery} />
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>ChatGPT</h2>
          <div className="box"id="HomeNews">
          <ChatGPTAPI/>
          </div>
        </div>
        </div>

    </Fragment>
  );
}

export default Home;
