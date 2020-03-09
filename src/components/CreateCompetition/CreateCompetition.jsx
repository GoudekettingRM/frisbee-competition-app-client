import React, { Component } from "react";
import { connect } from "react-redux";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import NewCompetitionDay from "./NewCompetitionDay";
import { addNewCompetition } from "../../store/competition/actions";
import Can from "../Can";
import { headerSpacing } from "../../styles";

class CreateCompetition extends Component {
  state = {
    name: "",
    startDate: null,
    endDate: null,
    teamRegistrationDeadline: null,
    seedingDeadline: null,
    playersListDeadline: null,
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
  onChangeDate = (newValue, name) => {
    const month =
      newValue.getMonth() + 1 < 10
        ? "0" + (newValue.getMonth() + 1)
        : newValue.getMonth() + 1;
    const newDate = `${newValue.getFullYear()}-${month}-${newValue.getDate()}`;
    console.log("in onChangeDate", newDate);

    this.setState({
      [name]: newDate
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
      alert("All dates should be filled in and in the future.");
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
        competitionDayDates.find(date => date < now) ||
        emptyDatePresent
      ) {
        alert("All dates should be filled in and in the future. ");
        return null;
      }
    }
    const competitionData = {
      ...this.state,
      organisationId: this.props.organisation.id
    };

    this.props.addNewCompetition(competitionData, this.props.token);
  };

  changeCompetitionDayDates = (index, value) => {
    const NewCompetitionDayDates = [...this.state.competitionDayDates];
    NewCompetitionDayDates[index] = value;

    this.setState({
      ...this.state,
      competitionDayDates: NewCompetitionDayDates
    });
  };

  removeCompetitionDayComponent = indexOfElementToRemove => {
    const newCompetitionDays = [...this.state.competitionDays];
    const newCompetitionDayDates = [...this.state.competitionDayDates];
    newCompetitionDays.splice(indexOfElementToRemove, 1, "removed");
    newCompetitionDayDates.splice(indexOfElementToRemove, 1, "removed");

    this.setState({
      ...this.state,
      competitionDays: newCompetitionDays,
      competitionDayDates: newCompetitionDayDates
    });
  };

  addCompetitionDayComponent = () => {
    const newCompetitionDays = [
      ...this.state.competitionDays,
      <NewCompetitionDay
        key={this.state.competitionDays.length}
        id={this.state.competitionDays.length}
        handleChange={this.changeCompetitionDayDates}
        removeDay={this.removeCompetitionDayComponent}
      />
    ];

    this.setState({
      ...this.state,
      competitionDayDates: [...this.state.competitionDayDates, ""],
      competitionDays: newCompetitionDays
    });
  };

  dateInput = (label, name) => {
    return (
      <KeyboardDatePicker
        margin="normal"
        label={label}
        format="dd/MM/yyyy"
        value={this.state[name]}
        onChange={newDate => this.onChangeDate(newDate, name)}
      />
    );
  };

  renderCompetitionForm = () => {
    // const today = new Date();
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {this.dateInput("Pick start date", "startDate")}
            {this.dateInput("Pick end date", "endDate")}
            {this.dateInput(
              "Pick registration deadline",
              "teamRegistrationDeadline"
            )}
            {this.dateInput("Pick seeding deadline", "seedingDeadline")}
            {this.dateInput("Pick player list deadline", "playersListDeadline")}
          </MuiPickersUtilsProvider>
        </div>
        <button type="button" onClick={this.addCompetitionDayComponent}>
          +
        </button>
        {this.state.competitionDays.filter(day => day !== "removed")}
        <button type="submit">create</button>
      </form>
    );
  };

  render() {
    console.log("render of create comp", this.state);

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
