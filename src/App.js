import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login-out/Login";
import Home from "./components/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/logout" exact component={Logout} /> */}
        {/* <Route path="/signup" exact component={Signup} /> */}
      </Switch>
    </div>
  );
}

export default App;
