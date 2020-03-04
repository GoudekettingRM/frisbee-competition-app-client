import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login-out/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SignUpPlayer from "./components/SignUp/SignUpPlayer";
import "./App.css";
import Logout from "./components/Login-out/Logout";
import SignUpAdmin from "./components/SignUp/SignUpAdmin";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/player-signup" exact component={SignUpPlayer} />
        <Route path="/admin-signup" exact component={SignUpAdmin} />
      </Switch>
    </div>
  );
}

export default App;
