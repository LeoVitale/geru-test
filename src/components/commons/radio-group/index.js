import React, { Component } from 'react';

class RadioGroup extends Component {
  state = {
    value: ''
  }
  handleWeekdayChange = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    const {value} = this.state;
    return (
      <fieldset onChange={this.handleWeekdayChange}>
        <label><input type="radio" name="sexo-option" value="masculino" checked={value === 'masculino'} />Masculino</label>
        <label><input type="radio" name="sexo-option" value="feminino" checked={value === 'feminino'} />Feminino</label>
      </fieldset>
    );
  }
}

export default RadioGroup;
