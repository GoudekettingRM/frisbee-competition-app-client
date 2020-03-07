import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const SET_FETCHED_COMPETITIONS =
  "competitions/SET_FETCHED_COMPETITIONS_TO_STORE";
export const ADD_COMPETITION = "competitions/ADD_COMPETITION";
export const ADD_COMPETITION_TO_USER =
  "competitions/ADD_COMPETITION_TO_USER_DATA";
export const SET_SELECTED_COMPETITION = "competitions/SET_SELECTED_COMPETITION";

export function addGame(gameData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = authHeader(token);
      const newGame = await axios.post(
        `${baseUrl}/games`,
        gameData,
        authorization
      );
      console.log("new game", newGame);
    } catch (error) {
      throw error;
    }
  };
}

export function getOneCompetition(id) {
  return async (dispatch, getState) => {
    try {
      const competition = await axios.get(`${baseUrl}/competitions/${id}`);
      dispatch(setSelectedCompetitionToStore(competition.data));
    } catch (error) {
      throw error;
    }
  };
}

export function setSelectedCompetitionToStore(competition) {
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

export function addNewCompetition(competitionData, token) {
  return async (dispatch, getState) => {
    try {
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
    } catch (error) {
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
