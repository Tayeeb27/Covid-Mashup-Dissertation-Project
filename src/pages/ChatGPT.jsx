import React, { Fragment} from "react";
import Header from "../components/Header/Header";
import "./ChatGPT.css"
import {ChatGPTAPI} from '../components/ChatGPTAPI'

const ChatGPT = () => {
 
    return (
      <Fragment>
        <Header />
        <h3>On this page you will be able to ask ChatGPT anything you wish to know about COVID-19</h3>
        <div className="container">
          <h2>News</h2>
        <div className="box"> 
        <ChatGPTAPI/>
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default ChatGPT;