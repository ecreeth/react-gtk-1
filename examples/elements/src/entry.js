import React, { Component, createRef } from 'react';
import { render, Entry } from '@react-gtk/binding';

class Example extends Component {
  constructor(props) {
    super(props);
    this.entry = createRef();
    console.log(this.entry)
  }

  render() {
    return <Entry ref={this.entry}>Hello</Entry>;
  }
}

render(<Example />, 'Entry');
