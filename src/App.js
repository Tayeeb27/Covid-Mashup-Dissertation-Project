import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Deaths from './pages/Deaths';
import Cases from './pages/Cases';
import RecoveryRates from './pages/RR';
import News from './pages/News';
import NHS from './pages/NHS';
import Laws from './pages/Laws';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/deaths" component={Deaths} />
        <Route path="/cases" component={Cases} />
        <Route path="/recovery-rates" component={RecoveryRates} />
        <Route path="/news" component={News} />
        <Route path="/nhs" component={NHS} />
        <Route path="/laws" component={Laws} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
