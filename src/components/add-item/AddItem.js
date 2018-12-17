import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddItem extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: '',
        status: 'lost',
        comment: '',
        imageURL: ''
      }

      this.handleChange = this.handleChange.bind(this);
    }

    getFormData() {
      return {
        ...this.state
      };
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="nameInput" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="nameInput" placeholder="Name of item"
                               value={this.state.name}
                                 onChange={this.handleChange}
                                 invalid={!this.state.name}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="selectStatus" sm={2}>Select Status</Label>
                    <Col sm={10}>
                        <Input type="select" name="status" id="statusSelector"
                               value={this.state.status}
                               onChange={this.handleChange}>
                            <option>Lost</option>
                            <option>Returned</option>
                            <option>Donated</option>
                            <option>Auctioned</option>
                            <option>Archived</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="commentBox" sm={2}>Description{'\u00A0'}</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="comment" id="commentBox"
                               value={this.state.comment}
                               onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="fileSelector" sm={2}>Image</Label>
                    <Col sm={10}>
                        <Input type="file" name="imageURL" id="imageFilePicker"
                               value={this.state.imageURL}
                               onChange={this.handleChange}/>
                        <FormText color="muted">
                            Select an image to be displayed for this item
                        </FormText>
                    </Col>
                </FormGroup>
                {
                // <FormGroup row>
                //     <Label for="checkbox2" sm={2}>Checkbox</Label>
                //     <Col sm={{ size: 10 }}>
                //         <FormGroup check>
                //             <Label check>
                //                 <Input type="checkbox" id="checkbox2" />{' '}
                //                 Check me out
                //             </Label>
                //         </FormGroup>
                //     </Col>
                // </FormGroup>
                }
            </Form>
        );
    }
}
