import React, { Component } from "react";
import { connect } from "react-redux";
import { UserData } from "./UserData";

class ProfilePage extends Component {
  render() {
    if (!Object.keys(this.props.user).length) {
      return <div> You have to log in to look at your profile page.</div>;
    }
    const { firstName, lastName, email } = this.props.user;
    return (
      <div>
        I will be the profile page!
        <UserData value={firstName} label="First name" />
        <UserData value={lastName} label="Last name" />
        <UserData value={email} label="E - mail address" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
