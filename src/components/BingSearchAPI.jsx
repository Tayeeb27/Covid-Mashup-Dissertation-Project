import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const BingSearchAPI = (props) => {
  const [results, setResults] = useState([]);

  const search = async (query) => {
    try {
      const response = await axios.get(
        `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': 'f0a619da5de24b5c8075784c7c650655'
          }
        }
      );

      setResults(response.data.webPages.value);
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
        {results.map((result) => (
          <li key={result.id}id="News">
            <h3 id="News"><a href={result.url} target="_blank" rel="noopener noreferrer" id="News">{result.name}</a></h3>
            <p id="News">{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BingSearchAPI;
