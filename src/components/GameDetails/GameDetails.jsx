import React, { Component } from "react";
import { connect } from "react-redux";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getOneGame } from "../../store/game/actions";
import { headerSpacing } from "../../styles";

class GameDetails extends Component {
  componentDidMount = () => {
    if (!Object.keys(this.props.game).length) {
      console.log(
        "I should get the game data! (component did mount of game details comp)"
      );
      const gameId = this.props.match.params.gameId;
      this.props.getOneGame(gameId);
    }
  };

  loadTeamGameDetails = (homeOrAway, name) => {
    const teamReceivedSpiritScore =
      homeOrAway === "home"
        ? this.props.game.homeTeamReceivedSpiritScore
        : this.props.game.awayTeamReceivedSpiritScore;

    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography component="h2" style={{ marginRight: "15px" }}>
              {name}
            </Typography>
            <Typography
              component="h2"
              variant="body1"
              color="textSecondary"
              style={{ fontSize: "0.8rem", marginTop: "3px" }}>
              <em>Received spirit: {teamReceivedSpiritScore}</em>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Spirit score received: {teamReceivedSpiritScore}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  };

  loadScoreOrGameDetails = () => {
    const {
      homeTeamScore,
      awayTeamScore,
      location,
      startTime,
      lat,
      lng
    } = this.props.game;
    const { date } = this.props.game.competitionDay;

    return homeTeamScore ? (
      <div>
        <h2>{homeTeamScore}</h2>
        <p>-</p>
        <h2>{awayTeamScore}</h2>
      </div>
    ) : (
      <div>
        <Typography component="h2" variant="h6" style={{ margin: "20px auto" }}>
          This game has not been played yet.
        </Typography>
        <Typography
          component="h2"
          variant="body1"
          color="textSecondary"
          style={{ marginBottom: "20px" }}>
          <em>
            <strong>When:</strong> {date}, {startTime.substring(0, 5)}
          </em>
          <br />
          <em>
            <strong>Where:</strong> {location}
          </em>
          <br />
          <a
            href={`http://maps.google.com/maps?q=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer">
            Look up location
          </a>
        </Typography>
      </div>
    );
  };

  render() {
    if (!Object.keys(this.props.game).length) return <div>No data</div>;
    return (
      <div style={headerSpacing}>
        {this.loadTeamGameDetails("home", this.props.homeTeam.name)}
        {this.loadScoreOrGameDetails()}
        {this.loadTeamGameDetails("away", this.props.awayTeam.name)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game.data,
  homeTeam: state.game.data.homeTeam,
  awayTeam: state.game.data.awayTeam
});

const mapDispatchToProps = { getOneGame };

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
