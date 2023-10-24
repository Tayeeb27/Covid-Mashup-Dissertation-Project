const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config()

// Set up OpenAI API configuration
const config = new Configuration({
apiKey: process.env.API_KEY_OA,
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
apiKey.apiKey = process.env.API_KEY_SB;

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

// Set up port to listen to incoming requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
console.log(`Server is running on port: ${PORT}`);
});