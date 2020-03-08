import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutAction } from "../../store/user/actions";
import { headerSpacing } from "../../styles";

class Logout extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(logoutAction());
  };

  render() {
    if (!this.props.token) {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 500);
      return <div> Redirecting...</div>;
    }
    return (
      <form onSubmit={this.onSubmit} style={headerSpacing}>
        <button type="submit">Log out</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

export default connect(mapStateToProps)(Logout);
