import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserRole } from "../../helper-files/rbac-helpers";
import { getAllCompetitions } from "../../store/competition/actions";
import { headerSpacing } from "../../styles";
import Can from "../Can";
import CompetitionCard from "./CompetitionCard";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  fab: {
    position: "fixed",
    zIndex: 1,
    bottom: theme.spacing(4),
    right: theme.spacing(3)
  }
});

class Home extends Component {
  componentDidMount = () => {
    if (!this.props.competitions.length) {
      this.props.getAllCompetitions();
    }
  };

  renderCompetitionCards = () => {
    return this.props.competitions.map(competition => (
      <CompetitionCard competition={competition} key={competition.id} />
    ));
  };

  renderAddCompetitionButton = user => {
    const { classes } = this.props;
    return (
      <Can
        roleId={getUserRole(user)}
        perform="competitions:create"
        yes={() => {
          return (
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              className={classes.fab}>
              <AddIcon
                onClick={() => this.props.history.push("/create-competition")}
              />
            </Fab>
          );
        }}
        no={() => null}
      />
    );
  };

  render() {
    const { competitions, user } = this.props;

    console.log("user details", user);
    if (!competitions.length) {
      return (
        <div style={headerSpacing}>
          <div>Loading data...</div>
          {user && this.renderAddCompetitionButton(user)}
        </div>
      );
    }

    return (
      <div style={headerSpacing}>
        {this.renderCompetitionCards()}
        {user && this.renderAddCompetitionButton(user)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  competitions: state.competitions.all,
  token: state.session.jwt,
  user: state.session.user
});

const mapDispatchToProps = { getAllCompetitions };

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
