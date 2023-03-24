import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./Deaths.css"
import Chart from "chart.js/auto";

const Deaths = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
        'filters=areaType=overview;' +
        'structure={"date":"date","newDeaths":"newDeathsByDeathDate"}'
        );
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const chartData = {
      labels: data.map((item) => item.date),
      datasets: [
        {
          label: "UK Deaths",
          data: data.map((item) => item.newDeathsByDeathDate),
          borderColor: "rgb(255, 99, 132)",
          fill: false,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "MMM D",
            },
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const ctx = document.getElementById("uk-deaths-chart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: chartOptions,
    });
  }, [data]);
    return (
      <Fragment>
        <Header />
        <h3>On this page you will be able to see the death rates of Covid-19 and through the dropdown where it says Region, you can change the graph to specify the region</h3>
        <li className="dropdown" id="region">
              <a href="#" id="region">Regions </a> 
              <div className="dropdown-content" id="region">
                <a href="UK">UK</a>
                <a href="Wales">Wales</a>
                <a href="England">England</a>
                <a href="Scotland">Scotland</a>
                <a href="Northern Ireland">Northern Ireland</a>
              </div>
        </li>
        <div className="container">
          <h2>Deaths</h2>
        <div className="box"> 
        <canvas id="uk-deaths-chart"></canvas>
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default Deaths;