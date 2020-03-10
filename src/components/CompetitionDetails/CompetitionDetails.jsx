import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import Fab from "@material-ui/core/Fab";
import CompetitionDayCard from "./CompetitionDayCard";
import AddTeamForm from "./AddTeamForm";
import Can from "../Can";
import { getOneCompetition } from "../../store/competition/actions";
import { headerSpacing, fabPositioning } from "../../styles";
import GameCard from "../GameDetails/GameCard";

class CompetitionDetails extends Component {
  state = {
    showForm: false,
    redirect: null
  };

  componentDidMount = () => {
    if (!Object.keys(this.props.competition).length) {
      this.props.getOneCompetition(this.props.match.params.competitionId);
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
    const organisationId = organisation
      ? organisation.id
      : this.props.user.roleId;
    return (
      <div>
        {!showForm && (
          <button onClick={this.toggleForm}>Register a team!</button>
        )}
        {showForm && (
          <AddTeamForm
            toggleForm={this.toggleForm}
            competitionId={id}
            organisationId={organisationId}
          />
        )}
      </div>
    );
  };

  render() {
    const { competitionDays, teams, games } = this.props.competition;
    const { organisation } = this.props.user;
    const userRoleId = organisation
      ? organisation.roleId
      : this.props.user.roleId;
    const organisationId = organisation ? organisation.id : 0;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div style={headerSpacing}>
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
        <Can
          roleId={userRoleId}
          perform="games:create"
          yes={() => (
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              style={fabPositioning}>
              <PlaylistAdd
                onClick={() =>
                  this.setState({
                    redirect: `/competitions/${this.props.match.params.competitionId}/create-game`
                  })
                }
              />
            </Fab>
          )}
          no={() => null}
        />
        <div>
          <h3>Games:</h3>
          {games &&
            teams &&
            games.map(game => (
              <GameCard data={game} teams={teams} key={game.id} />
            ))}
        </div>
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
