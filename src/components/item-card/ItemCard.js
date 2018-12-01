import React, { Component } from 'react';
import './ItemCard.css';

class ItemCard extends Component {
  constructor(props) {
    this.state = {
      name: String,
      comments: String,
      imageUrl: String,
      status: Number,
      keywords: []
    }

  }

  
  render() {
    return (
      <div className="ItemCard">
        Item Card
      </div>
    );
  }
}

export default ItemCard;
