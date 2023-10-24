import React, { Fragment, useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Home.css";
import { CasesAPI } from '../components/CasesAPI';
import { DeathsAPI } from '../components/DeathsAPI';
import { NewsAPI } from '../components/NewsAPI';
import { VaccinationAPI } from '../components/VaccinationAPI';
import { ScholarSearchAPI } from '../components/ScholarSearchAPI';
import { ChatGPTAPI } from '../components/ChatGPTAPI';

const Home = () => {
  const tooltipRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !tooltipRefs.current.includes(el)) {
      tooltipRefs.current.push(el);
    }
  };

  const [selectedRegion, setSelectedRegion] = useState("UK");
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearch = () => {
    const queryLowercase = query.toLowerCase(); // Convert the query to lowercase to ignore case sensitivity
  
    if (queryLowercase.trim() === "") {
      setSearchQuery("COVID-19" || "Coronavirus");
    } else if (/covid|coronavirus/i.test(queryLowercase)) { // Only allow COVID-related queries
      setSearchQuery(queryLowercase);
    } else {
      alert("Please enter a COVID-related query. Note: query must include covid or coronavirus");
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Fragment>
      <Header />
      <h3>
        The COVID MASHUP PROJECT is an essential resource for staying informed and making informed decisions. This comprehensive and dynamic web application provides real-time data and cutting-edge analytics on the COVID-19 pandemic in the United Kingdom.
      </h3>
      <div className="container">
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="UK">UK</option>
          <option value="Wales">Wales</option>
          <option value="England">England</option>
          <option value="Scotland">Scotland</option>
          <option value="Northern Ireland">Northern Ireland</option>
        </select>
        <p>With the convenient dropdown feature, you have the ability to easily select the specific region for which you wish to view COVID-19 statistics</p>
      </div>
      <div className="container" id="Home1">
        <div className="box-container" id="Home">
          <h2>Deaths
          <span className="info-icon" onMouseEnter={(e) => handleMouseEnter(e, 0)} onMouseLeave={() => handleMouseLeave(0)}>
          ⓘ
          <span ref={addToRefs} className="tooltip">This is the number of deaths by the date shown and region chosen</span>
        </span>
          </h2>
          <div className="box" id="Home">
          <DeathsAPI region={selectedRegion}/>
          </div>
        </div>
        <div className="box-container" id="Home">
          <h2>Cases
            <span className="info-icon" onMouseEnter={(e) => handleMouseEnter(e, 1)} onMouseLeave={() => handleMouseLeave(1)}>
          ⓘ
          <span ref={addToRefs} className="tooltip">This is the number of cases by the date shown and region chosen. </span>
        </span></h2>
          <div className="box" id="Home">
          <CasesAPI region={selectedRegion}/>
          </div>
        </div>
        

        <div className="box-container" id="Home">
  <h2>Vaccinations
    <span className="info-icon" onMouseEnter={(e) => handleMouseEnter(e, 2)} onMouseLeave={() => handleMouseLeave(2)}>
      ⓘ
      <span ref={addToRefs} className="tooltip">This is the number of vaccinations by the date shown and region chosen.</span>
    </span>
  </h2>
  <div className="box" id="Home">
    <VaccinationAPI region={selectedRegion} />
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
    <h2>News
      <span className="info-icon" onMouseEnter={(e) => handleMouseEnter(e, 3)} onMouseLeave={() => handleMouseLeave(3)}>
        ⓘ
        <span ref={addToRefs} className="tooltip">Here you will see the latest and most-reliable news regarding covid or your search query</span>
      </span>
    </h2>
    <div className="box" id="HomeNews">
      <NewsAPI query={searchQuery} />
    </div>
  </div>
  <div className="box-container" id="Home">
    <h2>Scholar Search
      <span className="info-icon" onMouseEnter={(e) => handleMouseEnter(e, 4)} onMouseLeave={() => handleMouseLeave(4)}>
        ⓘ
        <span ref={addToRefs} className="tooltip">Here you will see the latest and most-reliable Google Scholar results/articles regarding covid or your search query</span>
      </span>
    </h2>
    <div className="box" id="HomeNews">
       <ScholarSearchAPI query={searchQuery} /> 
    </div>
  </div>
  <div className="box-container" id="Home">
    <h2>
      ChatGPT
      <span className="info-icon" onMouseEnter={(e) => handleMouseEnter(e, 5)} onMouseLeave={() => handleMouseLeave(5)}>
        ⓘ
        <span ref={addToRefs} className="tooltip">Ask ChatGPT anything regarding covid. Bear in mind its knowledge is up-to-date until September 2021.</span>
      </span>
    </h2>
    <div className="box" id="HomeNews">
      <ChatGPTAPI />
    </div>
  </div>
 
</div>
<Footer />
</Fragment>
);

function handleMouseEnter(e, index) {
  const tooltip = tooltipRefs.current[index];
  const icon = e.target;
  const iconRect = icon.getBoundingClientRect();
  const screenWidth = window.innerWidth;

  const tooltipWidth = tooltip.offsetWidth;
  const spaceLeft = iconRect.left;
  const spaceRight = screenWidth - iconRect.right;

  if (spaceLeft < tooltipWidth / 2) {
    tooltip.style.left = "0";
    tooltip.style.transform = "translateX(0)";
  } else if (spaceRight < tooltipWidth / 2) {
    tooltip.style.right = "0";
    tooltip.style.left = "auto";
    tooltip.style.transform = "translateX(0)";
  } else {
    tooltip.style.left = "50%";
    tooltip.style.right = "auto";
    tooltip.style.transform = "translateX(-50%)";
  }

  tooltip.style.visibility = "visible";
  tooltip.style.opacity = "1";
}

function handleMouseLeave(index) {
  const tooltip = tooltipRefs.current[index];
  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
}

}

export default Home;
