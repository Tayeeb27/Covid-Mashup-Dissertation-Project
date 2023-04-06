const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "sk-2yby0adrLKDtKVxYMtEST3BlbkFJeVVXwpWS9rnBajx1adlZ",
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  let { prompt } = req.body;

  // If prompt is not provided, use "What is COVID-19?" as the default prompt
  if (!prompt) {
    prompt = "What is COVID-19?";
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//run node server.js