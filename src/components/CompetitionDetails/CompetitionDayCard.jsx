import React from "react";

export default function CompetitionDayCard(props) {
  return (
    <div>
      Competition Day {props.id}: {props.day.date}
    </div>
  );
}
