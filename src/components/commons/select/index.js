import React, { Component } from 'react';

class Select extends Component {

  handleChange = (event) => {
    this.props.changeValue(this.props.name, event.target.value);
  }

  render() {
    const error = this.props.error ? 'form-error' : '';
    return (
      <label>
        <span className="label">{this.props.label}</span>
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
      </label>
    );
  }
}

export default Select;
