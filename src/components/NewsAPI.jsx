import React, { useState, useEffect } from "react";
import axios from "axios";

export const NewsAPI = (props) => {
  const [newsData, setNewsData] = useState([]);

  // Function to perform news search with API call
  const search = async (query) => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=${query}&searchIn=title&language=en&sortby=publishedAt&sources=bbc-news,cnn,"+
        "independent,the-washington-post,bloomberg,politico,abc-news,nbc-news,cbs-news,time,google-news-uk,mtv-news-uk,the-lad-bible,associated-press,reuters&apiKey=483983670ab745b0b7f4dd3079fe46f2"
      );
      setNewsData(response.data.articles); // Save response data to newsData state variable
    } catch (error) {
      console.log(error);
    }
  };

  // Run search when the query prop changes
  useEffect(() => {
    if (props.query) {
      search(props.query);
    }
  }, [props.query]);

  // Render list of news articles
  return (
    <div>
      <ul>
        {newsData.map((article) => (
          <li key={article.id} id="News">
            <div>
              <h3 id="News">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="News"
                >
                  {article.title}
                </a>
              </h3>
              <p id="News">{article.source.name}</p>
              <p id="News">{article.content}</p>
              <p id="News">{article.author}</p>
              <p id="News">{article.publishedAt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsAPI;
