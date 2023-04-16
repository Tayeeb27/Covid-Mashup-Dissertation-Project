import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "chart.js/auto";

export const DeathsAPI = ({ region }) => {
  // Define state variables
  const [data, setData] = useState([]);
  // keep track of the chart instance
  const [deathChart, setDeathChart] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define endpoint URL based on region selected
        let endpoint = "";
        if (region === "UK") {
          endpoint =
            "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newDailyNsoDeathsByDeathDate%22:%22newDailyNsoDeathsByDeathDate%22}";
        } else {
          endpoint =
            "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=" +
            region +
            "&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newDailyNsoDeathsByDeathDate%22:%22newDailyNsoDeathsByDeathDate%22}";
        }
        // Fetch data from endpoint and set state variable
        const response = await axios.get(endpoint);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [region]);

  // Render COVID-19 cases chart when data changes using Chart.js
  useEffect(() => {
    const ctx = document.getElementById("covid-death-chart");
    if (ctx && data && data.length > 0) {
      // Define labels and values for chart
      const labels = data.map((item) => item.date);
      const values = data.map((item) => item.newDailyNsoDeathsByDeathDate);

      if (deathChart) {
        // destroy the old chart instance if it exists
        deathChart.destroy(); 
      }

      // Render new chart instance
      setDeathChart(
        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Confirmed Deaths",
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
          },
        })
      );
    }
  }, [data]);

// Return a canvas element for rendering the chart
  return <canvas id="covid-death-chart" width="400" height="300"></canvas>;
};

export default DeathsAPI;
