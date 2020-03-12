import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./teams.css";
import { useDispatch } from "react-redux";
import { setSelectedTeamDetailsAction } from "../../store/team/actions";

export const RegisteredTeamCard = props => {
  const dispatch = useDispatch();
  const { history, team } = props;
  const { name, id } = props.team;
  console.log("history test in registered team card", history);

  const goToTeamPage = () => {
    dispatch(setSelectedTeamDetailsAction(team));
    history.push(`/teams/${id}`);
  };
  return (
    <Card className="teamCardItem" onClick={goToTeamPage}>
      <CardContent className="teamName">
        <Typography display="inline" variant="h6" component="h2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};