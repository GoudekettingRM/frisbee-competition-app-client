import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount = () => {
    console.log("Login form mounted");
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.token) {
      this.props.history.push("/logout");
    }
    return (
      <form>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
