import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export default class NewCompetitionDay extends Component {
  state = {
    value: null
  };
  onChangeDate = (newValue, name) => {
    // const month =
    // newValue.getMonth() + 1 < 10
    // ? "0" + (newValue.getMonth() + 1)
    // : newValue.getMonth() + 1;
    // const newDate = `${newValue.getFullYear()}-${month}-${newValue.getDate()}`;
    this.setState({
      [name]: newValue
    });
    this.props.handleChange(this.props.id, newValue);
  };

  render() {
    const alignmentCorrection =
      this.props.id !== 0 ? { marginLeft: "25px" } : null;
    return (
      <div style={{ verticalAlign: "baseline" }}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            style={alignmentCorrection}
            margin="normal"
            label={`Pick date`}
            format="DD/MM/YYYY"
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
