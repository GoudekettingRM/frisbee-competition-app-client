import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrganisation } from "../../store/organisation/actions";
import { headerSpacing } from "../../styles";

class CreateOrganisation extends Component {
  state = {
    organisationName: "",
    roleId: 4,
    organisationEmail: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.addOrganisation(this.state, this.props.token);

    this.setState({
      organisationName: "",
      roleId: 4,
      organisationEmail: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={headerSpacing}>
        <input
          type="text"
          name="organisationName"
          placeholder="Enter organisation name"
          value={this.state.organisationName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="organisationEmail"
          placeholder="Enter e-mail address"
          value={this.state.organisationEmail}
          onChange={this.onChange}
        />
        <input
          type="radio"
          id="club"
          name="roleId"
          value={4}
          onChange={this.onChange}
        />
        <label htmlFor="club">Club Board</label>
        <input
          type="radio"
          id="federation"
          name="roleId"
          value={5}
          onChange={this.onChange}
        />
        <label htmlFor="federation">Federation</label>

        <button type="submit">Sign up</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = {
  addOrganisation
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrganisation);
