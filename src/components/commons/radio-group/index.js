import React, { Component } from 'react';

class RadioGroup extends Component {

  handleWeekdayChange = (event) => {
    this.props.changeValue(this.props.name, event.target.value);
  }

  render() {
  
    return (
      <fieldset onChange={this.handleWeekdayChange}>
        <span>{this.props.label}</span>
        <label><input type="radio" name={this.props.name} value="masculino" checked={this.props.value === 'masculino'} />Masculino</label>
        <label><input type="radio" name={this.props.name} value="feminino" checked={this.props.value === 'feminino'} />Feminino</label>
      </fieldset>
    );
  }
}

export default RadioGroup;
