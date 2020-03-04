import axios from "axios";
import { baseUrl } from "../../api";

export const SET_SESSION = "users/SET_SESSION_DATA";
export const REMOVE_SESSION = "users/REMOVE_SESSION_DATA";

export function signUp(userData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/users`, userData);

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

export function logoutAction() {
  return {
    type: REMOVE_SESSION
  };
}
