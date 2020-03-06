import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const ADD_TEAM_TO_COMPETITION = "teams/ADD_NEW_TEAM_TO_COMPETITION";

export function addTeam(name, organisationId, competitionId, token) {
  return async (dispatch, getState) => {
    try {
      const newTeamData = {
        name,
        organisationId,
        competitionId
      };
      const authorization = authHeader(token);
      const newTeam = await axios.post(
        `${baseUrl}/teams`,
        newTeamData,
        authorization
      );
      console.log("New team test: ", newTeam.data);
      dispatch(addNewTeamToCompetition(newTeam.data));
    } catch (error) {
      throw error;
    }
  };
}

function addNewTeamToCompetition(teamData) {
  return {
    type: ADD_TEAM_TO_COMPETITION,
    payload: teamData
  };
}
