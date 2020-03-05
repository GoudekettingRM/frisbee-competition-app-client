import React, { Component } from "react";
import { connect } from "react-redux";
import CompetitionDayCard from "./CompetitionDayCard";

class CompetitionDetails extends Component {
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
      </div>
    );
  }
}

const mapStateToProps = state => ({ competition: state.competitions.selected });

export default connect(mapStateToProps)(CompetitionDetails);
