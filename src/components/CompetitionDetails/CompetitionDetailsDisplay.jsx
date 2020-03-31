import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { headerSpacing, detailsMaxWidth } from "../../styles";

export const CompetitionDetailsDisplay = props => {
  const {
    startDate,
    endDate,
    teamRegistrationDeadline,
    seedingDeadline,
    playersListDeadline
  } = props.competition;

  const renderDate = (label, date) => {
    return (
      <Grid
        container
        item
        justify="space-between"
        direction="row"
        style={detailsMaxWidth}>
        <Grid item>
          <Typography component="p" variant="subtitle2">
            {label}:{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="subtitle1">
            {moment(date).format("dddd, MMM Do, YYYY")}
          </Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <div style={headerSpacing}>
      <Grid container justify="center" direction="column" alignItems="center">
        <Typography component="h1" variant="h5">
          Important dates:
        </Typography>
        {renderDate("Starts", startDate)}
        {renderDate("Ends", endDate)}
        {renderDate("Team Registration Deadline", teamRegistrationDeadline)}
        {renderDate("Seeding Deadline", seedingDeadline)}
        {renderDate("Players List Deadline", playersListDeadline)}
      </Grid>
      <hr style={detailsMaxWidth} />
    </div>
  );
};
