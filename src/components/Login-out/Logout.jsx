import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/user/actions";
import { headerSpacing } from "../../styles";
import { Redirect } from "react-router";

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
      <button type="submit">Log out</button>
    </form>
  );
};

export default Logout;
