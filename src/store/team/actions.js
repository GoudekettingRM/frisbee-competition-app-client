import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const ADD_TEAM_TO_COMPETITION = "teams/ADD_NEW_TEAM_TO_COMPETITION";
export const SET_SELECTED_TEAM_DETAILS =
  "teams/SET_SELECTED_TEAM_DETAILS_TO_STORE";

export function getTeam(teamId) {
  return async (dispatch, getState) => {
    try {
      const team = await axios.get(`${baseUrl}/teams/${teamId}`);
      dispatch(setSelectedTeamDetailsAction(team.data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function addTeam(newTeamData) {
  return async (dispatch, getState) => {
    try {
      const token = getState().session.jwt;
      const authorization = authHeader(token);
      const newTeam = await axios.post(
        `${baseUrl}/teams`,
        newTeamData,
        authorization
      );
      dispatch(addNewTeamToCompetition(newTeam.data));
    } catch (error) {
      throw error;
    }
  };
}

export function setSelectedTeamDetailsAction(teamData) {
  return {
    type: SET_SELECTED_TEAM_DETAILS,
    payload: teamData
  };
}

function addNewTeamToCompetition(teamData) {
  return {
    type: ADD_TEAM_TO_COMPETITION,
    payload: teamData
  };
}
