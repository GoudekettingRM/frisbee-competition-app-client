import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisteredPlayers } from "./RegisteredPlayers";
import { getTeam } from "../../store/team/actions";
import { headerSpacing } from "../../styles";

class TeamDetails extends Component {
  componentDidMount = () => {
    if (!Object.keys(this.props.team).length) {
      const teamId = this.props.match.params.teamId;
      this.props.getTeam(teamId);
    }
  };

  render() {
    if (!Object.keys(this.props.team).length) {
      return <div style={headerSpacing}>Loading ...</div>;
    }
    const { users } = this.props.team;
    return (
      <div style={headerSpacing}>
        <div>Team Information</div>
        {users && <RegisteredPlayers players={users} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ team: state.team });

const mapDispatchToProps = { getTeam };

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails);
