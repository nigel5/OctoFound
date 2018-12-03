import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
  }

  toggleModal() {
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

  render() {
    return (
      <div className="Topnav">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">OctoFound</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
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
        <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal} className="TopnavModal">
          <ModalHeader toggle={this.toggleModal}>Add new lost item</ModalHeader>
          <ModalBody>
            Add new item form
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Topnav
