import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { RegisteredPlayerCard } from "./RegisteredPlayerCard";

export const RegisteredPlayers = props => {
  const { players } = props;

  console.log("Registered players props", players);

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
            Players
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="cardContainer">
          {players.map((player, index) => (
            <RegisteredPlayerCard key={index} player={player} />
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
