import React, {Component} from 'react';
import './ItemCard.css';
import {
Card, CardText, CardBody, CardTitle, CardSubtitle,
CardImg, Button, Modal, ModalHeader, ModalBody,
ModalFooter} from 'reactstrap';
import {connect} from 'react-redux';
import EditItem from '../edit-item/EditItem';
import {updateItemById, deleteItemById} from '../../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
				isOpen: false,
				isOpenModal: false
		};

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
		};

		this.editItemRef = React.createRef();

		this.submit = this.submit.bind(this);
	}

	submit(event) {
			if (event.target.name === "save") {

				let formData = this.editItemRef.current.getFormData();
				if (!formData.name || !formData.status || !formData.comment) return;

				this.props.updateItem(
						formData.name,
						formData.status,
						formData.comment,
						this.props.imageURL,
						this.props.id
				);
			}
			else if (event.target.name === "archive") {
				if (window.confirm("Are you sure?")) {
					this.props.deleteItem(this.props.id);
				}
				else return;
			}

			this.setState({
					isOpen: this.state.isOpen,
					isOpenModal: !this.state.isOpenModal
			});
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
    	          <Button onClick={this.submit} color="primary">Edit</Button>
    	        </CardBody>
    	      </Card>
						<Modal isOpen={this.state.isOpenModal} toggle={this.submit} className="TopnavModal" fade={false}>
								<ModalHeader toggle={this.submit}>Edit Item</ModalHeader>
								<ModalBody>
										<EditItem ref={this.editItemRef}
				                      id={this.props._id}
				                      name={this.props.name}
				                      status={this.props.status}
				                      imageURL={this.props.imageURL}
				                      comment={this.props.comment}/>
								</ModalBody>
								<ModalFooter>
										<Button color="primary"
														name="save"
														disabled={false}
														onClick={this.submit}>
															Save
										</Button>{' '}
										<Button color="danger"
														name="archive"
														disabled={false}
														onClick={this.submit}>
															Delete
										</Button>{' '}
										<Button color="secondary" name="cancel" onClick={this.submit}>Cancel</Button>
								</ModalFooter>
						</Modal>
    	    </div>
    );
  }
}

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    updateItem: (name, status, comment, imageURL, id) => dispatch(updateItemById(name, status, comment, imageURL, id)),
		deleteItem: (id) => dispatch(deleteItemById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
