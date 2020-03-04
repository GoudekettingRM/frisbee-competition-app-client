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
          {!this.props.token ? (
            <nav style={{ display: "inline" }}>
              <Link to="/login">Log in</Link>
              <Link to="/player-signup">Sign up</Link>
            </nav>
          ) : (
            <nav style={{ display: "inline" }}>
              <Link to="/create-organisation">Create Club/Federation</Link>
              <Link to="/logout">Log out</Link>
            </nav>
          )}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

export default connect(mapStateToProps)(Header);
