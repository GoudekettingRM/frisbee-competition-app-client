import Button from "@material-ui/core/Button";
import isFuture from "date-fns/isFuture";
import parseISO from "date-fns/parseISO";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneGame } from "../../store/game/actions";
import { headerSpacing } from "../../styles";
import Can from "../Can";
import "./gameDetails.css";
import ScoreForm from "./ScoreForm";
import { ScoreOrGameStartDetails } from "./ScoreOrGameStartDetails";
import { TeamGameDetails } from "./TeamGameDetails";

class GameDetails extends Component {
  state = {
    scoring: false
  };

  componentDidMount = () => {
    if (!Object.keys(this.props.game).length) {
      const gameId = this.props.match.params.gameId;
      this.props.getOneGame(gameId);
    }
  };

  toggleScoreForm = () => {
    this.setState({
      scoring: !this.state.scoring
    });
  };

  renderScoreForm = userRoleId => {
    const { game, user } = this.props;
    const { homeTeamId, awayTeamId, homeTeamScore } = game;
    if (this.state.scoring) {
      const scoresPresent = homeTeamScore ? true : false;
      return (
        <Can
          roleId={userRoleId}
          perform="games:update-score"
          data={{
            homeTeamId,
            awayTeamId,
            userTeamId: user.teamId
          }}
          yes={() => {
            return (
              <div>
                <ScoreForm
                  game={game}
                  toggleScoreForm={this.toggleScoreForm}
                  scoresPresent={scoresPresent}
                />
              </div>
            );
          }}
          no={() => null}
        />
      );
    } else {
      return null;
    }
  };

  scoreOrUpdateGameButton = userRoleId => {
    const { date } = this.props.game.competitionDay;
    const {
      homeTeamScore,
      awayTeamScore,
      homeTeamId,
      awayTeamId
    } = this.props.game;
    return (
      <Can
        roleId={userRoleId}
        perform="games:update-score"
        data={{
          homeTeamId,
          awayTeamId,
          userTeamId: this.props.user.teamId
        }}
        yes={() => {
          return (
            !isFuture(parseISO(date)) &&
            !this.state.scoring && (
              <Button
                color="primary"
                type="button"
                style={{ margin: "10px" }}
                onClick={this.toggleScoreForm}>
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
    console.log("Render of game detail:", this.props);
    if (!Object.keys(this.props.game).length) return <div>No data</div>;
    const userRoleId = this.props.user.organisation
      ? this.props.user.organisation.roleId
      : this.props.user.roleId;
    const { homeTeam, awayTeam, game } = this.props;

    return (
      <div style={headerSpacing}>
        <TeamGameDetails homeOrAway="home" name={homeTeam.name} game={game} />
        <ScoreOrGameStartDetails game={game} />
        <TeamGameDetails homeOrAway="away" name={awayTeam.name} game={game} />
        {this.scoreOrUpdateGameButton(userRoleId)}
        {this.renderScoreForm(userRoleId)}
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
