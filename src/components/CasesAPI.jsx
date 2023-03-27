import React, {useEffect, useState } from "react";
import axios from "axios";
import {Chart} from "chart.js";

const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data?/v1/data?filters=areaName=England;areaType=nation&'+'structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}';

export const CasesAPI = () => {
    const [data, setData] = useState([]);
    const [casesChart, setCasesChart] = useState(null); // keep track of the chart instance
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(endpoint);
          setData(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  
    useEffect(() => {
      const ctx = document.getElementById("covid-cases-chart");
      if (ctx && data && data.length > 0) {
        const labels = data.map((item) => item.date);
        const values = data.map((item) => item.newCasesByPublishDate);
  
        if (casesChart) {
          casesChart.destroy(); // destroy the old chart instance
        }
  
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
                  borderColor: "rgba(54, 162, 235, 1)",
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
  
    return <canvas id="covid-cases-chart" width="400" height="400"></canvas>;
  };
  
  export default CasesAPI;