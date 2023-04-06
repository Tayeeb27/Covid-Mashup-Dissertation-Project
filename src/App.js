import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Deaths from './pages/Deaths';
import Cases from './pages/Cases';
import Vaccination from './pages/Vaccination';
import News from './pages/News';
import BingSearch from './pages/BingSearch';
import ChatGPT from './pages/ChatGPT';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/deaths" component={Deaths} />
        <Route path="/cases" component={Cases} />
        <Route path="/vaccination" component={Vaccination} />
        <Route path="/news" component={News} />
        <Route path="/bingsearch" component={BingSearch} />
        <Route path="/chatgpt" component={ChatGPT} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
