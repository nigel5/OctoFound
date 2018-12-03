import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './ItemCard.css';
import { Card, CardText, CardBody,
	  CardTitle, CardSubtitle, Button } from 'reactstrap';
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
    	          <CardTitle>{this.props.name}</CardTitle>
    	          <CardSubtitle>{this.props.comments}</CardSubtitle>
    	        </CardBody>
    	        <img width="100%" src={this.props.imageURL} alt="Card image cap" />
    	        <CardBody>
    	          <CardText></CardText>
    	          <Button color="primary">More Info</Button>



    	        </CardBody>
    	      </Card>
    	    </div>
    );
  }
}

// ItemCard.propTypes = {
//   name: PropTypes.string,
//   name: PropTypes.string,
//   status:  PropTypes.string,
//   imageURL: PropTypes.string,
//   comments: PropTypes.strng,
//   dateAdded: Date.now(),
//   id: String
// }

const mapStateToProps = state => ({
  items: state.items
})

export default ItemCard;
