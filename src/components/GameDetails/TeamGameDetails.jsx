import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const TeamGameDetails = props => {
  const { homeOrAway, name, game } = props;

  const receivedSpiritScore =
    homeOrAway === "home"
      ? game.homeTeamReceivedSpiritScore
      : game.awayTeamReceivedSpiritScore;

  const teamReceivedSpiritScore = receivedSpiritScore ? (
    receivedSpiritScore.spiritTotal
  ) : (
    <Typography
      component="span"
      variant="body2"
      color="textSecondary"
      style={{ fontSize: "0.8rem", marginTop: "3px" }}>
      <em>Not Given Yet</em>
    </Typography>
  );

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
            {name}
          </Typography>
          <Typography
            component="h2"
            variant="body1"
            color="textSecondary"
            style={{ fontSize: "0.8rem", marginTop: "3px" }}>
            <em>Received spirit: {teamReceivedSpiritScore}</em>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left">
            <span>
              <span className="spiritFlex total">
                <span className="spiritNameSpacing">
                  <strong>Total:</strong>
                </span>
                <span>{teamReceivedSpiritScore}</span>
              </span>
              <br />
              {receivedSpiritScore && (
                <span>
                  <span className="spiritFlex">
                    <span>Rules, Knowledge & Use:</span>
                    <span>{receivedSpiritScore.RKUScore}</span>
                  </span>
                  <br />
                  <span className="spiritFlex">
                    <span>Fouls & Body Contact:</span>
                    <span>{receivedSpiritScore.FNBScore}</span>
                  </span>
                  <br />
                  <span className="spiritFlex">
                    <span>Fairmindedness:</span>
                    <span>{receivedSpiritScore.FMScore}</span>
                  </span>
                  <br />
                  <span className="spiritFlex">
                    <span className="spiritNameSpacing">
                      Positive Attitude & Self-Control:
                    </span>
                    <span>{receivedSpiritScore.PASCScore}</span>
                  </span>
                  <br />
                  <span className="spiritFlex">
                    <span>Communication:</span>
                    <span>{receivedSpiritScore.COMMScore}</span>
                  </span>
                </span>
              )}
            </span>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
