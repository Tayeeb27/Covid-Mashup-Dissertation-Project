import React, { useState, useEffect } from "react";

export const NewsAPI = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://api.goperigon.com/v1/all?apiKey=7c42de41-0a54-45f2-a954-5b9a30e9eb11&from=2023-03-23&country=gb&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid%20News&excludeLabel=Roundup&excludeLabel=Press%20Release&sortBy=date&topic=Coronavirus')
      .then(response => response.json())
      .then(data => setNewsData(data.articles));
  }, []);

    return (
      newsData
       
    );
  };
  
  export default NewsAPI;