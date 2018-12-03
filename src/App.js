import React, { Component } from 'react';
import MainView from './components/main-view/MainView'
import Topnav from './components/topnav/Topnav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topnav />
        <MainView />
      </div>
    );
  }
}

export default App;
