import React, {useEffect, useState } from "react";
import axios from "axios";
import {Chart} from "chart.js";

export const CasesAPI = ({region}) => {
  // Define state variables
  const [data, setData] = useState([]);
  const [casesChart, setCasesChart] = useState(null); // keep track of the chart instance
  const [lastModified, setLastModified] = useState(null);
// Fetch data from API
useEffect(() => {
  const fetchData = async () => {
    try {
      let endpoint = "";
      if (region === "UK") {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://covid19.who.int/WHO-COVID-19-global-data.csv';
        const response = await axios.get(proxyUrl + targetUrl);
        const parsedData = parseWHOData(response.data, 'GB');
        setData(parsedData.reverse());
        setLastModified(response.headers["last-modified"]);
      } else {
        endpoint =
          "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=" +
          region +
          "&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22}";
        const response = await axios.get(endpoint);
        setData(response.data.data);
        setLastModified(response.headers["last-modified"]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, [region]);

// Function to parse WHO data
const parseWHOData = (csvData, countryCode) => {
  const rows = csvData.split('\n');
  const parsedData = rows
    .map(row => row.split(','))
    .filter(row => row[1] === countryCode)
    .map(row => ({ date: row[0], newCasesByPublishDate: Number(row[4]) }));
  return parsedData.reverse();
};

// Render COVID-19 cases chart when data changes using Chart.js
useEffect(() => {
  const ctx = document.getElementById("covid-cases-chart");
  if (ctx && data && data.length > 0) {
    // Define labels and values for chart
      const labels = data.map((item) => item.date);
      const values = data.map((item) => item.newCasesByPublishDate);

      // Destroy the old chart instance before rendering a new one
      if (casesChart) {
          casesChart.destroy();
      }

      // Render new chart instance
      setCasesChart(
          new Chart(ctx, {
              type: "line",
              data: {
                  labels: labels,
                  datasets: [
                      {
                          label: "Confirmed Cases",
                          data: values,
                          backgroundColor: "rgba(54, 162, 235, 0.2)",
                          borderColor: "#020C43",
                          borderWidth: 1,
                      },
                  ],
              },
              options: {
                  scales: {
                      yAxes: [
                          {
                              ticks: {
                                  beginAtZero: true,
                              },
                          },
                      ],
                  },
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const casesLabel = "Cases: " + tooltipItem.yLabel;
                  const lastModifiedLabel = "Last Modified: " + lastModified;
                  return [casesLabel, lastModifiedLabel];
                  },
              },
            },
              },
          })
      );
  }
}, [data, lastModified]);

// Return a canvas element for rendering the chart
 return (
      <div>
        <canvas id="covid-cases-chart" width="400" height="300"></canvas>
        {lastModified && (
          <p>Last modified: {new Date(lastModified).toLocaleString()}</p>
        )}
      </div>
    );

  };
  
  export default CasesAPI;