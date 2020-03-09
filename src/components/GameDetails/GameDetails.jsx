import React, { Component } from "react";
import { connect } from "react-redux";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import parseISO from "date-fns/parseISO";
import isFuture from "date-fns/isFuture";
import { getOneGame } from "../../store/game/actions";
import { headerSpacing } from "../../styles";
import Can from "../Can";
import ScoreForm from "./ScoreForm";

class GameDetails extends Component {
  state = {
    editMode: false
  };

  componentDidMount = () => {
    if (!Object.keys(this.props.game).length) {
      console.log(
        "I should get the game data! (component did mount of game details comp)"
      );
      const gameId = this.props.match.params.gameId;
      this.props.getOneGame(gameId);
    }
  };

  toggleEdit = () => {
    console.log(
      `Edit mode is: ${this.state.editMode} and will be: ${!this.state
        .editMode}`
    );

    this.setState({
      editMode: !this.state.editMode
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("Submitting!");
  };

  renderEditForm = userRoleId => {
    if (this.state.editMode) {
      return (
        <Can
          roleId={userRoleId}
          perform="games:update"
          yes={() => {
            return (
              <div>
                <ScoreForm cancel={this.toggleEdit} submit={this.onSubmit} />
              </div>
            );
          }}
          no={() => null}
        />
      );
    }
    return null;
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
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              type="button"
              style={{
                margin: "10px"
              }}>
              Look up location
            </Button>
          </a>
        </Typography>
      </div>
    );
  };

  scoreOrUpdateGameButton = userRoleId => {
    const { date } = this.props.game.competitionDay;
    const { homeTeamScore, awayTeamScore } = this.props.game;
    return (
      <Can
        roleId={userRoleId}
        perform="games:update"
        yes={() => {
          return (
            !isFuture(parseISO(date)) &&
            !this.state.editMode && (
              <Button
                color="primary"
                type="button"
                style={{ margin: "10px" }}
                onClick={this.toggleEdit}>
                {!homeTeamScore || !awayTeamScore ? "Score game" : "Edit score"}
              </Button>
            )
          );
        }}
        no={() => null}
      />
    );
  };

  render() {
    // console.log("Render of game detail:", this.props);
    if (!Object.keys(this.props.game).length) return <div>No data</div>;
    const userRoleId = this.props.user.organisation
      ? this.props.user.organisation.roleId
      : this.props.user.roleId;
    return (
      <div style={headerSpacing}>
        {this.loadTeamGameDetails("home", this.props.homeTeam.name)}
        {this.loadScoreOrGameDetails()}
        {this.loadTeamGameDetails("away", this.props.awayTeam.name)}
        {this.scoreOrUpdateGameButton(userRoleId)}
        {this.renderEditForm(userRoleId)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game.data,
  homeTeam: state.game.data.homeTeam,
  awayTeam: state.game.data.awayTeam,
  user: state.session.user
});

const mapDispatchToProps = { getOneGame };

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
