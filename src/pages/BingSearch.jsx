import React, { Fragment, useEffect, useState} from "react";
import Header from "../components/Header/Header";
import "./BingSearch.css"
import {BingSearchAPI} from '../components/BingSearchAPI'

const BingSearch = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      setSearchQuery("Coronavirus");
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
        <h3>On this page you will be able to see search results related to Covid-19 and through the search bar you will be able to search COVID related queries</h3>
        <div className="container">
          <h2>BingSearch</h2>
          <div className="box-container" id="Search">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            </div>
        <div className="box"> 
        <BingSearchAPI query={searchQuery}/>
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default BingSearch;