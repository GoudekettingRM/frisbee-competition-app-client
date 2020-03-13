import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AddCommentIcon from "@material-ui/icons/AddComment";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: "20px"
  }
}));

export const SpiritItem = props => {
  const { label, scoreName, commentName, value, comment, change } = props;
  const classes = useStyles();

  const [spiritValue, setSpiritValue] = useState(2);

  useEffect(() => {
    setSpiritValue(value);
  }, [value]);

  const [addComment, setAddComment] = useState(false);

  const handleSpirit = (event, newSpirit) => {
    if (newSpirit !== null) {
      change({ target: { name: scoreName, value: newSpirit } });
      setSpiritValue(newSpirit);
    }
  };

  return (
    <div className={classes.margin}>
      <div>
        <Typography
          variant="subtitle2"
          component="h4"
          style={{ margin: "5px" }}>
          {label}
        </Typography>
        <ToggleButtonGroup
          variant="number"
          value={spiritValue}
          name={scoreName}
          exclusive
          aria-label={`Spirit score`}
          onChange={handleSpirit}>
          <ToggleButton value={0} aria-label="button for spirit score 0">
            0
          </ToggleButton>
          <ToggleButton value={1} aria-label="button for spirit score 1">
            1
          </ToggleButton>
          <ToggleButton value={2} aria-label="button for spirit score 2">
            2
          </ToggleButton>
          <ToggleButton value={3} aria-label="button for spirit score 3">
            3
          </ToggleButton>
          <ToggleButton value={4} aria-label="button for spirit score 4">
            4
          </ToggleButton>
        </ToggleButtonGroup>
        <IconButton
          style={{ marginRight: "-50px" }}
          onClick={() => setAddComment(true)}>
          <AddCommentIcon />
        </IconButton>
      </div>
      {addComment && (
        <div>
          <TextField
            multiline
            rowsMax="5"
            name={commentName}
            label={`Add a comment`}
            value={comment}
            onChange={change}
          />
          <IconButton
            style={{ marginRight: "-50px" }}
            onClick={() => setAddComment(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
