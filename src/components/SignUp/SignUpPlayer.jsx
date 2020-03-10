import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { signUp } from "../../store/user/actions";
import { headerSpacing } from "../../styles";

const styles = theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  padding: {
    marginTop: "80px",
    padding: theme.spacing(1)
  }
});

class SignUpPlayer extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    redirect: null
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirect: "/profile"
    });
  };

  render() {
    const { redirect } = this.state;
    const { token, classes } = this.props;
    if (redirect) return <Redirect to={redirect} />;

    if (token && !redirect) return <div> Sign Up successful ...</div>;

    return (
      <Paper className={classes.padding} style={headerSpacing}>
        <form className={classes.margin} onSubmit={this.onSubmit}>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="firstName"
                label="First name"
                type="text"
                name="firstName"
                fullWidth
                autoFocus
                required
                onChange={this.onChange}
              />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="lastName"
                label="Last name"
                type="text"
                name="lastName"
                fullWidth
                required
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="email"
                label="E - mail"
                type="email"
                name="email"
                fullWidth
                required
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                name="password"
                fullWidth
                required
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ paddingTop: "40px" }}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}>
              Sign up
            </Button>
          </Grid>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = { signUp };

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SignUpPlayer)
);
