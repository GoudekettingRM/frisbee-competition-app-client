import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const SET_FETCHED_COMPETITIONS =
  "competitions/SET_FETCHED_COMPETITIONS_TO_STORE";
export const ADD_COMPETITION = "competitions/ADD_COMPETITION";
export const ADD_COMPETITION_TO_USER =
  "competitions/ADD_COMPETITION_TO_USER_DATA";
export const SET_SELECTED_COMPETITION = "competitions/SET_SELECTED_COMPETITION";

export function getOneCompetition(id) {
  return async (dispatch, getState) => {
    try {
      const competition = await axios.get(`${baseUrl}/competitions/${id}`);
      dispatch(createSetCompetitionAction(competition.data));
    } catch (error) {
      throw error;
    }
  };
}

export function createSetCompetitionAction(competition) {
  return {
    type: SET_SELECTED_COMPETITION,
    payload: competition
  };
}

export function getAllCompetitions() {
  return async (dispatch, getState) => {
    try {
      const competitions = await axios.get(`${baseUrl}/competitions`);
      dispatch(setCompetitionsToStore(competitions.data));
    } catch (error) {
      throw error;
    }
  };
}

function setCompetitionsToStore(competitions) {
  return {
    type: SET_FETCHED_COMPETITIONS,
    payload: competitions
  };
}

export function addNewCompetition(competitionData) {
  return async (dispatch, getState) => {
    try {
      const token = getState().session.jwt;
      const authorization = authHeader(token);
      if (!competitionData.organisationId) {
        console.error(
          "You cannot create a competition, since you are not the contact person of an organisation."
        );
        return null;
      }
      const newCompetition = await axios.post(
        `${baseUrl}/competitions`,
        competitionData,
        authorization
      );
      dispatch(addCompetitionAction(newCompetition.data.newCompetition));
      dispatch(
        addCompetitionToAllCompetitionsAction(
          newCompetition.data.newCompetition
        )
      );
      dispatch(setNewStatusAction(newCompetition));
    } catch (error) {
      dispatch(setNewStatusAction(error.response));
      throw error;
    }
  };
}

function addCompetitionToAllCompetitionsAction(competitionData) {
  return {
    type: ADD_COMPETITION,
    payload: competitionData
  };
}

function addCompetitionAction(competitionData) {
  return {
    type: ADD_COMPETITION_TO_USER,
    payload: competitionData
  };
}
