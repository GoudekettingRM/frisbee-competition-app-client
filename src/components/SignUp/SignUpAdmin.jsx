import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/user/actions";

class SignUpAdmin extends Component {
  state = {
    organisationName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleId: 4
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("state test in sign up admin component", this.state);

    this.props.signUp(this.state);

    this.setState({
      organisationName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: 0
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="organisationName"
          placeholder="Enter organisation name"
          value={this.state.organisationName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name of contact person"
          value={this.state.firstName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name of contact person"
          value={this.state.lastName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter e-mail address"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
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
  token: state.session.token
});

const mapDispatchToProps = {
  signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpAdmin);
