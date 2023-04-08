const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const SibApiV3Sdk = require('sib-api-v3-sdk');

const config = new Configuration({
  apiKey: "sk-2yby0adrLKDtKVxYMtEST3BlbkFJeVVXwpWS9rnBajx1adlZ",
});

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ChatGPT endpoint
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

// Sendinblue endpoint
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = message;
  sendSmtpEmail.sender = {name: name, email: email};
  sendSmtpEmail.to = [{email: 'tayeeb27@hotmail.com'}]; // Replace with the recipient email address

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully:', response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
