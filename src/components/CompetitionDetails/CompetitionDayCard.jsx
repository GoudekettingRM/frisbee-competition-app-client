import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { detailsMaxWidth } from "../../styles";

export default function CompetitionDayCard(props) {
  const {
    id,
    day: { date }
  } = props;
  return (
    <Grid
      container
      item
      justify="space-between"
      direction="row"
      style={detailsMaxWidth}>
      <Grid item>
        <Typography component="p" variant="subtitle2">
          Competition Day {id}:{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="span" variant="subtitle1">
          {moment(date).format("dddd, MMM Do, YYYY")}
        </Typography>
      </Grid>
    </Grid>
  );
}
