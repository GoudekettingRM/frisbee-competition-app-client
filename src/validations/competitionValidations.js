import moment from "moment";

export function validCompetitionDates(competitionData) {
  const {
    startDate,
    endDate,
    teamRegistrationDeadline,
    seedingDeadline,
    playersListDeadline,
    competitionDays,
    competitionDayDates
  } = competitionData;

  if (
    moment(startDate).isBefore(moment()) ||
    moment(endDate).isBefore(moment()) ||
    moment(teamRegistrationDeadline).isBefore(moment()) ||
    moment(seedingDeadline).isBefore(moment()) ||
    moment(playersListDeadline).isBefore(moment())
  ) {
    alert("All dates should be filled in and in the future.");
    return false;
  }

  const emptyDatePresent = competitionDayDates.reduce(
    (oneEmptyFound, currentDate) =>
      !oneEmptyFound && currentDate !== "" ? false : true,
    false
  );

  if (
    competitionDays.length &&
    (!competitionDayDates.length ||
      competitionDayDates.find(date => moment(date).isBefore(moment())) ||
      emptyDatePresent)
  ) {
    alert("All dates should be filled in and in the future. ");
    return false;
  }
  return true;
}
