import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddItem extends Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="nameInput" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="email" name="text" id="nameInput" placeholder="Name of item" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="selectStatus" sm={2}>Select Status</Label>
                    <Col sm={10}>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple >
                            <option>Lost</option>
                            <option>Returned</option>
                            <option>Donated</option>
                            <option>Auctioned</option>
                            <option>Archived</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="descriptionBox" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="descriptionBox" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="fileSelector" sm={2}>Image</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="imageFile" />
                        <FormText color="muted">
                            Select an image to be displayed for this item
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="checkbox2" sm={2}>Checkbox</Label>
                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Check me out
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}