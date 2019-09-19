import React from 'react';
import './App.css';
import ScheduleGrid from './ScheduleGrid';
import WeekView from './WeekView';


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
          <WeekView/>
          {/* <ScheduleGrid/> */}
        </div>
      </header>
    </div>
  );
}

export default App;



