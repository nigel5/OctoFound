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
        <Switch>
            <Route exact path="/home" component={GridView}></Route>
            <Route exact path="/detail" component={DetailedView}></Route>
        </Switch>
      </div>
    );
  }
}

export default MainView;
