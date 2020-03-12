import React, { Component } from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { getAllCompetitions } from "../../store/competition/actions";
import CompetitionCard from "./CompetitionCard";
import { fabPositioning, headerSpacing } from "../../styles";
import Can from "../Can";
import { getUserRole } from "../../helper-files/rbac-helpers";

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

  render() {
    const { competitions, user } = this.props;

    if (!competitions.length) {
      return <div style={headerSpacing}>Loading data...</div>;
    }
    return (
      <div style={headerSpacing}>
        {this.renderCompetitionCards()}
        {user && (
          <Can
            roleId={getUserRole(user)}
            perform="competitions:create"
            yes={() => {
              return (
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  style={fabPositioning}>
                  <AddIcon
                    onClick={() =>
                      this.props.history.push("/create-competition")
                    }
                  />
                </Fab>
              );
            }}
            no={() => null}
          />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
