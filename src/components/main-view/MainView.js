import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailedView from '../detailed-view/DetailedView';
import GridView from '../grid-view/GridView';
import './MainView.css';

class MainView extends Component {
  render() {
    return (
      <div className="MainVIew">
        MAINVIEW COMPONENT
            <Route exact path="/home" component={GridView}></Route>
            <Route exact path="/details" component={DetailedView}></Route>
      </div>
    );
  }
}

export default MainView;
