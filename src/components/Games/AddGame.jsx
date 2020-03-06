import React, { Component } from "react";
import { connect } from "react-redux";

class AddGame extends Component {
  state = {
    homeTeam: 0,
    awayTeam: 0
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  renderHomeSelectOptions = () => {
    return this.props.teams.map(team => (
      <option key={team.id} value={team.id}>
        {team.name}
      </option>
    ));
  };

  renderAwaySelectOption = () => {
    const homeTeamId = parseInt(this.state.homeTeam);
    return this.props.teams
      .filter(team => team.id !== homeTeamId)
      .map(team => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ));
  };
  render() {
    console.log("render of add game");

    return (
      <form>
        <label htmlFor="homeTeam">Home Team</label>
        <select name="homeTeam" onChange={this.onChange}>
          <option value={0}>Select Home Team</option>
          {this.props.teams && this.renderHomeSelectOptions()}
        </select>
        <label htmlFor="awayTeam">Away Team</label>
        <select name="awayTeam" onChange={this.onChange}>
          <option value={0}>Select Away Team</option>
          {this.props.teams && this.renderAwaySelectOption()}
        </select>
      </form>
    );
  }
}

const mapStateToProps = state => ({ teams: state.competitions.selected.teams });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
