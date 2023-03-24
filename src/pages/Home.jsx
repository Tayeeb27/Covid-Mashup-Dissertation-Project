import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./Home.css";
import Chart from "chart.js/auto";


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
        'filters=areaType=overview;' +
        'structure={"date":"date","newDeaths":"cumDeathsByPublishDate"}'
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
          data: data.map((item) => item.cumDeathsByPublishDate),
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



  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://api.goperigon.com/v1/all?apiKey=7c42de41-0a54-45f2-a954-5b9a30e9eb11&from=2023-03-23&country=gb&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid%20News&excludeLabel=Roundup&excludeLabel=Press%20Release&sortBy=date&topic=Coronavirus')
      .then(response => response.json())
      .then(data => setNewsData(data.articles));
  }, []);

  return (
    <Fragment>
      <Header />
      <h3>
        A web application with all the information and data you need to know
        regarding COVID-19 in the UK
      </h3>
       <div className="container" id="HomeDeath">
        <div className="box-container" id="HomeDeath">
          <h2>Deaths</h2>
          <div className="box" id="HomeDeath">
          <canvas id="uk-deaths-chart"></canvas>
          </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Cases</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Recovery Rates</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container" id="HomeNews">
          <h2>News</h2>
          <div className="box" id="HomeNews">
            <ul className="home-news-list">
              {newsData.map(article => (
                <li key={article.id}>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <p>{article.sourceName}</p>
                  <p>{article.url}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
         <div className="box-container"id="Home">
          <h2>NHS</h2>
        <div className="box">
        </div>
        </div>
        <div className="box-container"id="Home">
          <h2>Laws</h2>
        <div className="box">
        </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default Home;
