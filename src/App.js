import React from 'react';
import './App.css';
import WeekView from './WeekView';
import { Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          TKC Free Trial Class Sign-Up
        </h2>
        <div className = "textGen">
          <p className="textBlurb">
            We always work around our families’ schedules. If any of these recommended times don’t work for you OR for holiday hours, please call (630) 708-3132.
          </p>
          <Router basename = "">
          <div>
            <Route exact path="/" render = {(props) => <WeekView {...props} version ={"adults"}/>} />
            <Route path="/j" render = {(props) => <WeekView {...props} version ={"adults"}/>} />
            <Route path="/k" render = {(props) => <WeekView {...props} version ={"kids"}/>}  />
          </div>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;



