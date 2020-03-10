import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { logoutAction } from "../../store/user/actions";
import { headerSpacing } from "../../styles";

const Logout = () => {
  const [redirect, setRedirect] = useState(null);
  const token = useSelector(state => state.session.jwt);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    setRedirect("/login");
    dispatch(logoutAction());
  };

  if (!token) {
    return <Redirect to={redirect} />;
  }
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
