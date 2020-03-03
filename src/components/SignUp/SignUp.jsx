import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/user/actions";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("submitting!");
    this.props.signUp(this.state);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={this.state.firstName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
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
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = { signUp };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
