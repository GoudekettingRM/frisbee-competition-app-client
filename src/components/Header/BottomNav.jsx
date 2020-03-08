import React from "react";
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

const BottomAppBar = props => {
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
              { label: "Competitions", path: "/competitions" },
              { label: "Organisation", path: "/organisations" }
            ]}
          />
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
  token: state.session.jwt
});

export default connect(mapStateToProps)(BottomAppBar);
