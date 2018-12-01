import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DetailedView from '../detailed-view/DetailedView';
import GridView from '../grid-view/GridView';
import './MainView.css';
import ItemCard from '../item-card/ItemCard.js';
class MainView extends Component {
  constructor(props) {
    super(props)

    this.test = this.test.bind(this)
  }
  test() {
    console.log("Button pressed")

  }
  render() {
    return (
      <div className="MainView">
        MAINVIEW COMPONENT
        <button onClick={this.test}>Test</button>
            <Route exact path="/home" component={GridView}></Route>
            <Route exact path="/details" component={DetailedView}></Route>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
      </div>
      
    );
  }
}

export default MainView;
