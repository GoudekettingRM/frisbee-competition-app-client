import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuButton from "./MenuButton";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 0,
    bottom: "auto"
  },
  grow: {
    flexGrow: 1
  },
  tabLink: {
    display: "block"
  }
}));

const pageTitle = currentProps => {
  const path = currentProps.location.pathname;

  if (path === "/") return "Home";
  if (path === "/login") return "Log in";
  if (path === "/logout") return "Log out";
  if (path === "/signup") return "Sign up";
  if (path === "/create-competition") return "New competition";
  if (path === "/organisations") return "Organisations";
  if (path === "/profile") return `Hi ${currentProps.user.firstName}!`;
  if (
    path.substring(0, 14) === "/competitions/" &&
    path.substring(17, 20) === ""
  )
    return currentProps.selectedCompetition.name;
  if (
    path.substring(0, 14) === "/competitions/" &&
    path.substring(17, 30) === "create-game"
  )
    return `${currentProps.selectedCompetition.name} - Add Game`;
  if (
    path.substring(0, 14) === "/competitions/" ||
    path.substring(17, 24) === "/teams/"
  )
    return `${currentProps.team.name}`;
};

const NavBar = props => {
  const token = useSelector(state => state.session.jwt);
  const user = useSelector(state => state.session.user);
  const selectedCompetition = useSelector(state => state.competitions.selected);
  const team = useSelector(state => state.team);
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <MenuButton
            iconType={MenuIcon}
            edgePosition="start"
            class={classes.tabLink}
            items={[
              { label: "Home", path: "/" },
              { label: "Organisations", path: "/organisations" }
            ]}
          />
          <div className={classes.grow} />
          <h3>{pageTitle({ ...props, user, selectedCompetition, team })}</h3>
          <div className={classes.grow} />
          {!token ? (
            <MenuButton
              iconType={AccountCircle}
              edgePosition="end"
              class={classes.tabLink}
              items={[
                { label: "Log in", path: "/login" },
                { label: "Sign up", path: "/signup" }
              ]}
            />
          ) : (
            <MenuButton
              iconType={AccountCircle}
              edgePosition="end"
              class={classes.tabLink}
              items={[
                { label: "Profile", path: "/profile" },
                { label: "Log out", path: "/logout" }
              ]}
            />
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
