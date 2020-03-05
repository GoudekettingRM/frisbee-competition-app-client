import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCompetitions } from "../../store/competition/actions";

class Home extends Component {
  componentDidMount = () => {
    if (!this.props.competitions.length) {
      this.props.getAllCompetitions();
    }
  };

  render() {
    return (
      <div>
        <h1>Hi from home</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({ competitions: state.competitions });

const mapDispatchToProps = { getAllCompetitions };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
