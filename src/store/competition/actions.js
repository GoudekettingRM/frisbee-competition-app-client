import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export function addNewCompetition(competitionData) {
  return async (dispatch, getState) => {
    try {
      console.log(
        "Competition data in add new competition in actions text",
        competitionData
      );
    } catch (error) {
      throw error;
    }
  };
}
