import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERP_API_URL = 'https://cors-anywhere.herokuapp.com/https://serpapi.com/search';
const API_KEY = '9f83af91ba286ff1311eeb74ef106297f24e61837b67c356d241593d7112bae9'; 

export const ScholarSearchAPI = (props) => {
  const [results, setResults] = useState([]);

  // function to perform search on SERP API for Google Scholar
  const search = async (query) => {
    try {
      const response = await axios.get(`${SERP_API_URL}?api_key=${API_KEY}&engine=google_scholar&q=${query}`);
      setResults(response.data.organic_results);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect hook to run the search function whenever the search query prop changes
  useEffect(() => {
    if (props.query) {
      search(props.query);
    }
  }, [props.query]);

  // render the search results
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.position} id="News">
            <h3 id="News">
              <a href={result.link} target="_blank" rel="noopener noreferrer" id="News">
                {result.title}
              </a>
            </h3>
            <p id="News">{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScholarSearchAPI;
