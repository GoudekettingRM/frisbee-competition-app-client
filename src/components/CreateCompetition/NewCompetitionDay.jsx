import React, { Component } from "react";

export default class NewCompetitionDay extends Component {
  state = {
    value: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.handleChange(this.props.id, event.target.value);
  };

  render() {
    return (
      <input
        type="date"
        name="value"
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}
