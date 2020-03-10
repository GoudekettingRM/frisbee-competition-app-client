import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { GameScoreCard } from "./GameScoreCard";
import { SpiritItem } from "./SpiritItem";

const styles = theme => ({
  padding: {
    padding: theme.spacing(1)
  }
});

class ScoreForm extends Component {
  state = {
    homeTeamScore: undefined,
    awayTeamScore: undefined,
    RKUScore: 2,
    RKUComment: "",
    FNBScore: 2,
    FNBComment: "",
    FMScore: 2,
    FMComment: "",
    PASCScore: 2,
    PASCComment: "",
    COMMScore: 2,
    COMMComment: "",
    GeneralComment: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { homeTeamScore, awayTeamScore } = this.state;
    console.log("Hello from submit of scoreform", this.state);
    if (homeTeamScore === undefined || awayTeamScore === undefined) {
      alert("You have to enter a score for both teams.");
      return null;
    }
    console.log("Lets send the data to the backend.");
  };
  render() {
    const { classes, cancel } = this.props;
    const homeTeam = this.props.game.homeTeam.name;
    const awayTeam = this.props.game.awayTeam.name;

    return (
      <Paper className={classes.padding}>
        <form onSubmit={this.onSubmit}>
          <div>
            <Button color="primary" style={{ margin: "10px" }} type="submit">
              Submit
            </Button>
            <Button
              type="button"
              color="default"
              style={{ margin: "10px" }}
              onClick={cancel}>
              Cancel
            </Button>
          </div>
          <div>
            <GameScoreCard
              homeTeam={homeTeam}
              change={this.onChange}
              awayTeam={awayTeam}
            />
          </div>
          <div style={{ margin: "30px 0" }}>
            <SpiritItem
              label={"Rules, Knowledge & Use"}
              scoreName={"RKUScore"}
              commentName={"RKUComment"}
              comment={this.state.RKUComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Fouls & Body Contact"}
              scoreName={"FNBScore"}
              commentName={"FNBComment"}
              comment={this.state.FNBComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Fairmindedness"}
              scoreName={"FMScore"}
              commentName={"FMComment"}
              comment={this.state.FMComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Positive Attitude & Self-Control"}
              scoreName={"PASCScore"}
              commentName={"PASCComment"}
              comment={this.state.PASCComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Communication"}
              scoreName={"COMMScore"}
              commentName={"COMMComment"}
              comment={this.state.COMMComment}
              change={this.onChange}
            />
          </div>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(connect()(ScoreForm));
