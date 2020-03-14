import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import GameCard from "../GameDetails/GameCard";
import { detailsMaxWidth } from "../../styles";

export const PlannedGames = props => {
  const { games, history, teams } = props;
  return (
    <div>
      <ExpansionPanel style={detailsMaxWidth}>
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
            Games
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {games.map(game => (
              <GameCard
                history={history}
                data={game}
                teams={teams}
                key={game.id}
              />
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
