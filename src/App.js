import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MainView from './components/main-view/MainView'
import Topnav from './components/topnav/Topnav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topnav />
        <Container>
          <MainView />
        </Container>
      </div>
    );
  }
}

export default App;
