import React, { Component } from "react";
import { connect } from "react-redux";
import DataCard from "./DataCard";

class ProfilePage extends Component {
  render() {
    if (!Object.keys(this.props.user).length) {
      return <div> You have to log in to look at your profile page.</div>;
    }
    const { firstName, lastName, email, organisation } = this.props.user;
    return (
      <div>
        I will be the profile page!
        <DataCard value={firstName} label="First name" />
        <DataCard value={lastName} label="Last name" />
        <DataCard value={email} label="E - mail address" />
        {organisation && (
          <div>
            <p>
              You are the contact for an organisation. The organisation's
              details are listed below.
            </p>
            <DataCard
              value={organisation.organisationName}
              label="Organisation name"
            />
            <DataCard
              value={organisation.organisationEmail}
              label="Organisation e - mail address"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user
});

export default connect(mapStateToProps)(ProfilePage);
