import React, { Component } from 'react';
import MainView from './components/main-view/MainView';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.js';
class App extends Component {
  render() {
    return (
    <div>
    	<Sidebar />
        <MainView />
     </div>
     
    );
  }
}

export default App;
