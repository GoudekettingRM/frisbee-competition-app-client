import axios from "axios";
import { baseUrl, authHeader } from "../../api";

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
      console.log("New team test: ", newTeam);
    } catch (error) {
      throw error;
    }
  };
}
