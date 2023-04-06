import React, { useState, useEffect } from "react";
import axios from "axios";

export const NewsAPI = (props) => {
  const [newsData, setNewsData] = useState([]);

  const search = async (query) => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q='+query +'&apiKey=483983670ab745b0b7f4dd3079fe46f2',
       );
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.query) {
      search(props.query);
    }
  }, [props.query]);

  return (
    <div>
      <ul>
        {newsData.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.source.name}</p>
            <a href={article.url}>{article.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsAPI;
