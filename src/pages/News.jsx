import React, { Fragment} from "react";
import Header from "../components/Header/Header";
import "./News.css"
import {NewsAPI} from '../components/NewsAPI'

const News = () => {
  const NewsInfo = NewsAPI();

    return (
      <Fragment>
        <Header />
        <h3>On this page you will be able to see News related to Covid-19</h3>
        <div className="container">
          <h2>News</h2>
        <div className="box"> 
        {NewsInfo.map(article => (
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