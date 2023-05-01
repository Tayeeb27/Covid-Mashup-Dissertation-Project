import React, { useState } from "react";
import Header from "../components/Header/Header";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  // Define state variables for name, email, subject, and message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create an object containing the form data
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    try {
      // Send a POST request to the server with the form data
      const response = await axios.post(
        "http://localhost:8080/send-email",
        data
      );
      // Display a success message and reset the form
      window.alert("Email sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <div className="intro">
  <h2>We Value Your Feedback</h2>
  <p>
    Your feedback is essential for the continuous improvement of our project. We believe that understanding the needs and experiences of our users plays a crucial role in creating a better, more user-friendly application. If you have any suggestions, questions, or concerns, please don't hesitate to get in touch with us.
  </p>
  <p>
    By sharing your thoughts and ideas, you're actively contributing to the development and success of this project. Thank you for your support and for helping us make this application the best it can be!
  </p>
</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" id="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Contact;
