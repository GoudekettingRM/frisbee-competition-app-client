import React, { Component } from "react";
import { connect } from "react-redux";
import Location from "./Location";

class AddGame extends Component {
  state = {
    homeTeam: 0,
    awayTeam: 0,
    address: "",
    coordinates: {
      lat: null,
      lng: null
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLocationSelect = (address, coordinates) => {
    this.setState({
      ...this.state,
      address,
      coordinates
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
    console.log("render of add game component state test:", this.state);

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
        <label htmlFor="location">Selected Location:</label>
        <span>
          <em>{this.state.address}</em>
        </span>
        <Location handleSelection={this.handleLocationSelect} />
      </form>
    );
  }
}

const mapStateToProps = state => ({ teams: state.competitions.selected.teams });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
