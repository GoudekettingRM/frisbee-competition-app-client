import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const ADD_COMPETITION = "competitions/ADD_COMPETITION";
export const ADD_COMPETITION_TO_USER =
  "competitions/ADD_COMPETITION_TO_USER_DATA";

export function addNewCompetition(competitionData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = authHeader(token);
      if (!competitionData.organisationId) {
        console.error(
          "You cannot create a competition, since you are not the contact person of an organisation."
        );
        return null;
      }
      const newCompetition = await axios.post(
        `${baseUrl}/competitions`,
        competitionData,
        authorization
      );
      console.log("newCompetition test", newCompetition);
      dispatch(addCompetitionAction(newCompetition.data.newCompetition));
      dispatch(
        addCompetitionToAllCompetitionsAction(
          newCompetition.data.newCompetition
        )
      );
    } catch (error) {
      throw error;
    }
  };
}

function addCompetitionToAllCompetitionsAction(competitionData) {
  return {
    type: ADD_COMPETITION,
    payload: competitionData
  };
}

function addCompetitionAction(competitionData) {
  return {
    type: ADD_COMPETITION_TO_USER,
    payload: competitionData
  };
}
