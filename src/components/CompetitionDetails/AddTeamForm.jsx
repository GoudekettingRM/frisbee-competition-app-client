import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTeam } from "../../store/team/actions";
import { inputField } from "../../styles";

class AddTeamForm extends Component {
  state = {
    name: ""
  };

  cancelAddTeam = () => {
    this.props.toggleForm();
    this.setState({
      name: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const { organisationId, competitionId, addTeam, toggleForm } = this.props;

    addTeam({ name, organisationId, competitionId });

    toggleForm();
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Grid container justify="center" direction="column">
          <Grid item>
            <Typography component="h2" variant="h6">
              Register a team for {this.props.selectedCompetition.name}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              style={inputField}
              name="name"
              label="Team name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item>
            <Button color="primary" type="submit" style={{ margin: "10px" }}>
              Register
            </Button>
            <Button
              color="default"
              type="button"
              style={{ margin: "10px" }}
              onClick={this.cancelAddTeam}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  selectedCompetition: state.competitions.selected
});

const mapDispatchToProps = { addTeam };

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
