import React, { Component } from "react";
import { connect } from "react-redux";

class AddTeamForm extends Component {
  state = {
    name: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(
      "Form submitted. name:",
      this.state.name,
      "organisation id:",
      this.props.organisationId,
      "competition id:",
      this.props.competitionId
    );
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Register a team</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter team name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <button type="submit">Register</button>
        <button
          type="button"
          onClick={() => {
            this.props.toggleForm();
            this.setState({
              name: ""
            });
          }}>
          Cancel
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
