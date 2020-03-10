import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const {
    homeTeamScore,
    awayTeamScore,
    location,
    startTime,
    competitionId,
    id,
    homeTeam,
    awayTeam
  } = props.data;

  const goToGameDetails = () => {
    dispatch(setGameDetails(props.data));
    props.history.push(`/competitions/${competitionId}/games/${id}`);
  };

  return (
    <Card className="game" onClick={goToGameDetails}>
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

export default GameCard;
