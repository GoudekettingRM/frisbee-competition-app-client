import React, { Component } from "react";
import { connect } from "react-redux";
import Location from "./Location";
import { getOneCompetition } from "../../store/competition/actions";
import { addGame } from "../../store/game/actions";
import { headerSpacing } from "../../styles";

class AddGame extends Component {
  state = {
    homeTeamId: 0,
    awayTeamId: 0,
    location: "",
    lat: null,
    lng: null,
    competitionDayId: 0,
    competitionId: 0,
    startTime: "",
    changeLocation: false
  };

  componentDidMount = async () => {
    const competitionId = parseInt(this.props.match.params.competitionId);
    if (!Object.keys(this.props.competition).length) {
      await this.props.getOneCompetition(competitionId);
    }
    const competitionDayIdInitialValue =
      this.props.competition.competitionDays.length > 1
        ? 0
        : this.props.competition.competitionDays[0].id;

    this.setState({
      competitionDayId: competitionDayIdInitialValue,
      competitionId
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  allFilledIn = state => {
    for (var key in state) if (!state[key]) return false;
    return true;
  };

  onSubmit = event => {
    event.preventDefault();
    const { changeLocation, ...dataFields } = this.state;
    if (!this.allFilledIn(dataFields)) {
      alert("You have to fill in all fields before you can create a game.");
      return null;
    }
    console.log("Let's create the game!");
    this.props.addGame(dataFields, this.props.token);
    this.props.history.goBack();
  };

  handleLocationSelect = (address, coordinates) => {
    this.setState({
      ...this.state,
      location: address,
      lat: coordinates.lat,
      lng: coordinates.lng,
      changeLocation: false
    });
  };

  toggleChangeLocation = () => {
    this.setState({
      ...this.state,
      changeLocation: !this.state.changeLocation
    });
  };

  renderLocation = () => {
    if (this.state.location && this.state.changeLocation) {
      return (
        <div>
          <span>Selected location: {this.state.location}</span>
          <label>Select new location:</label>
          <Location handleSelection={this.handleLocationSelect} />
        </div>
      );
    } else if (this.state.location && !this.state.changeLocation) {
      return (
        <div>
          <span>Selected location: {this.state.location}</span>
          <button type="button" onClick={this.toggleChangeLocation}>
            Change location
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <label>Select location:</label>
          <Location handleSelection={this.handleLocationSelect} />
        </div>
      );
    }
  };

  renderHomeSelectOptions = () => {
    return this.props.teams.map(team => (
      <option key={team.id} value={team.id}>
        {team.name}
      </option>
    ));
  };

  renderAwaySelectOption = () => {
    const homeTeamId = parseInt(this.state.homeTeamId);
    return this.props.teams
      .filter(team => team.id !== homeTeamId)
      .map(team => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ));
  };

  renderCompetitionDaysSelectOption = () => {
    const competitionDays = this.props.competition.competitionDays;
    if (competitionDays) {
      return competitionDays.length > 1 ? (
        <select name="competitionDayId" onChange={this.onChange}>
          <option value={0}>Select Competition Day</option>
          {competitionDays.map((day, index) => (
            <option key={day.id} value={day.id}>
              Competition day {index + 1}: {day.date}
            </option>
          ))}
        </select>
      ) : (
        competitionDays.map((day, index) => {
          return (
            <p key={day.id}>
              Competition day {index + 1}: {day.date}
            </p>
          );
        })
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={headerSpacing}>
        <label htmlFor="homeTeamId">Home Team</label>
        <select name="homeTeamId" onChange={this.onChange}>
          <option value={0}>Select Home Team</option>
          {this.props.teams && this.renderHomeSelectOptions()}
        </select>
        <label htmlFor="awayTeamId">Away Team</label>
        <select name="awayTeamId" onChange={this.onChange}>
          <option value={0}>Select Away Team</option>
          {this.props.teams && this.renderAwaySelectOption()}
        </select>
        {this.renderLocation()}
        {this.renderCompetitionDaysSelectOption()}
        <label htmlFor="startTime">Start time</label>
        <input
          type="time"
          name="startTime"
          value={this.state.startTime}
          onChange={this.onChange}
        />
        <button type="submit">Create game</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt,
  teams: state.competitions.selected.teams,
  competition: state.competitions.selected
});

const mapDispatchToProps = { getOneCompetition, addGame };

export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
