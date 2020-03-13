import React, { Component } from "react";
import { connect } from "react-redux";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import MomentUtils from "@date-io/moment";
import NewCompetitionDay from "./NewCompetitionDay";
import { addNewCompetition } from "../../store/competition/actions";
import Can from "../Can";
import { headerSpacing } from "../../styles";
import { validCompetitionDates } from "../../validations/competitionValidations";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { getUserRole } from "../../helper-files/rbac-helpers";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  padding: {
    marginTop: "70px",
    padding: theme.spacing(0.75)
  }
});

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
    this.setState({
      [name]: newValue
    });
  };

  onSubmit = event => {
    event.preventDefault();

    if (validCompetitionDates(this.state)) {
      const competitionData = {
        ...this.state,
        organisationId: this.props.organisation.id
      };

      this.props.addNewCompetition(competitionData, this.props.token);
    }
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
        style={{ width: "223px", margin: "10px auto" }}
        margin="normal"
        label={label}
        format="DD/MM/YYYY"
        value={this.state[name]}
        onChange={newDate => this.onChangeDate(newDate, name)}
      />
    );
  };

  renderCompetitionForm = () => {
    const { classes } = this.props;
    return (
      <form onSubmit={this.onSubmit} style={headerSpacing}>
        <div>
          <Grid container justify="center" direction="column">
            <TextField
              style={{ width: "223px", margin: "0 auto" }}
              name="name"
              label="Competition name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              {this.dateInput("Pick start date", "startDate")}
              {this.dateInput("Pick end date", "endDate")}
              {this.dateInput(
                "Pick registration deadline",
                "teamRegistrationDeadline"
              )}
              {this.dateInput("Pick seeding deadline", "seedingDeadline")}
              {this.dateInput(
                "Pick player list deadline",
                "playersListDeadline"
              )}
            </MuiPickersUtilsProvider>
          </Grid>
        </div>
        <h4 style={{ margin: "30px 0 -10px 0", color: "grey" }}>
          Competition days
        </h4>
        <Fab
          color="secondary"
          style={{ position: "absolute", right: 20 }}
          size="small"
          type="button"
          onClick={this.addCompetitionDayComponent}>
          <AddIcon />
        </Fab>
        {this.state.competitionDays.filter(day => day !== "removed")}
        <Button color="primary" type="submit" style={{ margin: "10px" }}>
          Create
        </Button>
      </form>
    );
  };

  render() {
    // console.log("render of create comp", this.state);

    return (
      <Can
        roleId={getUserRole(this.props.user)}
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

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CreateCompetition)
);
