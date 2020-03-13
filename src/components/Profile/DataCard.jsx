import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import { updateUser } from "../../store/user/actions";
import { updateOrganisation } from "../../store/organisation/actions";

const useStyles = makeStyles(theme => ({
  padding: {
    margin: "0 auto",
    padding: theme.spacing(1)
  }
}));

const DataCard = props => {
  const { name, about, label, value } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [valueName] = useState(name);
  const [dataValue, setDataValue] = useState(value);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (about === "user") {
      dispatch(updateUser({ [valueName]: dataValue }));
    } else if (about === "organisation") {
      dispatch(updateOrganisation({ [valueName]: dataValue }));
    }
    toggleEdit();
  };

  const onChange = event => {
    setDataValue(event.target.value);
  };

  if (editMode) {
    return (
      <Paper className={classes.padding}>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="value"
                type="text"
                label={label}
                value={dataValue}
                fullWidth
                required
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <IconButton onClick={onSubmit} edge="end" aria-label="edit">
                <DoneIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  toggleEdit();
                  setDataValue(value);
                }}
                edge="end"
                aria-label="edit">
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }

  return (
    <Paper>
      <ListItem ContainerComponent="div">
        <ListItemText primary={value} secondary={label} />
        <ListItemSecondaryAction>
          <IconButton onClick={toggleEdit} edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
};

export default DataCard;
