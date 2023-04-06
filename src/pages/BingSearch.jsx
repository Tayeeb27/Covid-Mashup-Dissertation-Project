import React, { useState } from 'react';
import axios from 'axios';

function BingSearch() {
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

  return (
    <div>
      <button onClick={search}>Search</button>
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

export default BingSearch;
