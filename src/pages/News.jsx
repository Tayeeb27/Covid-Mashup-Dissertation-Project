import React, { Fragment, useEffect, useState} from "react";
import Header from "../components/Header/Header";
import "./News.css"
import {NewsAPI} from '../components/NewsAPI'

const News = () => {
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
        <h3>On this page you will be able to see News related to Covid-19 and through the search bar you will be able to search COVID related articles</h3>
        <div className="container">
          <h2>News</h2>
        <div className="container" id="Search">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
         </div>
        <div className="box"> 
        <NewsAPI query={searchQuery}/>
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default News;