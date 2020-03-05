import React, { Component } from "react";
import { connect } from "react-redux";

class CompetitionDetails extends Component {
  render() {
    console.log("Render of competition details: ", this.props.competition);
    const {
      name,
      startDate,
      endDate,
      teamRegistrationDeadline,
      seedingDeadline,
      playersListDeadline,
      competitionDays
    } = this.props.competition;

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
          {competitionDays && competitionDays.map(day => <div>Hi!</div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ competition: state.competitions.selected });

export default connect(mapStateToProps)(CompetitionDetails);
