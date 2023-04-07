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
    
    <div className="container container-sm p-1">
      {" "}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>{" "}
         {/* <button className="btn btn-accept w-100" type="submit">
          Go
        </button> */}
      </form>
      <div className="bg-darkGreen  mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
    
  );
}
export default ChatGPTAPI;