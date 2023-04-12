import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import "./About.css";
const About = () => {
    return (
      <Fragment>
        <Header />
        <div className="container" id="About">
      <h1 id="About">About Me</h1>
      <p id="About">Hi, I'm Tayeeb Islam. I'm a final year Computer Science student at Cardiff University.
      This is my final year project, where I am building a Covid Mashup application that combines various Covid-related data and news sources into one convenient platform.
      My main goal for this project is to create an application that is both informative and user-friendly. I believe that having easy access to up-to-date Covid-related information is important in our current climate, and I hope that this application can help people stay informed and make informed decisions about their health and safety.
      Aside from my studies, I am also passionate about web development and programming in general. I enjoy learning about new technologies and tools and exploring new ways to create engaging and interactive web experiences.</p>
    </div>
      </Fragment>
    );
  };
  
  export default About;