import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const UPDATE_USER_ORGANISATION =
  "organisations/UPDATE_ORGANISATION_DATA_FOR_USER";

export function updateOrganisation(updateData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = authHeader(token);
      const updatedOrganisationData = await axios.patch(
        `${baseUrl}/organisations`,
        updateData,
        authorization
      );
      dispatch(updateOrganisationAction(updatedOrganisationData.data));
    } catch (error) {
      throw error;
    }
  };
}

function updateOrganisationAction(updateData) {
  return {
    type: UPDATE_USER_ORGANISATION,
    payload: updateData
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
