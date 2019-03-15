import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import WineAPI from '../api/WineAPI.js'
import { Redirect } from 'react-router';
class AddWinePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const wineObject = {
      name: event.target.elements[0].value,
      price: event.target.elements[1].value,
      varietal: event.target.elements[2].value,
      description: event.target.elements[3].value
    }
    WineAPI.addWine(wineObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="name">
            <Form.Label>Wine Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Wine Price</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="varietal">
            <Form.Label>Wine Varietal</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Wine Description</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddWinePage;