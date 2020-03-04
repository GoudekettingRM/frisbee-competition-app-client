import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export function addOrganisation(organsationData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = authHeader(token);
      const newOrganisationCreated = await axios.post(
        `${baseUrl}/organisations`,
        organsationData,
        authorization
      );
      console.log("New organisation created test", newOrganisationCreated);
    } catch (error) {
      throw error;
    }
  };
}
