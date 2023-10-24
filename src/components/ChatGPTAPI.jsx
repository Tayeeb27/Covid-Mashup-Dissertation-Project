import React, { useState, useEffect } from "react";
import axios from "axios";

export const ChatgptAPI =()=> {
  // Initialize state variables for the prompt and response
  const [prompt, setPrompt] = useState("What is COVID-19?");
  const [response, setResponse] = useState("");

  // Define the API endpoint for the Chatbot API
  const HTTP = "http://localhost:3000/chat";

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the Chatbot API with the prompt as the payload
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        // Update the response state with the response from the API
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    // Clear the prompt state
    setPrompt("");
  };

  // Handle changes to the prompt input field
  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  // Send an initial request to the Chatbot API when the component mounts
  useEffect(() => {
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        // Update the response state with the response from the API
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // Render the chatbot UI
    <div className="container" id="ChatGPT">
      <form className="form" onSubmit={handleSubmit} id="ChatGPT">
        <div className="form-group" id="ChatGPT">
          <input
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>
      </form>
      <div>
        <p id="ChatGPT">
          {response ? response : "Ask me anything about COVID-19..."}
        </p>
      </div>
    </div>
  );
}

export default ChatgptAPI;
