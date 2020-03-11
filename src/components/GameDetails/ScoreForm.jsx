import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { GameScoreCard } from "./GameScoreCard";
import { scoreGame } from "../../store/game/actions";

const styles = theme => ({
  padding: {
    padding: theme.spacing(1)
  },
  margin: {
    margin: "30px 0"
  }
});

class ScoreForm extends Component {
  state = {
    homeTeamScore: undefined,
    awayTeamScore: undefined
  };

  componentDidMount = () => {
    if (this.props.scoresPresent) {
      this.setState({
        homeTeamScore: this.props.game.homeTeamScore,
        awayTeamScore: this.props.game.awayTeamScore
      });
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { game } = this.props;
    const { id } = game;
    const { homeTeamScore, awayTeamScore } = this.state;
    if (homeTeamScore === undefined || awayTeamScore === undefined) {
      alert("You have to enter a score for both teams.");
      return null;
    }

    this.props.scoreGame(this.state, id);

    this.setState({
      homeTeamScore: undefined,
      awayTeamScore: undefined
    });
    this.props.toggleScoreForm();
  };

  render() {
    const { classes, scoresPresent } = this.props;
    const { homeTeamScore, awayTeamScore } = this.props.game;
    const homeScore = scoresPresent ? homeTeamScore : "";
    const awayScore = scoresPresent ? awayTeamScore : "";

    const homeTeam = this.props.game.homeTeam.name;
    const awayTeam = this.props.game.awayTeam.name;

    return (
      <Paper className={classes.padding}>
        <form onSubmit={this.onSubmit}>
          <Button color="primary" style={{ margin: "10px" }} type="submit">
            Submit
          </Button>
          <Button
            type="button"
            color="default"
            style={{ margin: "10px" }}
            onClick={this.props.toggleScoreForm}>
            Cancel
          </Button>
          <div className={classes.margin}>
            <GameScoreCard
              homeTeam={homeTeam}
              scoresPresent={scoresPresent}
              homeScore={homeScore}
              change={this.onChange}
              awayTeam={awayTeam}
              awayScore={awayScore}
            />
          </div>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = {
  scoreGame
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ScoreForm)
);
