import axios from "axios";
import { baseUrl, authHeader } from "../../api";
import { setNewStatusAction } from "../status/actions";

export const SET_SESSION = "users/SET_SESSION_DATA";
export const REMOVE_SESSION = "users/REMOVE_SESSION_DATA";
export const UPDATE_USER_DATA = "users/UPDATE_USER_DATA";

export function updateUser(updateData) {
  return async (dispatch, getState) => {
    try {
      const token = getState().session.jwt;
      const authorization = authHeader(token);
      const updatedUserData = await axios.patch(
        `${baseUrl}/users`,
        updateData,
        authorization
      );

      dispatch(updateUserAction(updatedUserData.data));
      dispatch(setNewStatusAction(updatedUserData));
    } catch (error) {
      dispatch(setNewStatusAction(error.response));
      throw error;
    }
  };
}

function updateUserAction(updateData) {
  return {
    type: UPDATE_USER_DATA,
    payload: updateData
  };
}

export function signUp(userData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/users`, userData);

      dispatch(setSessionAction(sessionData.data));
      dispatch(setNewStatusAction(sessionData));
    } catch (error) {
      dispatch(setNewStatusAction(error.response));
      throw error;
    }
  };
}

export function login(loginData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/login`, loginData);

      console.log("session data.data login test", sessionData);

      dispatch(setSessionAction(sessionData.data));
      dispatch(setNewStatusAction(sessionData));
    } catch (error) {
      console.log(error.response);
      dispatch(setNewStatusAction(error.response));
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
