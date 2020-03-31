import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { login } from "../../store/user/actions";
import { headerSpacing } from "../../styles";

const styles = theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  padding: {
    margin: "0 auto",
    padding: theme.spacing(1),
    minWidth: "250px",
    maxWidth: "500px"
  }
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    loginError: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { login, history } = this.props;
    await login(this.state);
    console.log("This.state", this.state);
    console.log("token", this.props.token);

    if (this.props.token) {
      this.setState({ email: "", password: "" });
      history.push("/");
    } else {
      this.setState({ email: "", password: "" });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.padding} style={headerSpacing}>
        <form className={classes.margin} onSubmit={this.onSubmit}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="email"
                label="E - mail"
                type="email"
                name="email"
                fullWidth
                autoFocus
                required
                onChange={this.onChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
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
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ paddingTop: "20px" }}>
            <Grid item>
              <span style={{ fontSize: "0.875rem" }}>Not a member ?</span>
              <Button
                type="button"
                disableFocusRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
                onClick={() => this.props.history.push("/signup")}>
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}>
              Login
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

const mapDispatchToProps = { login };

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
