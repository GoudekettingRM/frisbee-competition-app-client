import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export function updateOrganisation(updateData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = authHeader(token);
      const updatedUserData = await axios.patch(
        `${baseUrl}/organisations`,
        updateData,
        authorization
      );

      console.log("Updated user data:", updatedUserData);
    } catch (error) {
      throw error;
    }
  };
}

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
