import React, { Component } from 'react';
import './itemCard.css';
import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle, Button, CardLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemCard extends Component {
  constructor(props) {
	  super(props)
  }

  
  render() {
    return (
    	    <div>
    	      <Card>
    	        <CardBody>
    	          <CardTitle>Card title</CardTitle>
    	          <CardSubtitle>Card subtitle</CardSubtitle>
    	        </CardBody>
    	        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    	        <CardBody>
    	          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    	          <Button color="primary">More Info</Button>

    	          
    	        </CardBody>
    	      </Card>
    	    </div>
    );
  }
}

export default ItemCard;
