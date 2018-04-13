
import React, { Component } from 'react';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="appBlock">
          <Sidebar />
          <MainContent />
        </div>
      </Router>
    );
  }
}

export default App;
  