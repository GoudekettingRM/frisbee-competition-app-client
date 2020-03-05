import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SET_SELECTED_COMPETITION } from "../../store/competition/actions";
import "./competitionCard.css";

const CompetitionCard = props => {
  const { name, startDate, endDate, id } = props.competition;

  const setSelectedCompetition = () => {
    const setCompetitionAction = {
      type: SET_SELECTED_COMPETITION,
      payload: props.competition
    };
    props.dispatch(setCompetitionAction);
  };

  return (
    <Link
      to={`/competitions/${id}`}
      style={{ textDecoration: "none" }}
      onClick={setSelectedCompetition}>
      <div className="competitionCard">
        <h1>{name}</h1>
        <p>
          starts: {startDate} <br />
          ends: {endDate}
        </p>
      </div>
    </Link>
  );
};

export default connect()(CompetitionCard);
