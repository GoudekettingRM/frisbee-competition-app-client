import axios from "axios";
import { baseUrl } from "../../api";

export const SET_SESSION = "users/SET_SESSION_DATA_AFTER_LOGIN";

export function signUp(userData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/players`, userData);
      console.log("Session data . data", sessionData.data);
      dispatch(setSessionAction(sessionData.data));
    } catch (error) {
      throw error;
    }
  };
}

export function login(loginData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/login`, loginData);
      console.log("session details", sessionData);
      dispatch(setSessionAction(sessionData.data));
    } catch (error) {
      throw error;
    }
  };
}

function setSessionAction(sessionData) {
  return {
    type: SET_SESSION,
    payload: sessionData
  };
}
