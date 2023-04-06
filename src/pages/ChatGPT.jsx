import React, { Fragment} from "react";
import Header from "../components/Header/Header";
import "./ChatGPT.css"
import {ChatgptAPI} from '../components/ChatGPTAPI'

const ChatGPT = () => {
 

    return (
      <Fragment>
        <Header />
        <h3>On this page you will be able to see News related to Covid-19</h3>
        <div className="container">
          <h2>News</h2>
        <div className="box"> 
        <ChatgptAPI/>
        </div>
        </div>
      </Fragment>
    );
  };
  
  export default ChatGPT;