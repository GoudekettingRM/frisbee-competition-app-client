import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuButton from "./MenuButton";
import { connect } from "react-redux";
import { superAdmin, federation } from "../endpointRoles";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  tabLink: {
    display: "block"
  }
}));

const BottomAppBar = props => {
  const classes = useStyles();
  console.log("Bottom app bar props", props.user.roleId);

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
              { label: "Competitions", path: "/competitions" },
              { label: "Organisation", path: "/organisations" }
            ]}
          />
          {props.user &&
          (props.user.roleId === superAdmin ||
            (props.user.organisation &&
              props.user.organisation.roleId === federation)) ? (
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}>
              <AddIcon />
            </Fab>
          ) : null}
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
  user: state.session.user
});

export default connect(mapStateToProps)(BottomAppBar);
