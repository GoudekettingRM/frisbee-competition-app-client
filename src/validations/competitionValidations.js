import isBefore from "date-fns/isBefore";
import parseISO from "date-fns/parseISO";

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
    isBefore(parseISO(startDate), new Date()) ||
    isBefore(parseISO(endDate), new Date()) ||
    isBefore(parseISO(teamRegistrationDeadline), new Date()) ||
    isBefore(parseISO(seedingDeadline), new Date()) ||
    isBefore(parseISO(playersListDeadline), new Date())
  ) {
    alert("All dates should be filled in and in the future.");
    return false;
  }

  const emptyDatePresent = competitionDayDates.reduce(
    (oneEmptyFound, currentDate) => {
      if (!oneEmptyFound && currentDate !== "") {
        return false;
      } else {
        return true;
      }
    },
    false
  );

  if (
    competitionDays.length &&
    (!competitionDayDates.length ||
      competitionDayDates.find(date => isBefore(parseISO(date), new Date())) ||
      emptyDatePresent)
  ) {
    alert("All dates should be filled in and in the future. ");
    return false;
  }
  return true;
}
