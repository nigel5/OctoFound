import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions/index';
import AddItem from '../add-item/AddItem';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Collapse, Button, Modal,
    ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import './Topnav.css'

class Topnav extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isOpen: false,
            isOpenModal: false
        };

        this.addItemRef = React.createRef();

        this.submit = this.submit.bind(this);
    }

    toggleModal(event) {
        if (event.target.name === "submit") {
          this.submit();
        }
        this.setState({
            isOpen: this.state.isOpen,
            isOpenModal: !this.state.isOpenModal
        })
    }

    toggleNav() {
        this.setState({
            isOpen: !this.state.isOpen,
            isOpenModal: this.state.isOpenModal
        });
    }

    submit() {
      let formData = this.addItemRef.current.getFormData();
      if (!formData.name || !formData.status || !formData.comment) return;
      this.props.addNewItem(
        formData.name,
        formData.status,
        formData.comment,
        formData.imageURL
      )
    }

    render() {
        return (
            <div className="Topnav">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">OctoFound</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button style={{"marginRight": "1em"}} onClick={this.toggleModal} color="danger">
                                    + Add item
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button href="/help" color="info">
                                    ? Help
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal} className="TopnavModal" fade={false}>
                    <ModalHeader toggle={this.toggleModal}>Add new lost item</ModalHeader>
                    <ModalBody>
                        <AddItem ref={this.addItemRef}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                name="submit"
                                onClick={this.toggleModal}
                                disabled={false}>
                                  Submit
                        </Button>{' '}
                        <Button color="secondary" name="cancel" onClick={this.toggleModal}>Cancel</Button>
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
    addNewItem: (name, status, comment, imageURL) => dispatch(addItem(name, status, comment, imageURL))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topnav);
