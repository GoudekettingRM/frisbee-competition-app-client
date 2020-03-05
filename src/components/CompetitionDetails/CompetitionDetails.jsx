import React, { Component } from "react";
import { connect } from "react-redux";
import CompetitionDayCard from "./CompetitionDayCard";

class CompetitionDetails extends Component {
  state = {
    showForm: false,
    name: ""
  };

  toggleForm = () => {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
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
      this.props.user.organisation.id,
      "competition id:",
      this.props.competition.id
    );
  };

  render() {
    const {
      name,
      startDate,
      endDate,
      teamRegistrationDeadline,
      seedingDeadline,
      playersListDeadline,
      competitionDays
    } = this.props.competition;
    const { showForm } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <div>
          <p>Starts: {startDate}</p>
          <p>Ends: {endDate}</p>
          <p>Team Registration Deadline: {teamRegistrationDeadline}</p>
          <p>Seeding Deadline: {seedingDeadline}</p>
          <p>Players List Deadline: {playersListDeadline}</p>
        </div>
        <div>
          {competitionDays &&
            competitionDays.map((day, index) => (
              <CompetitionDayCard day={day} id={index + 1} key={index + 1} />
            ))}
        </div>
        {this.props.user.organisation && !showForm && (
          <button onClick={this.toggleForm}>
            Register a team for this competition!
          </button>
        )}
        {showForm && (
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
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  competition: state.competitions.selected,
  user: state.session.user
});

export default connect(mapStateToProps)(CompetitionDetails);
