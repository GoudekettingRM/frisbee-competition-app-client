import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export function addNewCompetition(competitionData, token) {
  return async (dispatch, getState) => {
    try {
      console.log(
        "Competition data in add new competition in actions text",
        competitionData
      );
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
    } catch (error) {
      throw error;
    }
  };
}
