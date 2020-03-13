import React, { Component } from "react";
import { connect } from "react-redux";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CompetitionDayCard from "./CompetitionDayCard";
import AddTeamForm from "./AddTeamForm";
import Can from "../Can";
import { getOneCompetition } from "../../store/competition/actions";
import { headerSpacing, fabPositioning, detailsMaxWidth } from "../../styles";
import { RegisteredTeams } from "./RegisteredTeams";
import { PlannedGames } from "./PlannedGames";
import { getUserRole } from "../../helper-files/rbac-helpers";
import { CompetitionDetailsDisplay } from "./CompetitionDetailsDisplay";

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
          <Button color="primary" onClick={this.toggleForm}>
            Register a team!
          </Button>
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
    const {
      competition: { competitionDays, teams, games },
      user: { organisation },
      history,
      match: {
        params: { competitionId }
      }
    } = this.props;
    const { user, competition } = this.props;

    const organisationId = organisation ? organisation.id : 0;

    return (
      <div style={headerSpacing}>
        <CompetitionDetailsDisplay competition={competition} />
        <hr style={detailsMaxWidth} />
        <Grid container justify="center" direction="column" alignItems="center">
          {competitionDays &&
            competitionDays.map((day, index) => (
              <CompetitionDayCard day={day} id={index + 1} key={index + 1} />
            ))}
        </Grid>
        <Can
          roleId={getUserRole(user)}
          perform="teams:create"
          data={{
            organisationId,
            competitionOrganisationId: this.props.competition.organisationId
          }}
          yes={() => this.renderForm()}
        />
        {teams && (
          <RegisteredTeams
            teams={teams}
            history={history}
            competitionId={competitionId}
          />
        )}
        {games && teams && (
          <PlannedGames games={games} history={history} teams={teams} />
        )}
        <Can
          roleId={getUserRole(user)}
          perform="games:create"
          yes={() => (
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              style={fabPositioning}>
              <PlaylistAdd
                onClick={() =>
                  history.push(`/competitions/${competitionId}/create-game`)
                }
              />
            </Fab>
          )}
        />
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
