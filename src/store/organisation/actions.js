import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const UPDATE_USER_ORGANISATION =
  "organisations/UPDATE_ORGANISATION_DATA_FOR_USER";
export const ADD_ORGANISATION_TO_USER_DATA =
  "organisations/ADD_NEW_ORGANISATION_TO_USER";

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
      const newOrganisation = await axios.post(
        `${baseUrl}/organisations`,
        organsationData,
        authorization
      );
      console.log("New organisation created test", newOrganisation);

      dispatch(
        updateUserWithNewOrganisation(newOrganisation.data.newOrganisation)
      );
      // Don't do anything with this yet..
    } catch (error) {
      throw error;
    }
  };
}

function updateUserWithNewOrganisation(newOrganisationData) {
  return {
    type: ADD_ORGANISATION_TO_USER_DATA,
    payload: newOrganisationData
  };
}
