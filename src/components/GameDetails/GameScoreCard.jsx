import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

export const GameScoreCard = props => {
  const [homeTeamScore, setHomeTeamScore] = useState("");
  const [awayTeamScore, setAwayTeamScore] = useState("");
  const { homeTeam, awayTeam, change } = props;

  const handleFocus = event => {
    event.target.select();
  };
  const handleContext = event => {
    event.preventDefault();
    return false;
  };
  return (
    <Grid>
      <Grid container spacing={4}>
        <Grid item md={true} sm={true} xs={true}>
          <Typography
            variant="h6"
            component="h3"
            style={{ display: "inline-block", margin: "0 20px" }}>
            {homeTeam}
          </Typography>
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <Typography
            variant="h6"
            component="h3"
            style={{ display: "inline-block", margin: "0 20px" }}>
            {awayTeam}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={true} sm={true} xs={true}>
          <Input
            inputProps={{ style: { textAlign: "center" } }}
            onFocus={handleFocus}
            onContextMenu={handleContext}
            placeholder={`${homeTeam} score`}
            type="number"
            name="homeTeamScore"
            value={homeTeamScore}
            onChange={event => {
              change(event);
              setHomeTeamScore(event.target.value);
            }}
          />
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <Input
            inputProps={{
              style: { textAlign: "center" }
            }}
            onFocus={handleFocus}
            onContextMenu={handleContext}
            placeholder={`${awayTeam} score`}
            type="number"
            name="awayTeamScore"
            value={awayTeamScore}
            onChange={event => {
              change(event);
              setAwayTeamScore(event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
