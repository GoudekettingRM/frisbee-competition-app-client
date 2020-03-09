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

  loadTeamGameDetails = (homeOrAway, teamData) => {
    const teamScore =
      homeOrAway === "home"
        ? this.props.game.homeTeamScore
        : this.props.game.awayTeamScore;
    const teamReceivedSpiritScore =
      homeOrAway === "home"
        ? this.props.game.homeTeamReceivedSpiritScore
        : this.props.game.awayTeamReceivedSpiritScore;

    const { name } = teamData;
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

  render() {
    console.log("render of game details", this.props);

    if (!Object.keys(this.props.game).length) return <div>No data</div>;
    return (
      <div style={headerSpacing}>
        {this.loadTeamGameDetails("home", this.props.homeTeam)}
        <h2>{this.props.game.homeTeamScore}</h2>
        <p>-</p>
        <h2>{this.props.game.awayTeamScore}</h2>
        {this.loadTeamGameDetails("away", this.props.awayTeam)}
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
