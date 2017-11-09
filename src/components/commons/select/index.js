import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <label>
        {this.props.label}
        <select name={this.props.name}>
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
