import React, { Component } from "react";
import { connect } from "react-redux";
import Location from "./Location";
import { getOneCompetition } from "../../store/competition/actions";

class AddGame extends Component {
  state = {
    homeTeam: 0,
    awayTeam: 0,
    location: "",
    lat: null,
    lng: null,
    competitionDayId: 0
  };

  componentDidMount = async () => {
    if (!Object.keys(this.props.competition).length) {
      await this.props.getOneCompetition(this.props.match.params.competitionId);
    }
    const competitionDayIdInitialValue =
      this.props.competition.competitionDays.length > 1
        ? 0
        : this.props.competition.competitionDays[0].id;

    this.setState({ competitionDayId: competitionDayIdInitialValue });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLocationSelect = (address, coordinates) => {
    this.setState({
      ...this.state,
      location: address,
      lat: coordinates.lat,
      lng: coordinates.lng
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

  renderCompetitionDaysSelectOption = () => {
    const competitionDays = this.props.competition.competitionDays;
    if (competitionDays) {
      return competitionDays.length > 1 ? (
        <select name="competitionDay" onChange={this.onChange}>
          <option value={0}>Select Competition Day</option>
          {competitionDays.map((day, index) => (
            <option key={day.id} value={day.id}>
              Day {index + 1}: {day.date}
            </option>
          ))}
        </select>
      ) : (
        competitionDays.map((day, index) => {
          return (
            <select
              name="competitionDayId"
              key={day.id}
              defaultValue={day.id}
              onChange={this.onChange}>
              <option value={day.id}>
                Day {index + 1}: {day.date}
              </option>
            </select>
          );
        })
      );
    } else {
      return null;
    }
  };

  render() {
    console.log("render of add game state", this.state);

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
        {this.renderCompetitionDaysSelectOption()}
        {/* and add start time */}
        <Location handleSelection={this.handleLocationSelect} />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.competitions.selected.teams,
  competition: state.competitions.selected
});

const mapDispatchToProps = { getOneCompetition };

export default connect(mapStateToProps, mapDispatchToProps)(AddGame);
