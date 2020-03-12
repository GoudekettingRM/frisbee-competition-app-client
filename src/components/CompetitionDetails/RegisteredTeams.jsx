import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { RegisteredTeamCard } from "./RegisteredTeamCard";

export const RegisteredTeams = props => {
  const { teams, history, competitionId } = props;

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography
            component="h2"
            variant="h5"
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              marginRight: "25px"
            }}>
            Teams registered
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="cardContainer">
          {teams.map(team => (
            <RegisteredTeamCard
              key={team.id}
              team={team}
              history={history}
              competitionId={competitionId}
            />
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
