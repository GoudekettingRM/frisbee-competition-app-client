import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import CompetitionDetails from "./components/CompetitionDetails/CompetitionDetails";
import CreateCompetition from "./components/CreateCompetition/CreateCompetition";
import CreateOrganisation from "./components/CreateOrganisation/CreateOrganisation";
import GameDetails from "./components/GameDetails/GameDetails";
import AddGame from "./components/Games/AddGame";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login-out/Login";
import Logout from "./components/Login-out/Logout";
import ProfilePage from "./components/Profile/ProfilePage";
import SignUpPlayer from "./components/SignUp/SignUpPlayer";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import { Snack } from "./components/SnackBar/Snack";
import "./App.css";

function App() {
  const token = useSelector(state => state.session.jwt);
  const statusCode = useSelector(state => state.status.code);

  const protectedRoutes = (Component, routerProps) => {
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };
  return (
    <div className="App">
      <NavBar />
      {!!statusCode && <Snack />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route
          path="/logout"
          exact
          render={routerProps => protectedRoutes(Logout, routerProps)}
        />
        <Route path="/signup" exact component={SignUpPlayer} />
        <Route
          path="/create-organisation"
          exact
          render={routerProps =>
            protectedRoutes(CreateOrganisation, routerProps)
          }
        />
        <Route
          path="/profile"
          exact
          render={routerProps => protectedRoutes(ProfilePage, routerProps)}
        />
        <Route
          path="/create-competition"
          exact
          render={routerProps =>
            protectedRoutes(CreateCompetition, routerProps)
          }
        />
        <Route
          path="/competitions/:competitionId"
          exact
          component={CompetitionDetails}
        />
        <Route
          path="/competitions/:competitionId/create-game"
          exact
          render={routerProps => protectedRoutes(AddGame, routerProps)}
        />
        <Route
          path="/competitions/:competitionId/games/:gameId"
          exact
          component={GameDetails}
        />
        <Route
          path="/competitions/:competitionId/teams/:teamId"
          exact
          component={TeamDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
