import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCompetitions } from "../../store/competition/actions";
import CompetitionCard from "./CompetitionCard";

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
    const { competitions } = this.props;

    if (!competitions.length) {
      return <div>Loading data...</div>;
    }
    return <div>{this.renderCompetitionCards()}</div>;
  }
}

const mapStateToProps = state => ({ competitions: state.competitions.all });

const mapDispatchToProps = { getAllCompetitions };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
