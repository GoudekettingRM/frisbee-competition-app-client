import axios from "axios";
import { baseUrl } from "../../api";

export const SET_SESSION = "users/SET_SESSION_DATA_AFTER_LOGIN";

export function login(loginDetails) {
  return async (dispatch, getState) => {
    try {
      const sessionDetails = await axios.post(`${baseUrl}/login`, loginDetails);
      console.log("session details", sessionDetails);
      dispatch(setSessionAction(sessionDetails.data));
    } catch (error) {
      throw error;
    }
  };
}

function setSessionAction(sessionDetails) {
  return {
    type: SET_SESSION,
    payload: sessionDetails
  };
}
