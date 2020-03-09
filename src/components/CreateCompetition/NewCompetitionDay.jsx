import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default class NewCompetitionDay extends Component {
  state = {
    value: null
  };
  onChangeDate = (newValue, name) => {
    const month =
      newValue.getMonth() + 1 < 10
        ? "0" + (newValue.getMonth() + 1)
        : newValue.getMonth() + 1;
    const newDate = `${newValue.getFullYear()}-${month}-${newValue.getDate()}`;

    this.setState({
      [name]: newDate
    });
    this.props.handleChange(this.props.id, newDate);
  };

  render() {
    const alignmentCorrection =
      this.props.id !== 0 ? { marginLeft: "25px" } : null;
    return (
      <div style={{ verticalAlign: "baseline" }}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            style={alignmentCorrection}
            margin="normal"
            label={`Pick date`}
            format="dd/MM/yyyy"
            value={this.state.value}
            onChange={newDate => this.onChangeDate(newDate, "value")}
          />
        </MuiPickersUtilsProvider>
        {this.props.id === 0 ? null : (
          <IconButton
            style={{ padding: "0", marginTop: "35px" }}
            aria-label="delete"
            onClick={() => this.props.removeDay(this.props.id)}>
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    );
  }
}
