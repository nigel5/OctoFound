import React, {Component} from 'react';
import './ItemCard.css';
import {
Card, CardText, CardBody, CardTitle, CardSubtitle,
CardImg, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemCard extends Component {
	constructor(props) {
		super(props);

		switch (this.props.status) {
			case "lost":
				this.statusTextColor = "#FF0000";
				break;
			case "returned":
				this.statusTextColor = "#008000";
				break;
			case "deleted":
				this.statusTextColor = "#000000";
				break;
			case "auctioned":
				this.statusTextColor = "#A52A2A";
				break;
			case "donated":
				this.statusTextColor = "#800080";
				break;
			default:
				this.statusTextColor = "#000000";
		}
	}
	
  render() {
    return (
    	    <div className="ItemCard">
    	      <Card>
							<CardImg top src={this.props.imageURL} alt="Item image"/>
    	        <CardBody>
    	          <CardTitle>{this.props.name}</CardTitle>
    	          <CardSubtitle style={{color: this.statusTextColor}}>
									{this.props.status}
								</CardSubtitle>
    	          <CardText>{this.props.comment}</CardText>
    	          <Button color="primary">More Info</Button>
    	        </CardBody>
    	      </Card>
    	    </div>
    );
  }
}

export default ItemCard;
