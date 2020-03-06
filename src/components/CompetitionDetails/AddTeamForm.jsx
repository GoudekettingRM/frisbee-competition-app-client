import React, { Component } from "react";
import { connect } from "react-redux";
import { addTeam } from "../../store/team/actions";

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
    const { name } = this.state;
    const { organisationId, competitionId, token } = this.props;
    console.log(
      "Form submitted. name:",
      name,
      "organisation id:",
      organisationId,
      "competition id:",
      competitionId,
      "token:",
      token
    );
    this.props.addTeam(name, organisationId, competitionId, token);
    this.props.toggleForm();
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Register a team for {this.props.selectedCompetition.name}</h2>
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

const mapStateToProps = state => ({
  token: state.session.jwt,
  selectedCompetition: state.competitions.selected
});

const mapDispatchToProps = { addTeam };

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
