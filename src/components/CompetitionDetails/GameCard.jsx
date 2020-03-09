import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { setGameDetails } from "../../store/game/actions";
import "./gameCard.css";

const loadCardContent = (homeOrAway, teamName, teamScore) => {
  return (
    <CardContent>
      <div className="gameTeam">
        {homeOrAway === "home" ? null : (
          <Typography display="inline" color="textSecondary" variant="body2">
            {teamScore}
          </Typography>
        )}

        <Typography display="inline" variant="subtitle2" component="h2">
          {teamName}
        </Typography>

        {homeOrAway === "home" ? (
          <Typography display="inline" color="textSecondary" variant="body2">
            {teamScore}
          </Typography>
        ) : null}
      </div>
    </CardContent>
  );
};

const GameCard = props => {
  const [redirect, setRedirect] = useState(null);
  const {
    homeTeamId,
    homeTeamScore,
    awayTeamId,
    awayTeamScore,
    location,
    startTime,
    competitionId,
    id
  } = props.data;
  const homeTeam = props.teams.find(team => team.id === homeTeamId);
  const awayTeam = props.teams.find(team => team.id === awayTeamId);

  const goToGameDetails = () => {
    props.setGameDetails({ game: props.data, homeTeam, awayTeam });
    setRedirect(`/competitions/${competitionId}/games/${id}`);
  };

  if (redirect) return <Redirect to={redirect} />;
  return (
    <Card
      className="game"
      onClick={() =>
        goToGameDetails(setRedirect, { game: props.data, homeTeam, awayTeam })
      }>
      {loadCardContent("home", homeTeam.name, homeTeamScore)}
      <CardContent className="versus">
        <span>vs.</span>
      </CardContent>
      {loadCardContent("away", awayTeam.name, awayTeamScore)}
      <CardActionArea>
        {location} - {startTime.substring(0, 5)}
      </CardActionArea>
    </Card>
  );
};

const mapDispatchToProps = {
  setGameDetails
};

export default connect(null, mapDispatchToProps)(GameCard);
