import React, { useState, useEffect } from "react";
import axios from "axios";

export const ChatGPTAPI =()=> {
  const [prompt, setPrompt] = useState("What is COVID-19?");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div className="container"id="ChatGPT">
      {" "}
      <form className="form" onSubmit={handleSubmit}id="ChatGPT">
        <div className="form-group"id="ChatGPT">
          <input
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
      </form>
      <div>
        <p id="ChatGPT">
          {response ? response : "Ask me anything about COVID-19..."}
        </p>
      </div>
    </div>
    
  );
}
export default ChatGPTAPI;