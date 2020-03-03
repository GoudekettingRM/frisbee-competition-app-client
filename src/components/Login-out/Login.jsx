import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/user/actions";

class Login extends Component {
  state = {
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
    this.props.login(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    if (this.props.token) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 500);
      return <div>Redirecting... </div>;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <label>E - Mail</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
