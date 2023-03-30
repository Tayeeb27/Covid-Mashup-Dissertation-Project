import React, {useEffect, useState } from "react";
import axios from "axios";
import {Chart} from "chart.js";

const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data?/v1/data?filters=areaName=England;areaType=nation&'+'structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","cumPeopleVaccinatedCompleteByVaccinationDate":"cumPeopleVaccinatedCompleteByVaccinationDate"}';

export const VaccinationAPI = () => {
    const [data, setData] = useState([]);
    const [vaccinationChart, setVaccinationChart] = useState(null); // keep track of the chart instance
  
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
      const ctx = document.getElementById("covid-vaccination-chart");
      if (ctx && data && data.length > 0) {
        const labels = data.map((item) => item.date);
        const values = data.map((item) => item.cumPeopleVaccinatedCompleteByVaccinationDate);
  
        if (vaccinationChart) {
          vaccinationChart.destroy(); // destroy the old chart instance
        }
  
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
  
    return <canvas id="covid-vaccination-chart" width="400" height="400"></canvas>;
  };
  
  export default VaccinationAPI;