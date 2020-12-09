import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateSongForm extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      artist: '',
      album: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <h4>Create Song</h4>
        <Form onSubmit={(e) => this.props.addSong(e, this.state)}>
          <Label>Title:</Label>
          <Form.Input type='text' name='title' value={this.state.name} onChange={this.handleChange}/>
          <Label>Artist:</Label>
          <Form.Input type='text' name='artist' value={this.state.owner} onChange={this.handleChange}/>
          <Label>Album:</Label>
          <Form.Input type='text' name='album' value={this.state.breed} onChange={this.handleChange}/>
          <Button type='Submit'>Create Song</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateSongForm;