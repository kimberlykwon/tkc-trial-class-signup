import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KidsApp from './KidsApp';
import * as serviceWorker from './serviceWorker';
import { Route, Link, HashRouter, BrowserRouter as Router } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
  <Router >
    <div>
      <Route path="/" exact component={App} />
      <Route path="/j" component={App} />
      <Route path="/k" component={KidsApp} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
