import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeam } from "../../store/team/actions";

class TeamDetails extends Component {
  componentDidMount = () => {
    if (!Object.keys(this.props.team).length) {
      const teamId = this.props.match.params.teamId;
      this.props.getTeam(teamId);
    }
  };

  render() {
    return (
      <div>
        <div> Team Information</div>
        <div>Player's list</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ team: state.team });

const mapDispatchToProps = { getTeam };

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails);
