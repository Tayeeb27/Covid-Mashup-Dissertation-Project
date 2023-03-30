import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const SearchAPI =()=> {
  const [results, setResults] = useState([]);

  const search = async () => {
    try {
      const response = await axios.get(
        `https://api.bing.microsoft.com/v7.0/search?q=coronavirus`,
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
    search();
  }, []);
  return (
    <div>
      
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url}>{result.name}</a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAPI;
