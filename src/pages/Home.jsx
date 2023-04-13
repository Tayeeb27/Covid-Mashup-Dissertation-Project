import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./Home.css";
import { CasesAPI } from '../components/CasesAPI';
import { DeathsAPI } from '../components/DeathsAPI';
import { NewsAPI } from '../components/NewsAPI';
import { VaccinationAPI } from '../components/VaccinationAPI';
import { BingSearchAPI } from '../components/BingSearchAPI';
import { ChatgptAPI } from '../components/ChatgptAPI';
function Home() {
  const [selectedRegion, setSelectedRegion] = useState("UK");
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

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
      <div className="container">
        <label htmlFor="region">Region:</label>
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="UK" >UK</option>
          <option value="Wales">Wales</option>
          <option value="England">England</option>
          <option value="Scotland">Scotland</option>
          <option value="Northern Ireland">Northern Ireland</option>
        </select>
        <p>Using the dropdown you can specify the region you wish to see statistics on</p>
      </div>
      <div className="container" id="Home1">
        <div className="box-container" id="Home">
          <h2>Deaths</h2>
          <div className="box" id="Home">
          <DeathsAPI region={selectedRegion}/>
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Cases</h2>
          <div className="box" id="Home">
          <CasesAPI region={selectedRegion}/>
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Vaccinations</h2>
          <div className="box" id="Home">
          <VaccinationAPI region={selectedRegion}/>
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
          <ChatgptAPI/>
          </div>
        </div>
        </div>

    </Fragment>
  );
}

export default Home;
