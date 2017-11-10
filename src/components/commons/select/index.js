import React, { Component } from 'react';

class Select extends Component {

  handleChange = (event) => {
    this.props.changeValue(this.props.name, event.target.value);
  }

  render() {
    const error = this.props.error ? 'form-error' : '';
    return (
      <label>
        <select name={this.props.name} onChange={this.handleChange} className={error}>
          {
            this.props.items.map(item => {
              return (
                <option key={`item_${item.value}`} value={item.value}>
                  {item.label}
                </option>
              );
            })
          }
        </select>
        <span className="label">{this.props.label}</span>
      </label>
    );
  }
}

export default Select;
