const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Set up OpenAI API configuration
const config = new Configuration({
apiKey: "sk-2yby0adrLKDtKVxYMtEST3BlbkFJeVVXwpWS9rnBajx1adlZ",
});

// Create an instance of OpenAI API
const openai = new OpenAIApi(config);

// Set up an instance of Express
const app = express();

// Use necessary middleware
app.use(bodyParser.json());
app.use(cors());

// ChatGPT endpoint
app.post("/chat", async (req, res) => {
let { prompt } = req.body;

// If prompt is not provided, use "What is COVID-19?" as the default prompt
if (!prompt) {
prompt = "What is COVID-19?";
}

// Send prompt to OpenAI API to get response
const completion = await openai.createCompletion({
model: "text-davinci-003",
max_tokens: 512,
temperature: 0,
prompt: prompt,
});
res.send(completion.data.choices[0].text);
});

// Sendinblue endpoint
// Set API key for Sendinblue
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

// Set up endpoint to send email using Sendinblue API
app.post('/send-email', async (req, res) => {
const { name, email, subject, message } = req.body;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
sendSmtpEmail.subject = subject;
sendSmtpEmail.htmlContent = message;
sendSmtpEmail.sender = {name: name, email: email};
sendSmtpEmail.to = [{email: 'tayeeb27@hotmail.com'}]; 

try {
const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
console.log('Email sent successfully:', response);
res.status(200).send('Email sent successfully');
} catch (error) {
console.error('Error sending email:', error);
res.status(500).send('Error sending email');
}
});

// Twitter API endpoint
app.get("/tweets", async (req, res) => {
    const query = req.query.q;
  
    if (!query) {
      res.status(400).send("Please provide a search query");
      return;
    }
  
    try {
      const response = await axios.get(
        "https://twitter135.p.rapidapi.com/Search/",
        {
          params: {
            q: query,
            count: 5,
          },
          headers: {
            "X-RapidAPI-Key": "6783ceb69amshc90cde7ec62a81cp1cda7ajsnd959dbaa7d0f",
            "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
          },
        }
      );
      res.send(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving tweets");
    }
  });

// Set up port to listen to incoming requests
// Set up port to listen to incoming requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});