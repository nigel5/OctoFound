import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../../actions/index'
import { fetchAllItems } from '../../actions/index'
import { Route, Switch } from 'react-router-dom';
import ItemCard from '../item-card/ItemCard.js';

class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemCards: []
    }
  }

  componentDidMount() {
    this.props.fetchAll().then(() => {
      let items = []
      for (var x = 0; x < this.props.items.items.length; x++) {
        this.setState({
          itemCards: this.state.itemCards.concat([
            <ItemCard key={this.props.items.items[x]._id} name={this.props.items.items[x].name} imageURL={this.props.items.items[x].imageURL} />
          ])
        })
      }
     })
  }

  render() {
    if (!this.state.itemCards.length) return null

    return (
      <div className="MainView">
        {this.state.itemCards}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(fetchAllItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
