import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login-out/Login";
import Home from "./components/Home/Home";
import SignUpPlayer from "./components/SignUp/SignUpPlayer";
import Logout from "./components/Login-out/Logout";
import CreateOrganisation from "./components/CreateOrganisation/CreateOrganisation";
import ProfilePage from "./components/Profile/ProfilePage";
import CreateCompetition from "./components/CreateCompetition/CreateCompetition";
import CompetitionDetails from "./components/CompetitionDetails/CompetitionDetails";
import AddGame from "./components/Games/AddGame";
import NavBar from "./components/Header/NavBar";
import GameDetails from "./components/GameDetails/GameDetails";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector(state => state.session.jwt);

  const protectedRoutes = (Component, routerProps) => {
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };
  return (
    <div className="App">
      <NavBar />

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
          render={routerProps =>
            protectedRoutes(CompetitionDetails, routerProps)
          }
        />
        <Route
          path="/competitions/:competitionId/create-game"
          exact
          render={routerProps => protectedRoutes(AddGame, routerProps)}
        />
        <Route
          path="/competitions/:competitionId/games/:gameId"
          exact
          render={routerProps => protectedRoutes(GameDetails, routerProps)}
        />
      </Switch>
    </div>
  );
}

export default App;
