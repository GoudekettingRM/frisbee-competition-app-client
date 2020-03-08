import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Can from "../Can";
// import Profile from "./ProfileMenu";

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
          <Button>
            <Link to="/">Home</Link>
          </Button>
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
              {/* <Profile user={this.props.user} /> */}
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
