import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuButton from "./MenuButton";
import { connect } from "react-redux";

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
  const competition = path.substring(17, 30);
  console.log("competition", competition);

  if (path === "/") return "Home";
  if (path === "/login") return "Log in";
  if (path === "/logout") return "Log out";
  if (path === "/signup") return "Sign up";
  if (path === "/create-competition") return "New competition";
  if (
    path.substring(0, 14) === "/competitions/" &&
    path.substring(17, 20) === ""
  )
    return currentProps.selectedCompetition.name;
  if (
    path.substring(0, 14) === "/competitions/" &&
    path.substring(17, 30) === "create-game"
  )
    return currentProps.selectedCompetition.name + " - Add Game";
};

const NavBar = props => {
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
              { label: "Organisation", path: "/organisations" }
            ]}
          />
          <div className={classes.grow} />
          <h3>{pageTitle(props)}</h3>
          <div className={classes.grow} />
          {!props.token ? (
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

const mapStateToProps = state => ({
  token: state.session.jwt,
  selectedCompetition: state.competitions.selected
});

export default withRouter(connect(mapStateToProps)(NavBar));
