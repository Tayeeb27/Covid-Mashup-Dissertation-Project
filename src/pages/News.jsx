import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./News.css"
const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://api.goperigon.com/v1/all?apiKey=7c42de41-0a54-45f2-a954-5b9a30e9eb11&from=2023-03-23&country=gb&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid%20News&excludeLabel=Roundup&excludeLabel=Press%20Release&sortBy=date&topic=Coronavirus')
      .then(response => response.json())
      .then(data => setNewsData(data.articles));
  }, []);

    return (
      <Fragment>
        <Header />
        <h3>On this page you will be able to see News related to Covid-19</h3>
        <div className="container">
          <h2>News</h2>
        <div className="box"> 
        {newsData.map(article => (
                <li key={article.id}>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <p>{article.sourceName}</p>
                </li>
              ))}
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default News;