import React from "react";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { logoutAction } from "../../store/user/actions";
import { headerSpacing } from "../../styles";

const Logout = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <form onSubmit={onSubmit} style={headerSpacing}>
      <Grid container justify="center" style={{ marginTop: "10px" }}>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          style={{ textTransform: "none" }}>
          Logout
        </Button>
      </Grid>
    </form>
  );
};

export default Logout;
