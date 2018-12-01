import React, { Component } from 'react';
import MainView from './components/main-view/MainView';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        APP COMPONENT
        <Sidebar />
        <MainView />
      </div>
    );
  }
}

export default App;
