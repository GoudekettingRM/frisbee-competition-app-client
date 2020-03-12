import React from "react";
import Typography from "@material-ui/core/Typography";

export const SpiritScoreDetails = props => {
  const { receivedSpiritScore, totalSpiritScoreReceived } = props;
  return (
    <Typography align="left">
      <span>
        <span className="spiritFlex total">
          <span className="spiritNameSpacing">
            <strong>Spirit total:</strong>
          </span>
          <span>{totalSpiritScoreReceived}</span>
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
  );
};
