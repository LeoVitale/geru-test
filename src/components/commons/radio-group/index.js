import React, { Component } from 'react';

class RadioGroup extends Component {

  handleWeekdayChange = (event) => {
    this.props.changeValue(this.props.name, event.target.value);
  }

  render() {

    return (
      <fieldset className="field-genre" onChange={this.handleWeekdayChange}>
        <span className="label">{this.props.label}</span>
        <label><input type="radio" name={this.props.name} value="masculino" checked={this.props.value === 'masculino'} /></label>
        <label><input type="radio" name={this.props.name} value="feminino" checked={this.props.value === 'feminino'} /></label>
      </fieldset>
    );
  }
}

export default RadioGroup;
