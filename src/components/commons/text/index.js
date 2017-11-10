import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

class Text extends Component {

  handleChange = (event) => {
    this.props.changeValue(this.props.name, event.target.value);
  }

  render() {
    const error = this.props.error ? 'form-error' : '';
    return (
      <label>
        <span className="label">{this.props.label}</span>
        <MaskedInput
          mask={this.props.mask}
          type="text"
          name={this.props.name}
          onChange={this.handleChange}
          value={this.props.value}
          placeholderChar=" "
          className={error}/>
      </label>
    );
  }
}

export default Text;
