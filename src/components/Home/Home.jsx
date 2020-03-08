import React, { Component } from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Redirect } from "react-router-dom";
import { getAllCompetitions } from "../../store/competition/actions";
import CompetitionCard from "./CompetitionCard";
import { fabPositioning, headerSpacing } from "../../styles";
import Can from "../Can";

class Home extends Component {
  state = {
    redirect: null
  };

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
    const userRoleId = user.organisation
      ? user.organisation.roleId
      : user.roleId;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    if (!competitions.length) {
      return <div style={headerSpacing}>Loading data...</div>;
    }
    return (
      <div style={headerSpacing}>
        {this.renderCompetitionCards()}
        {user && (
          <Can
            roleId={userRoleId}
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
                      this.setState({ redirect: "/create-competition" })
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
/*
 {!organisation && (
                <Link to="/create-organisation">Create Club/Federation</Link>
              )}
              <Can
                roleId={userRoleId}
                perform="competitions:create"
                yes={() => {
                  return (
                    <Link to="/create-competition">Create Competition</Link>
                  );
                }}
                no={() => null}
              />
*/

const mapStateToProps = state => ({
  competitions: state.competitions.all,
  token: state.session.jwt,
  user: state.session.user
});

const mapDispatchToProps = { getAllCompetitions };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
