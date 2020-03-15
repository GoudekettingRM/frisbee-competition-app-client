import Fab from "@material-ui/core/Fab";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserRole } from "../../helper-files/rbac-helpers";
import { getTeam } from "../../store/team/actions";
import { headerSpacing } from "../../styles";
import Can from "../Can";
import { RegisteredPlayers } from "./RegisteredPlayers";
import { withStyles } from "@material-ui/core";
import { updateUser, addUserToTeamAction } from "../../store/user/actions";

const styles = theme => ({
  fab: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
});

class TeamDetails extends Component {
  componentDidMount = () => {
    const {
      team,
      getTeam,
      match: {
        params: { teamId }
      }
    } = this.props;
    if (!Object.keys(team).length) {
      getTeam(teamId);
    }
  };

  joinTeam = async () => {
    console.log("Joining team");

    const {
      user: { team: userTeam },
      team,
      updateUser,
      addUserToTeamAction
    } = this.props;

    const message = userTeam
      ? `You are currently a registered player of ${userTeam.name}. By joining ${team.name}, you will be removed from ${userTeam.name}.`
      : `Are you sure you want to join ${team.name}`;

    if (window.confirm(message)) {
      await updateUser({ teamId: team.id });
      await addUserToTeamAction(this.props.user);
    } else {
      return null;
    }
  };

  render() {
    const { team, user, classes } = this.props;
    if (!Object.keys(team).length) {
      return <div style={headerSpacing}>Loading ...</div>;
    }
    console.log("team test", team);

    return (
      <div style={headerSpacing}>
        <div>
          <Can
            roleId={getUserRole(user)}
            perform="teams:update-join"
            yes={() => (
              <Fab
                variant="extended"
                color="primary"
                className={classes.fab}
                onClick={this.joinTeam}>
                <PersonAddIcon className={classes.icon} />
                Join team
              </Fab>
            )}
          />
        </div>
        <div>{team.users && <RegisteredPlayers players={team.users} />}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team,
  user: state.session.user
});

const mapDispatchToProps = { getTeam, updateUser, addUserToTeamAction };

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TeamDetails)
);
