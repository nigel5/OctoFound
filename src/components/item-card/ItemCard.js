import React, { Component } from 'react';
import './ItemCard.css';
import { Card, CardText, CardBody,
	  CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemCard extends Component {
  render() {
    return (
    	    <div>
    	      <Card>
    	        <CardBody>
    	          <CardTitle>{this.props.name}</CardTitle>
    	          <CardSubtitle>{this.props.comments}</CardSubtitle>
    	        </CardBody>
    	        <img width="100%" src={this.props.imageURL} alt="Item image" />
    	        <CardBody>
    	          <CardText></CardText>
    	          <Button color="primary">More Info</Button>
    	        </CardBody>
    	      </Card>
    	    </div>
    );
  }
}

export default ItemCard;
