import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuButton from "./MenuButton";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 0,
    bottom: "auto",
    width: "100%",
    height: "56px"
  },
  grow: {
    flexGrow: 1
  },
  tabLink: {
    display: "block"
  },
  title: {
    fontFamily: "monospace",
    fontSize: "2rem",
    marginTop: theme.spacing(0.2),
    marginBottom: theme.spacing(0.2),
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}));

const pageTitle = currentProps => {
  const {
    user: { firstName },
    selectedCompetition,
    team,
    game: { homeTeam, awayTeam },
    location: { pathname }
  } = currentProps;

  const homeTeamName = homeTeam ? homeTeam.name : null;
  const awayTeamName = awayTeam ? awayTeam.name : null;

  const splitPath = pathname.split("/");

  const pageTitles = {
    "": "Ulti - Mate",
    login: "Log in",
    logout: "Log out",
    signup: "Sign up",
    "create-competition": "New competition",
    organisations: "Organisations",
    profile: `Hi ${firstName}`,
    competitions: {
      "": `${selectedCompetition.name}`,
      "create-game": `${selectedCompetition.name} - Add Game`,
      teams: `${team.name}`,
      games: `${homeTeamName} - ${awayTeamName}`
    }
  };

  splitPath[3] = splitPath[3] === undefined ? "" : splitPath[3];

  return splitPath[1] === "competitions"
    ? pageTitles[splitPath[1]][splitPath[3]]
    : pageTitles[splitPath[1]];
};

const NavBar = props => {
  const token = useSelector(state => state.session.jwt);
  const user = useSelector(state => state.session.user);
  const selectedCompetition = useSelector(state => state.competitions.selected);
  const team = useSelector(state => state.team);
  const game = useSelector(state => state.game);
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
          <Typography component="h3" className={classes.title}>
            {pageTitle({ ...props, user, selectedCompetition, team, game })}
          </Typography>
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
