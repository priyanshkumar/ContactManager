import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
