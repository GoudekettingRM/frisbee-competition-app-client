import React, { Component } from "react";
import { connect } from "react-redux";
import NewCompetitionDay from "./NewCompetitionDay";
import { addNewCompetition } from "../../store/competition/actions";
import Can from "../Can";
import { headerSpacing } from "../../styles";

class CreateCompetition extends Component {
  state = {
    name: "",
    startDate: "",
    endDate: "",
    teamRegistrationDeadline: "",
    seedingDeadline: "",
    playersListDeadline: "",
    competitionDays: [],
    competitionDayDates: []
  };

  componentDidMount = () => {
    this.addCompetitionDayComponent();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  changeCompetitionDayDates = (index, value) => {
    const NewCompetitionDayDates = [...this.state.competitionDayDates];
    NewCompetitionDayDates[index] = value;

    this.setState({
      ...this.state,
      competitionDayDates: NewCompetitionDayDates
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const {
      startDate,
      endDate,
      teamRegistrationDeadline,
      seedingDeadline,
      playersListDeadline,
      competitionDays,
      competitionDayDates
    } = this.state;

    console.log("State in submit", this.state);

    const today = new Date();
    const month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    const day =
      today.getDay() + 1 < 10 ? "0" + (today.getDay() + 1) : today.getDay() + 1;
    const now = today.getFullYear() + "-" + month + "-" + day;

    if (
      startDate < now ||
      endDate < now ||
      teamRegistrationDeadline < now ||
      seedingDeadline < now ||
      playersListDeadline < now
    ) {
      alert(
        "All dates should be filled in and in the future. You cannot create a competition in the past."
      );
      return null;
    }

    const emptyDatePresent = competitionDayDates.reduce(
      (oneEmptyFound, currentDate) => {
        if (!oneEmptyFound && currentDate !== "") {
          return false;
        } else {
          return true;
        }
      },
      false
    );

    if (competitionDays.length) {
      if (
        !competitionDayDates.length ||
        competitionDayDates.find(date => date < now) || emptyDatePresent
      ) {
        alert(
          "All dates should be filled in and in the future. You cannot create a competition in the past."
        );
        return null;
      }
    }
    const competitionData = {
      ...this.state,
      organisationId: this.props.organisation.id
    };

    this.props.addNewCompetition(competitionData, this.props.token);
  };

  addCompetitionDayComponent = () => {
    const competitionDays = [...this.state.competitionDays];
    const competitionDayDates = [...this.state.competitionDayDates];
    this.setState({
      ...this.state,
      competitionDayDates: competitionDayDates.concat(""),
      competitionDays: competitionDays.concat(
        <NewCompetitionDay
          key={competitionDays.length}
          id={competitionDays.length}
          handleChange={this.changeCompetitionDayDates}
        />
      )
    });
  };

  renderCompetitionForm = () => {
    return (
      <form onSubmit={this.onSubmit} style={headerSpacing}>
        <h1>Create new competition</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter competition name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <label htmlFor="startDate">Start date</label>
          <input
            type="date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.onChange}
          />
          <label htmlFor="endDate">End date</label>
          <input
            type="date"
            name="endDate"
            value={this.state.endDate}
            onChange={this.onChange}
          />
          <label htmlFor="teamRegistrationDeadline">
            Team registration deadline
          </label>
          <input
            type="date"
            name="teamRegistrationDeadline"
            value={this.state.teamRegistrationDeadline}
            onChange={this.onChange}
          />
          <label htmlFor="seedingDeadline">Seeding deadline</label>
          <input
            type="date"
            name="seedingDeadline"
            value={this.state.seedingDeadline}
            onChange={this.onChange}
          />
          <label htmlFor="playersListDeadline">Player's list deadline</label>
          <input
            type="date"
            name="playersListDeadline"
            value={this.state.playersListDeadline}
            onChange={this.onChange}
          />
        </div>
        <button type="button" onClick={this.addCompetitionDayComponent}>
          +
        </button>
        {this.state.competitionDays}
        <button type="submit">create</button>
      </form>
    );
  };

  render() {
    const userRoleId = this.props.organisation
      ? this.props.organisation.roleId
      : this.props.user.roleId;
    return (
      <Can
        roleId={userRoleId}
        perform="competitions:create"
        yes={() => this.renderCompetitionForm()}
        no={() => (
          <div style={headerSpacing}>
            You have to be the contact of an organisation to create a
            competition
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user,
  organisation: state.session.user.organisation
});

const mapDispatchToProps = { addNewCompetition };

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompetition);
