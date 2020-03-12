import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Can from "../Can";
import { SpiritScoreDetails } from "../Scores/SpiritScoreDetails";
import SpiritScoreForm from "../Scores/SpiritScoreForm";

export const TeamGameDetails = props => {
  const [editSpirit, setEditSpirit] = useState(false);
  const user = useSelector(state => state.session.user);
  const { homeOrAway, name, game } = props;
  const userRoleId = user.organisation ? user.organisation.roleId : user.roleId;

  const receivedSpiritScore =
    homeOrAway === "home"
      ? game.homeTeamReceivedSpiritScore
      : game.awayTeamReceivedSpiritScore;

  const toggleSpiritForm = () => {
    setEditSpirit(!editSpirit);
  };

  const totalSpiritScoreReceived = receivedSpiritScore ? (
    receivedSpiritScore.spiritTotal
  ) : (
    <Typography
      component="span"
      variant="body2"
      color="textSecondary"
      style={{ fontSize: "0.8rem", marginTop: "3px" }}>
      <em>Not Received Yet</em>
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
            <em>Received spirit: {totalSpiritScoreReceived}</em>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {editSpirit ? (
            <SpiritScoreForm
              spiritScoreFor={homeOrAway}
              toggleSpiritForm={toggleSpiritForm}
              receivedSpiritScore={receivedSpiritScore}
            />
          ) : (
            <SpiritScoreDetails
              totalSpiritScoreReceived={totalSpiritScoreReceived}
              receivedSpiritScore={receivedSpiritScore}
            />
          )}
          <div>
            <Can
              roleId={userRoleId}
              perform="games:update-spirit-score"
              data={{
                homeOrAway,
                homeTeam: game.homeTeam,
                awayTeam: game.awayTeam,
                user
              }}
              yes={() => {
                return (
                  <IconButton
                    onClick={toggleSpiritForm}
                    style={{ marginTop: "-10px", marginRight: "-13px" }}>
                    {editSpirit ? <CloseIcon /> : <EditIcon />}
                  </IconButton>
                );
              }}
              no={() => null}
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
