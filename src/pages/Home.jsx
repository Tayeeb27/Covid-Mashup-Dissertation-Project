import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import { CasesAPI } from '../components/CasesAPI';
import { DeathsAPI } from '../components/DeathsAPI';
import { NewsAPI } from '../components/NewsAPI';
import { VaccinationAPI } from '../components/VaccinationAPI';
import { ScholarSearchAPI } from '../components/ScholarSearchAPI';
import { ChatgptAPI } from '../components/ChatgptAPI';

function Home() {
  // State variables for selected region, search query
  const [selectedRegion, setSelectedRegion] = useState("UK");
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
 
  // Function to handle region selection
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  // Function to handle search bar query
  const handleSearch = () => {
    if (query.trim() === "") {
      setSearchQuery("COVID-19"||"Coronavirus");
    } else {
      setSearchQuery(query);
    }
  };

  // useEffect hook to handle initial search bar query
  useEffect(() => {
    handleSearch();
  }, []);

  // Main component rendering HTML and other components
  
  return (
    <Fragment>
      <Header />
      <h3>
      The COVID MASHUP PROJECT is an essential resource for staying informed and making informed decisions. This comprehensive and dynamic web application provides real-time data and cutting-edge analytics on the COVID-19 pandemic in the United Kingdom. 
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
        <p>With the convenient dropdown feature, you have the ability to easily select the specific region for which you wish to view COVID-19 statistics</p>
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
            <p id="Search"> Searches conducted through the search bar will be displayed in both the news section and the Scholar Search box, providing you with a comprehensive and diverse range of results. Whether you are looking for the latest news updates or seeking more in-depth information, this feature ensures that you have access to a broad spectrum of resources to meet your needs.</p>
        </div>
        <div className="container" id="Home2">
        <div className="box-container" id="Home">
          <h2>News</h2>
          <div className="box" id="HomeNews">
            <NewsAPI query={searchQuery}/>
          </div>
        </div>    
        <div className="box-container" id="Home">
          <h2>Scholar Search</h2>
          <div className="box" id="HomeNews">
           {/*<ScholarSearchAPI query={searchQuery} />*/}
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>ChatGPT</h2>
          <div className="box"id="HomeNews">
          <ChatgptAPI/>
          </div>
        </div>
        
        </div>
    <Footer/>
    </Fragment>
  );
}

export default Home;
