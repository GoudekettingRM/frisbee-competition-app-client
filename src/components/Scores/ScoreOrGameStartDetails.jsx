import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import isBefore from "date-fns/isBefore";
import parseISO from "date-fns/parseISO";

export const ScoreOrGameStartDetails = props => {
  const {
    homeTeamScore,
    awayTeamScore,
    location,
    startTime,
    lat,
    lng
  } = props.game;

  const { date } = props.game.competitionDay;

  const gameInFuture = () => {
    return (
      <div>
        <Typography
          component="h2"
          variant="subtitle1"
          style={{ margin: "20px auto" }}>
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

  const gamePlayedButNotScored = () => {
    return (
      <div>
        <Typography
          component="h2"
          variant="subtitle1"
          style={{ margin: "20px auto" }}>
          This game has not been scored yet.
        </Typography>
      </div>
    );
  };

  return homeTeamScore ? (
    <div>
      <Typography component="h2" variant="h5" style={{ margin: "20px 0 0 0" }}>
        {homeTeamScore}
      </Typography>
      <p>-</p>
      <Typography component="h2" variant="h5" style={{ margin: "0 0 20px 0" }}>
        {awayTeamScore}
      </Typography>
    </div>
  ) : isBefore(parseISO(date), new Date()) ? (
    gamePlayedButNotScored()
  ) : (
    gameInFuture()
  );
};
