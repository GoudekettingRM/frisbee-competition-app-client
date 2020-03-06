import React, { Component } from "react";
import { connect } from "react-redux";
import CompetitionDayCard from "./CompetitionDayCard";
import AddTeamForm from "./AddTeamForm";

class CompetitionDetails extends Component {
  state = {
    showForm: false
  };

  toggleForm = () => {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  };

  render() {
    const {
      name,
      startDate,
      endDate,
      teamRegistrationDeadline,
      seedingDeadline,
      playersListDeadline,
      competitionDays,
      id,
      teams
    } = this.props.competition;
    const { showForm } = this.state;
    const { organisation } = this.props.user;
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
        <div>
          {organisation && name && !showForm && (
            <div>
              <h2>Want to play in this competition</h2>
              <button onClick={this.toggleForm}>Register a team!</button>
            </div>
          )}
          {showForm && (
            <AddTeamForm
              toggleForm={this.toggleForm}
              competitionId={id}
              organisationId={organisation.id}
            />
          )}
          <div>
            <h3>Teams registered:</h3>
            {teams && teams.map(team => <p>{team.name}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  competition: state.competitions.selected,
  user: state.session.user
});

export default connect(mapStateToProps)(CompetitionDetails);
