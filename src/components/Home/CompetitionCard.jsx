import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./competitionCard.css";

class CompetitionCard extends Component {
  render() {
    const { name, startDate, endDate, id } = this.props.competition;
    return (
      <Link to={`/competitions/${id}`} style={{ textDecoration: "none" }}>
        <div className="competitionCard">
          <h1>{name}</h1>
          <p>
            starts: {startDate} <br />
            ends: {endDate}
          </p>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionCard);
