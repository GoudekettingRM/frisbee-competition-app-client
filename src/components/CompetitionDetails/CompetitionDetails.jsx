import React, { Component } from "react";
import { connect } from "react-redux";
import CompetitionDayCard from "./CompetitionDayCard";
import AddTeamForm from "./AddTeamForm";
import Can from "../Can";
import { Link } from "react-router-dom";
import { getOneCompetition } from "../../store/competition/actions";

class CompetitionDetails extends Component {
  state = {
    showForm: false
  };

  componentDidMount = () => {
    console.log("In comp did mount of com details", this.props);

    if (!Object.keys(this.props.competition).length) {
      const competitionId = this.props.match.params.id;
      this.props.getOneCompetition(competitionId);
    }
  };

  toggleForm = () => {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  };

  renderCompetitionDetails = () => {
    const {
      name,
      startDate,
      endDate,
      teamRegistrationDeadline,
      seedingDeadline,
      playersListDeadline
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
      </div>
    );
  };

  renderForm = () => {
    const { showForm } = this.state;
    const { organisation } = this.props.user;
    const { id } = this.props.competition;
    return (
      <div>
        {!showForm && (
          <button onClick={this.toggleForm}>Register a team!</button>
        )}
        {showForm && (
          <AddTeamForm
            toggleForm={this.toggleForm}
            competitionId={id}
            organisationId={organisation.id}
          />
        )}
      </div>
    );
  };

  render() {
    const { competitionDays, teams } = this.props.competition;
    const { organisation } = this.props.user;
    const userRoleId = organisation
      ? organisation.roleId
      : this.props.user.roleId;
    const organisationId = organisation ? organisation.id : 0;

    return (
      <div>
        {this.renderCompetitionDetails()}
        <div>
          {competitionDays &&
            competitionDays.map((day, index) => (
              <CompetitionDayCard day={day} id={index + 1} key={index + 1} />
            ))}
        </div>
        <Can
          roleId={userRoleId}
          perform="teams:create"
          data={{
            organisationId,
            competitionOrganisationId: this.props.competition.organisationId
          }}
          yes={() => this.renderForm()}
          no={() => null}
        />
        <div>
          <h3>Teams registered:</h3>
          {teams && teams.map(team => <p key={team.id}>{team.name}</p>)}
        </div>
        <Link to="/create-game">Add game</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  competition: state.competitions.selected,
  user: state.session.user
});

const mapDispatchToProps = {
  getOneCompetition
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionDetails);
