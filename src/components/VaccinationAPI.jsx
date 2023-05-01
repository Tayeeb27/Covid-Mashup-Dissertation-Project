import React, {useEffect, useState } from "react";
import axios from "axios";
import {Chart} from "chart.js";


export const VaccinationAPI = ({region}) => {
    // Define state variables
    const [data, setData] = useState([]);
    // keep track of the chart instance
    const [vaccinationChart, setVaccinationChart] = useState(null); 
    const [lastModified, setLastModified] = useState(null);
    
    // Fetch data from API
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Define endpoint URL based on region selected
          let endpoint = "";
          if (region === "UK") {
            endpoint =
              "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,"+
              "%22newVaccinesGivenByPublishDate%22:%22newVaccinesGivenByPublishDate%22}";
          } else {
            endpoint =
              "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=" +
              region +
              "&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newVaccinesGivenByPublishDate%22:%22newVaccinesGivenByPublishDate%22}";
          }
          // Fetch data from endpoint and set state variable
          const response = await axios.get(endpoint);
          setData(response.data.data);
          const lastModifiedHeader = response.headers["last-modified"];
        setLastModified(lastModifiedHeader);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [region]);
  
    // Render COVID-19 cases chart when data changes using Chart.js
    useEffect(() => {
      const ctx = document.getElementById("covid-vaccination-chart");
      if (ctx && data && data.length > 0) {
         // Define labels and values for chart
        const labels = data.map((item) => item.date);
        const values = data.map((item) => item.newVaccinesGivenByPublishDate);
  
        if (vaccinationChart) {
          // destroy the old chart instance if it exists
          vaccinationChart.destroy(); 
        }
        // Render new chart instance
        setVaccinationChart(
          new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Confirmed Vaccination",
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
                    const vaccinationLabel = "Vaccination: " + tooltipItem.yLabel;
                    const lastModifiedLabel = "Last Modified: " + lastModified;
                    return [vaccinationLabel, lastModifiedLabel];
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
        <canvas id="covid-vaccination-chart" width="400" height="300"></canvas>
        {lastModified && (
          <p>Last modified: {new Date(lastModified).toLocaleString()}</p>
        )}
      </div>
    );
  };
  
  export default VaccinationAPI;