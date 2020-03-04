import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div>R.M.G.</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Log in</Link>
          <Link to="/player-signup">Sign up as a player</Link>
          <Link to="/admin-signup">Sign up as a club or federation</Link>
          <Link to="/logout">Log out</Link>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

export default connect(mapStateToProps)(Header);
