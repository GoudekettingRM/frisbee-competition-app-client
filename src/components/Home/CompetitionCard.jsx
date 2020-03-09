import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createSetCompetitionAction } from "../../store/competition/actions";
import "./competitionCard.css";

const CompetitionCard = props => {
  const dispatch = useDispatch();
  const { name, startDate, endDate, id } = props.competition;

  const setSelectedCompetition = () => {
    dispatch(createSetCompetitionAction(props.competition));
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

export default CompetitionCard;
