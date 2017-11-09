import React, { Component } from 'react';

class Text extends Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input type="text" name={this.props.name} onChange={this.handleChange}/>
      </label>
    );
  }
}

export default Text;
