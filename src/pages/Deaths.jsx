import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import "./Deaths.css";
import DeathsAPI from "../components/DeathsAPI";

const Deaths = () => {
  const [selectedRegion, setSelectedRegion] = useState("UK");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <Fragment>
      <Header />
      <h3>
        On this page you will be able to see the death rates of Covid-19 and
        through the dropdown where it says Region, you can change the graph to
        specify the region
      </h3>
      <div className="container">
        <label htmlFor="region">Region:</label>
        <select id="region" value={selectedRegion} onChange={handleRegionChange}>
          <option value="UK">UK</option>
          <option value="Wales">Wales</option>
          <option value="England">England</option>
          <option value="Scotland">Scotland</option>
          <option value="Northern Ireland">Northern Ireland</option>
        </select>
        <h2>Deaths</h2>
        <div className="box">
          <DeathsAPI region={selectedRegion} />
        </div>
      </div>
    </Fragment>
  );
};

export default Deaths;
