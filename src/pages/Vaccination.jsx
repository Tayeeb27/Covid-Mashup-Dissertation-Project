import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";

import VaccinationAPI from "../components/VaccinationAPI";

const Vaccination = () => {
  const [selectedRegion, setSelectedRegion] = useState("UK");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <Fragment>
      <Header />
      <h3>
        On this page you will be able to see the Vaccination rates of Covid-19 and
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
        <h2>Vaccination</h2>
        <div className="box">
          <VaccinationAPI region={selectedRegion} />
        </div>
      </div>
    </Fragment>
  );
};

export default Vaccination;
