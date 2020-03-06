import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Can from "../Can";

class Header extends Component {
  render() {
    const { organisation } = this.props.user;
    const userRoleId = organisation
      ? organisation.roleId
      : this.props.user.roleId;
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
              {!organisation && (
                <Link to="/create-organisation">Create Club/Federation</Link>
              )}
              <Can
                roleId={userRoleId}
                perform="competitions:create"
                yes={() => {
                  return (
                    <Link to="/create-competition">Create Competition</Link>
                  );
                }}
                no={() => null}
              />
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Log out</Link>
            </nav>
          )}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user
});

export default connect(mapStateToProps)(Header);
