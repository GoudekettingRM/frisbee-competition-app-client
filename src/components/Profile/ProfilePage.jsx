import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import DataCard from "./DataCard";

class ProfilePage extends Component {
  render() {
    const { firstName, lastName, email, organisation } = this.props.user;
    return (
      <div
        style={{
          minWidth: "250px",
          maxWidth: "500px",
          margin: "80px auto 0 auto"
        }}>
        <DataCard
          value={firstName}
          name={"firstName"}
          label="First name"
          about="user"
        />
        <DataCard
          value={lastName}
          name={"lastName"}
          label="Last name"
          about="user"
        />
        <DataCard
          value={email}
          name={"email"}
          label="E - mail address"
          about="user"
        />
        {organisation && (
          <div>
            <Typography
              variant="h6"
              component="h2"
              style={{ margin: "20px 0 10px 0" }}>
              Organisation details:
            </Typography>
            <DataCard
              value={organisation.organisationName}
              name={"organisationName"}
              label="Organisation name"
              about="organisation"
            />
            <DataCard
              value={organisation.organisationEmail}
              name={"organisationEmail"}
              label="Organisation e - mail address"
              about="organisation"
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
