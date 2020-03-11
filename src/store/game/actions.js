import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const SET_GAME_DETAILS = "games/SET_SELECTED_GAME_DETAILS";
export const ADD_GAME_TO_COMPETITION = "games/ADD_GAME_TO_COMPETITION";

export function updateSpiritScore(spiritScoreData, id) {
  return async (dispatch, getState) => {
    try {
      console.log(`Trying to UPDATE to /spirit-scores/${id}`, spiritScoreData);
      const token = getState().session.jwt;
      const authorization = authHeader(token);
      const gameWithUpdatedSpirit = await axios.patch(
        `${baseUrl}/spirit-scores/${id}`,
        spiritScoreData,
        authorization
      );
      console.log("Game with updated spirit", gameWithUpdatedSpirit);
    } catch (error) {
      console.error(error);
    }
  };
}

export function addSpiritScore(spiritScoreData) {
  return async (dispatch, getState) => {
    try {
      console.log("Trying to send to /spirit-scores", spiritScoreData);

      const token = getState().session.jwt;
      const authorization = authHeader(token);
      const gameWithSpirit = await axios.post(
        `${baseUrl}/spirit-scores`,
        spiritScoreData,
        authorization
      );
      console.log("gameWithSpirit :", gameWithSpirit);
    } catch (error) {
      throw error;
    }
  };
}

export function scoreGame(scores, gameId) {
  return async (dispatch, getState) => {
    try {
      const token = getState().session.jwt;
      const authorization = authHeader(token, { Scoring: true });
      console.log("Authorization test:", authorization);

      const scoredGame = await axios.patch(
        `${baseUrl}/games/${gameId}`,
        scores,
        authorization
      );

      dispatch(setGameDetails(scoredGame.data));
    } catch (error) {
      throw error;
    }
  };
}

export function addGame(gameData) {
  return async (dispatch, getState) => {
    try {
      const token = getState().session.jwt;
      const authorization = authHeader(token);
      const newGame = await axios.post(
        `${baseUrl}/games`,
        gameData,
        authorization
      );
      // console.log("new game", newGame);
      dispatch(addNewGameToCompetition(newGame.data));
    } catch (error) {
      throw error;
    }
  };
}

export function getOneGame(id) {
  return async (dispatch, getState) => {
    try {
      const game = await axios.get(`${baseUrl}/games/${id}`);
      // console.log("Game test in game actions", game);
      dispatch(setGameDetailsAction(game.data));
    } catch (error) {
      throw error;
    }
  };
}

export function setGameDetails(gameData) {
  return (dispatch, getState) => {
    dispatch(setGameDetailsAction(gameData));
  };
}

function addNewGameToCompetition(gameData) {
  return {
    type: ADD_GAME_TO_COMPETITION,
    payload: gameData
  };
}
function setGameDetailsAction(gameData) {
  return {
    type: SET_GAME_DETAILS,
    payload: gameData
  };
}
