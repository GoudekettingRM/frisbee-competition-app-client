import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createSetCompetitionAction } from "../../store/competition/actions";
import { makeStyles } from "@material-ui/core";
import "./competitionCard.css";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  subtitle: {
    margin: theme.spacing(0.5)
  },
  dates: {
    fontSize: "0.75rem",
    fontStyle: "italic"
  },
  leaderboard: {
    fontSize: "0.875rem",
    marginTop: theme.spacing(1)
  }
}));

const CompetitionCard = props => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { name, startDate, endDate, id, teams } = props.competition;

  const setSelectedCompetition = () => {
    dispatch(createSetCompetitionAction(props.competition));
  };

  return (
    <Link
      to={`/competitions/${id}`}
      style={{ textDecoration: "none" }}
      onClick={setSelectedCompetition}>
      <Paper className="competitionCard">
        <Typography component="h1" variant="h5" className={classes.title}>
          {name}
        </Typography>
        <Typography
          component="h2"
          variant="subtitle2"
          className={classes.subtitle}>
          Registered teams: {teams.length}
        </Typography>
        <Typography component="p" variant="body2" className={classes.dates}>
          Starts on {moment(startDate).format("dddd, MMMM Do YYYY")} <br />
          Ends on {moment(endDate).format("dddd, MMMM Do YYYY")}
        </Typography>
        <Typography
          component="p"
          variant="body2"
          className={classes.leaderboard}>
          Theoretically a leaderboard goes here.
        </Typography>
      </Paper>
    </Link>
  );
};

export default CompetitionCard;
