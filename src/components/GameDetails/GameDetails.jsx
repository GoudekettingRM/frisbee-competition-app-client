import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneGame } from "../../store/game/actions";

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

  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  game: state.game.data,
  homeTeam: state.game.homeTeam,
  awayTeam: state.game.awayTeam
});

const mapDispatchToProps = { getOneGame };

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
